import { NextRequest, NextResponse } from 'next/server';
import { readData, addItem } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Career } from '@/lib/types';

export async function GET() {
    const careers = await readData<Career>('careers');
    return NextResponse.json(careers);
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
        if (!body.role || !body.title) {
            return NextResponse.json({ error: 'Role and Title are required' }, { status: 400 });
        }

        const newCareer = await addItem('careers', body);
        return NextResponse.json(newCareer, { status: 201 });
    } catch (error) {
        console.error('Error creating career:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
