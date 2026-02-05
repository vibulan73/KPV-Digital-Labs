import { NextRequest, NextResponse } from 'next/server';
import { readData, addItem } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { KPVTalk } from '@/lib/types';

export async function GET() {
    const items = await readData<KPVTalk>('kpvTalk');
    return NextResponse.json(items);
}

export async function POST(request: NextRequest) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        if (!body.title || !body.videoUrl) {
            return NextResponse.json({ error: 'Title and Video URL are required' }, { status: 400 });
        }

        const newItem = await addItem('kpvTalk', body);
        return NextResponse.json(newItem, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
