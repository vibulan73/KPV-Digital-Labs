import { NextRequest, NextResponse } from 'next/server';
import { readData, addItem } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Project } from '@/lib/types';

export async function GET() {
    const projects = await readData<Project>('projects');
    return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        if (!body.title || !body.description) {
            return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
        }

        const newProject = await addItem('projects', body);
        return NextResponse.json(newProject, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
