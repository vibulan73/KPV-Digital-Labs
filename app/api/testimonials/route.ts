import { NextRequest, NextResponse } from 'next/server';
import { readData, addItem } from '@/lib/dataStore';
import { verifyToken } from '@/lib/jwt';
import type { Testimonial } from '@/lib/types';

export async function GET() {
    const testimonials = await readData<Testimonial>('testimonials');
    return NextResponse.json(testimonials);
}

export async function POST(request: NextRequest) {
    const token = request.cookies.get('auth-token')?.value;
    if (!token || !(await verifyToken(token))) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await request.json();
        if (!body.name || !body.quote) {
            return NextResponse.json({ error: 'Name and Quote are required' }, { status: 400 });
        }

        const newTestimonial = await addItem('testimonials', body);
        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        console.error('Error creating testimonial:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
