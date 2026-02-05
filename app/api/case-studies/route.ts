import { NextRequest, NextResponse } from 'next/server';
import { readData, addItem } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { CaseStudy } from '@/lib/types';

export async function GET() {
    const items = await readData<CaseStudy>('caseStudies');
    return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        if (!body.title || !body.client) {
            return NextResponse.json({ error: 'Title and Client are required' }, { status: 400 });
        }

        const newItem = await addItem('caseStudies', body);
        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
