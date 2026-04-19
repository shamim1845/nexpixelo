import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Contact Form <hello@nexpixelo.com>",
      to: ["nexpixelo@gmail.com"],
      subject: subject || `New message from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>New Inquiry from Nexpixelo</title>
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8f5ff; color: #010212; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border: 1px solid #e1e1e1; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
              .header { background-color: #010212; color: #ffffff; padding: 40px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; letter-spacing: 1px; }
              .content { padding: 40px; line-height: 1.6; }
              .section-title { font-size: 14px; font-weight: bold; text-transform: uppercase; color: #9D9BFF; margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px; }
              .field { margin-bottom: 24px; }
              .label { font-size: 12px; color: #5e5d62; text-transform: uppercase; font-weight: 600; margin-bottom: 4px; }
              .value { font-size: 16px; color: #010212; font-weight: 500; }
              .message-box { background-color: #f9f9f9; padding: 24px; border-radius: 12px; border-left: 4px solid #010212; font-style: italic; }
              .footer { background-color: #fafafa; padding: 20px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #f0f0f0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>NEXPIXELO</h1>
              </div>
              <div class="content">
                <div class="section-title">New Client Inquiry</div>
                
                <div class="field">
                  <div class="label">Client Name</div>
                  <div class="value">${name}</div>
                </div>

                <div style="display: flex; gap: 40px;">
                  <div class="field" style="flex: 1;">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${email}" style="color: #010212; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="field" style="flex: 1;">
                    <div class="label">Phone Number</div>
                    <div class="value">${phone || "Not provided"}</div>
                  </div>
                </div>

                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject || "New Project Inquiry"}</div>
                </div>

                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">
                    ${message.replace(/\n/g, "<br>")}
                  </div>
                </div>
              </div>
              <div class="footer">
                <p>This inquiry was sent from the Nexpixelo official contact form.</p>
                <p>&copy; 2026 Nexpixelo. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
