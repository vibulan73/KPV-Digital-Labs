import { NextRequest, NextResponse } from 'next/server';
import { readData, addItem } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Blog } from '@/lib/types';

export async function GET() {
    const items = await readData<Blog>('blogs');
    return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        if (!body.title || !body.content) {
            return NextResponse.json({ error: 'Title and Content are required' }, { status: 400 });
        }

        const newItem = await addItem('blogs', body);
        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
