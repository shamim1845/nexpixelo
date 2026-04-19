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
              <svg width="255" height="46" viewBox="0 0 255 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75.4628 9.36364V37H69.7952L58.7973 21.0497H58.6219V37H51.9422V9.36364H57.6908L68.5672 25.2869H68.7966V9.36364H75.4628ZM78.1429 37V9.36364H97.4128V14.7884H84.8226V20.456H96.4277V25.8942H84.8226V31.5753H97.4128V37H78.1429ZM106.837 9.36364L111.884 18.0945H112.099L117.2 9.36364H124.676L116.337 23.1818L124.946 37H117.281L112.099 28.1747H111.884L106.702 37H99.0909L107.66 23.1818L99.3069 9.36364H106.837ZM126.611 37V9.36364H138.027C140.096 9.36364 141.882 9.76847 143.384 10.5781C144.896 11.3788 146.061 12.4988 146.879 13.9382C147.698 15.3686 148.107 17.0329 148.107 18.9311C148.107 20.8383 147.689 22.5071 146.852 23.9375C146.025 25.3589 144.842 26.4609 143.303 27.2436C141.765 28.0263 139.939 28.4176 137.825 28.4176H130.78V23.1548H136.583C137.591 23.1548 138.432 22.9794 139.106 22.6286C139.79 22.2777 140.307 21.7874 140.658 21.1577C141.009 20.5189 141.185 19.7768 141.185 18.9311C141.185 18.0765 141.009 17.3388 140.658 16.718C140.307 16.0883 139.79 15.6025 139.106 15.2607C138.423 14.9188 137.582 14.7479 136.583 14.7479H133.29V37H126.611ZM156.559 9.36364V37H149.88V9.36364H156.559ZM165.993 9.36364L171.04 18.0945H171.256L176.357 9.36364H183.833L175.493 23.1818L184.103 37H176.438L171.256 28.1747H171.04L165.859 37H158.248L166.817 23.1818L158.464 9.36364H165.993ZM185.768 37V9.36364H205.037V14.7884H192.447V20.456H204.052V25.8942H192.447V31.5753H205.037V37H185.768ZM207.701 37V9.36364H214.38V31.5753H225.877V37H207.701ZM252.824 23.1818C252.824 26.2225 252.239 28.8 251.069 30.9141C249.9 33.0282 248.317 34.634 246.319 35.7315C244.331 36.8291 242.1 37.3778 239.626 37.3778C237.143 37.3778 234.908 36.8246 232.92 35.718C230.931 34.6115 229.353 33.0057 228.183 30.9006C227.023 28.7865 226.442 26.2135 226.442 23.1818C226.442 20.1411 227.023 17.5637 228.183 15.4496C229.353 13.3355 230.931 11.7296 232.92 10.6321C234.908 9.53456 237.143 8.98579 239.626 8.98579C242.1 8.98579 244.331 9.53456 246.319 10.6321C248.317 11.7296 249.9 13.3355 251.069 15.4496C252.239 17.5637 252.824 20.1411 252.824 23.1818ZM245.996 23.1818C245.996 21.3826 245.739 19.8622 245.226 18.6207C244.723 17.3793 243.994 16.4392 243.04 15.8004C242.096 15.1617 240.958 14.8423 239.626 14.8423C238.304 14.8423 237.166 15.1617 236.212 15.8004C235.259 16.4392 234.525 17.3793 234.013 18.6207C233.509 19.8622 233.257 21.3826 233.257 23.1818C233.257 24.9811 233.509 26.5014 234.013 27.7429C234.525 28.9844 235.259 29.9245 236.212 30.5632C237.166 31.2019 238.304 31.5213 239.626 31.5213C240.958 31.5213 242.096 31.2019 243.04 30.5632C243.994 29.9245 244.723 28.9844 245.226 27.7429C245.739 26.5014 245.996 24.9811 245.996 23.1818Z" fill="black"/>
              <circle cx="22.3506" cy="22.5" r="20.5" fill="black"/>
              <path d="M30.2998 33.6451L18.8108 9.2107L31.7584 3.12278L33.402 6.6184L23.6994 11.1805L26.9867 18.1718L36.6893 13.6096L38.3165 17.0703L28.6139 21.6324L33.5448 32.1193L30.2998 33.6451ZM36.6893 13.6096L33.402 6.6184L36.647 5.0926L39.9343 12.0838L36.6893 13.6096Z" fill="#E5E3FF"/>
              <path d="M11.489 42.4899L0 18.0555L3.46066 16.4283L6.74793 23.4195L10.2435 21.7759L11.8872 25.2715L15.3828 23.6279L17.01 27.0886L13.5144 28.7322L11.8872 25.2715L8.39157 26.9152L14.9497 40.8627L11.489 42.4899ZM25.4365 35.9318L22.1493 28.9405L18.6536 30.5842L17.01 27.0886L20.5056 25.4449L13.9475 11.4974L17.4082 9.87021L28.8972 34.3046L25.4365 35.9318Z" fill="#E5E3FF"/>
              </svg>

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
