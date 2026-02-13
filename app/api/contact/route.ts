import { NextRequest, NextResponse } from 'next/server';

async function sendEmail(name: string, email: string, message: string) {
  try {
    // Dynamically import Resend to handle build process
    const resendModule = await import('resend');
    const { Resend } = resendModule;
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.PERSONAL_EMAIL || 'ubaidraza3657767@gmail.com',
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return { success: true, id: data.id };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the request body
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, message' },
        { status: 400 }
      );
    }

    // Log the submission for debugging
    console.log('Contact form submission received:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    // Send email notification
    const emailResult = await sendEmail(name, email, message);

    if (!emailResult.success) {
      // Even if email fails, we'll still return success to the user
      console.error('Failed to send email:', emailResult.error);
    }

    return NextResponse.json(
      { message: 'Message received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}