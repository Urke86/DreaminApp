import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { companyName, businessType, fullName, phone, email, selectedPlan, price } = body;

    const { data, error } = await resend.emails.send({
      from: 'DreaminApp <noreply@dreaminapp.rs>',
      to: 'partneri@dreaminapp.rs',
      subject: `New Plan Selection: ${selectedPlan}`,
      html: `
        <h2>New Plan Selection</h2>
        <p><strong>Selected Plan:</strong> ${selectedPlan}</p>
        <p><strong>Price:</strong> ${price}</p>
        <h3>Contact Information:</h3>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 