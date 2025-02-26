import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 });
  }

  try {
    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_API_KEY,
      },
      body: JSON.stringify({ email, groups: ["147383879108396402"] }), // Note: group ID as a string
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('MailerLite error:', errorText);
      return NextResponse.json({ message: 'Failed to subscribe' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 });
  }
}
