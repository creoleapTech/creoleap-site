import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const info_resend = new Resend(process.env.RESEND_API_KEY_INFO);


const server = Bun.serve({
  port: 3001,
  async fetch(req: { method: string; url: string | URL; json: () => any; }) {
    // Enable CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(req.url);

    // Handle career application emails
    if (url.pathname === '/api/send-email' && req.method === 'POST') {
      try {
        const body = await req.json();
        const { name, email, phone, role, message, resume } = body;

        const data = await resend.emails.send({
          from: 'Careers <onboarding@resend.dev>',
          to: ['hr@creoleap.com'],
          replyTo: email,
          subject: `New Career Application: ${role}`,
          html: `
            <h2>New Career Application Received</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Role of Interest:</strong> ${role}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
          attachments: resume ? [
            {
              filename: resume.name,
              content: resume.data.split('base64,')[1],
            },
          ] : [],
        });

        return new Response(JSON.stringify({ success: true, data }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        });
      } catch (error) {
        console.error('Error sending email:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to send email' }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          }
        );
      }
    }

    // Handle consultation/info emails
    if (url.pathname === '/api/info-email' && req.method === 'POST') {
      try {
        const body = await req.json();
        const { name, email, mobile, interestedServices, message } = body;

        const data = await info_resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>',
          to: ['info@creoleap.com'],
          replyTo: email,
          subject: `New Consultation Request from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #080A25; border-bottom: 3px solid #0a015a; padding-bottom: 10px;">
                New Consultation Request
              </h2>
              
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;">
                  <strong style="color: #080A25;">Name/Company:</strong> 
                  <span style="color: #333;">${name}</span>
                </p>
                
                <p style="margin: 10px 0;">
                  <strong style="color: #080A25;">Email:</strong> 
                  <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
                </p>
                
                <p style="margin: 10px 0;">
                  <strong style="color: #080A25;">Mobile:</strong> 
                  <a href="tel:${mobile}" style="color: #0066cc;">${mobile}</a>
                </p>
                
                <p style="margin: 10px 0;">
                  <strong style="color: #080A25;">Interested Services:</strong> 
                  <span style="color: #333;">${interestedServices}</span>
                </p>
              </div>
              
              ${message !== 'N/A' ? `
              <div style="margin: 20px 0;">
                <h3 style="color: #080A25;">Requirements:</h3>
                <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0a015a; color: #333;">
                  ${message}
                </p>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                <p>This email was sent from the Creoleap contact form.</p>
              </div>
            </div>
          `,
        });

        return new Response(JSON.stringify({ success: true, data }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        });
      } catch (error) {
        console.error('Error sending info email:', error);
        return new Response(
          JSON.stringify({ error: 'Failed to send email' }),
          {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              ...corsHeaders,
            },
          }
        );
      }
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders });
  },
});

console.log(`API server running on http://localhost:${server.port}`);