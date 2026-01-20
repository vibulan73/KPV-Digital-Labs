import { NextRequest, NextResponse } from 'next/server';
import { readData, addItem } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Service } from '@/lib/types';

export async function GET() {
    const services = readData<Service>('services');
    return NextResponse.json(services);
}

export async function POST(request: NextRequest) {
    // Verify authentication
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();

        // Basic validation
        if (!body.title || !body.desc) {
            return NextResponse.json({ error: 'Title and Description are required' }, { status: 400 });
        }

        const newService = addItem('services', body);
        return NextResponse.json(newService, { status: 201 });
    } catch (error) {
        console.error('Error creating service:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
