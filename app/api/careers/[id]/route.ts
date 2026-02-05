import { NextRequest, NextResponse } from 'next/server';
import { readData, updateItem, deleteItem, getItemById } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Career } from '@/lib/types';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const career = await getItemById<Career>('careers', id);

    if (!career) {
        return NextResponse.json({ error: 'Career not found' }, { status: 404 });
    }

    return NextResponse.json(career);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = await params;
        const body = await request.json();

        // Check if exists
        if (!await getItemById('careers', id)) {
            return NextResponse.json({ error: 'Career not found' }, { status: 404 });
        }

        const updatedCareer = await updateItem('careers', id, body);
        return NextResponse.json(updatedCareer);
    } catch (error) {
        console.error('Error updating career:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id } = await params;
        const deleted = await deleteItem('careers', id);

        if (!deleted) {
            return NextResponse.json({ error: 'Career not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting career:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
