const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const body = JSON.parse(event.body);
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
      return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
};