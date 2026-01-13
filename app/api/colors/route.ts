import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// GET /api/colors - Fetch all saved colors
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('rgb_colors')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch colors' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST /api/colors - Save a new color
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { red, green, blue } = body;

    // Validate input
    if (
      typeof red !== 'number' ||
      typeof green !== 'number' ||
      typeof blue !== 'number' ||
      red < 0 ||
      red > 255 ||
      green < 0 ||
      green > 255 ||
      blue < 0 ||
      blue > 255
    ) {
      return NextResponse.json(
        { error: 'Invalid RGB values. Must be numbers between 0-255.' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('rgb_colors')
      .insert([{ red, green, blue }])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save color' },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
