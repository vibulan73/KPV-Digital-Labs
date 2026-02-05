import { NextRequest, NextResponse } from 'next/server';
import { readData, updateItem, deleteItem } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Project } from '@/lib/types';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const projects = await readData<Project>('projects');
    const project = projects.find((p) => p.id === id);
    if (!project) {
        return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json(project);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const updated = await updateItem('projects', id, body);
        return NextResponse.json(updated);
    } catch (error: any) {
        if (error.message === 'Item not found') {
            return NextResponse.json({ error: 'Not Found' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        await deleteItem('projects', id);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        if (error.message === 'Item not found') {
            return NextResponse.json({ error: 'Not Found' }, { status: 404 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
