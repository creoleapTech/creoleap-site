import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY_INFO || process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, college, interest, message } = req.body;

    // Validation
    if (!name || !email || !phone || !interest) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailData = await resend.emails.send({
      from: 'Landing Page Form <onboarding@resend.dev>',
      to: ['info@creoleap.com'],
      replyTo: email,
      subject: `New Program Enquiry from ${name} - ${interest}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Program Enquiry Request
          </h2>
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong>Name:</strong> 
              ${name}
            </p>
            <p style="margin: 10px 0;">
              <strong>Email:</strong> 
              <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
            </p>
            <p style="margin: 10px 0;">
              <strong>Phone:</strong> 
              <a href="tel:${phone}" style="color: #3b82f6;">${phone}</a>
            </p>
            ${college ? `
            <p style="margin: 10px 0;">
              <strong>College/University:</strong> 
              ${college}
            </p>
            ` : ''}
            <p style="margin: 10px 0; padding: 10px; background-color: #dbeafe; border-left: 4px solid #3b82f6;">
              <strong>Program of Interest:</strong> 
              <span style="color: #1e40af; font-weight: bold;">${interest}</span>
            </p>
          </div>
          ${message && message.trim() !== '' ? `
          <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <strong style="color: #374151;">Message:</strong>
            <p style="margin: 10px 0 0 0; color: #4b5563; white-space: pre-wrap;">
              ${message}
            </p>
          </div>
          ` : ''}
          <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            This email was sent from the Creoleap program landing page form.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data: emailData });
  } catch (error: any) {
    console.error('Error sending program email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      message: error.message 
    });
  }
}