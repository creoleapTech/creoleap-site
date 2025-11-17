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
    const { name, email, mobile, interestedServices, message } = req.body;

    // Validation
    if (!name || !email || !mobile || !interestedServices) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailData = await resend.emails.send({
      from: 'Contact Form ',
      to: ['info@creoleap.com'],
      replyTo: email,
      subject: `New Consultation Request from ${name}`,
      html: `
        
          
            New Consultation Request
          
          
          
            
              Name/Company: 
              ${name}
            
            
            
              Email: 
              ${email}
            
            
            
              Mobile: 
              ${mobile}
            
            
            
              Interested Services: 
              ${interestedServices}
            
          
          
          ${message !== 'N/A' && message ? `
          
            Requirements:
            
              ${message}
            
          
          ` : ''}
          
          
            This email was sent from the Creoleap contact form.
          
        
      `,
    });

    return res.status(200).json({ success: true, data: emailData });
  } catch (error: any) {
    console.error('Error sending consultation email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      message: error.message 
    });
  }
}