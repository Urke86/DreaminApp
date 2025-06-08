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
    const { companyName, businessType, fullName, phone, email, selectedPlan, price } = JSON.parse(event.body);

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
      from: `DreaminApp Izaberi Plan <${process.env.ZOHO_USER}>`,
      to: 'office@dreaminapp.rs',
      subject: `Izaberi plan: ${selectedPlan} (${price})`,
      html: `
        <h2>Novi zahtev za plan</h2>
        <p><strong>Kompanija:</strong> ${companyName}</p>
        <p><strong>Delatnost:</strong> ${businessType}</p>
        <p><strong>Ime i prezime:</strong> ${fullName}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Plan:</strong> ${selectedPlan}</p>
        <p><strong>Cena:</strong> ${price}</p>
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