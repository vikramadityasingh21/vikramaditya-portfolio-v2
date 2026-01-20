import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send confirmation email to subscriber
    await resend.emails.send({
      from: 'Product Thinking <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Product Thinking!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Welcome to Product Thinking!</h2>
          <p>Hi there,</p>
          <p>Thanks for subscribing to Product Thinking — your weekly guide to product management, strategy, and building high-performing teams.</p>
          <p>You'll receive insights on:</p>
          <ul>
            <li>E2E Product Management strategies</li>
            <li>Program management excellence</li>
            <li>AI and Data strategy</li>
            <li>Team topologies and organizational design</li>
            <li>Digital transformation approaches</li>
          </ul>
          <p>Look forward to connecting with you!</p>
          <p>Best,<br>Vikramaditya Singh</p>
        </div>
      `,
    });

    // Send notification to admin
    await resend.emails.send({
      from: 'Product Thinking <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL || 'your-email@example.com',
      subject: `New Product Thinking Subscriber: ${email}`,
      html: `
        <p>New subscriber: <strong>${email}</strong></p>
        <p>Timestamp: ${new Date().toISOString()}</p>
      `,
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Successfully subscribed to Product Thinking!' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to subscribe. Please try again later.' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}