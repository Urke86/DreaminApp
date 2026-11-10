const nodemailer = require('nodemailer');

const json = (statusCode, data) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(data),
});

const clean = (value, limit) =>
  typeof value === 'string' ? value.trim().slice(0, limit) : '';

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' });
  }

  let input;
  try {
    input = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { error: 'Invalid JSON' });
  }

  const name = clean(input.name, 120);
  const email = clean(input.email, 254);
  const subject = clean(input.subject, 160);
  const message = clean(input.message, 5000);

  if (!name || !subject || !message ||
      !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
    return json(400, { error: 'Invalid form fields' });
  }

  if (!process.env.ZOHO_USER || !process.env.ZOHO_PASS) {
    console.error('Contact form: SMTP configuration missing');
    return json(503, { error: 'Contact service temporarily unavailable' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER,
        pass: process.env.ZOHO_PASS,
      },
    });

    await transporter.sendMail({
      from: `DreaminApp Contact <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      replyTo: email,
      subject: `DreaminApp contact: ${subject.replace(/[\\r\\n]/g, ' ')}`,
      text: `Name: ${name}\\nEmail: ${email}\\nSubject: ${subject}\\n\\n${message}`,
    });
    return json(200, { success: true });
  } catch (error) {
    console.error('Contact form delivery failed:', error);
    return json(502, { error: 'Unable to send the message' });
  }
};
