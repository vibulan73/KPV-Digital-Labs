import { NextRequest, NextResponse } from 'next/server';
import { readData, updateItem, deleteItem, getItemById } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Leader } from '@/lib/types';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const item = await getItemById<Leader>('leaders', id);

    if (!item) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }

    return NextResponse.json(item);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = await params;
        const body = await request.json();

        if (!await getItemById('leaders', id)) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }

        const updated = await updateItem('leaders', id, body);
        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = await params;
        if (!await deleteItem('leaders', id)) {
            return NextResponse.json({ error: 'Item not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
