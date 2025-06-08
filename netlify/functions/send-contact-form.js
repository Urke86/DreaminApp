const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER, // npr. office@dreaminapp.rs
        pass: process.env.ZOHO_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `DreaminApp Kontakt <${process.env.ZOHO_USER}>`,
      to: 'office@dreaminapp.rs',
      subject: `Kontakt forma: ${subject}`,
      html: `
        <h2>Nova poruka sa kontakt forme</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Predmet:</strong> ${subject}</p>
        <p><strong>Poruka:</strong> ${message}</p>
      `,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Zoho send error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

// Force redeploy for Netlify troubleshooting 