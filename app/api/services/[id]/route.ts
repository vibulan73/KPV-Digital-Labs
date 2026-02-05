import { NextRequest, NextResponse } from 'next/server';
import { readData, updateItem, deleteItem, getItemById } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Service } from '@/lib/types';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const service = await getItemById<Service>('services', id);

    if (!service) {
        return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    return NextResponse.json(service);
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
        if (!await getItemById('services', id)) {
            return NextResponse.json({ error: 'Service not found' }, { status: 404 });
        }

        const updatedService = await updateItem('services', id, body);
        return NextResponse.json(updatedService);
    } catch (error) {
        console.error('Error updating service:', error);
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
        const deleted = await deleteItem('services', id);

        if (!deleted) {
            return NextResponse.json({ error: 'Service not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting service:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
