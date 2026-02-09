import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP with App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 1. Send notification email TO Usama (from contact form)
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📩 New Contact: ${subject}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%); padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">📬 New Message Received</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0 0; font-size: 14px;">Someone reached out via your portfolio</p>
          </div>
          
          <div style="padding: 32px 24px;">
            <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; width: 80px;">From</td>
                  <td style="padding: 8px 0; color: #1e293b; font-size: 15px; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                  <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6366f1; text-decoration: none; font-size: 15px;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Subject</td>
                  <td style="padding: 8px 0; color: #1e293b; font-size: 15px; font-weight: 500;">${subject}</td>
                </tr>
              </table>
            </div>
            
            <div style="margin-bottom: 24px;">
              <h3 style="color: #1e293b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">Message</h3>
              <div style="background: #f8fafc; border-left: 4px solid #6366f1; border-radius: 0 8px 8px 0; padding: 16px 20px;">
                <p style="color: #334155; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; padding-top: 16px; border-top: 1px solid #e5e7eb;">
              <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
            </div>
          </div>
          
          <div style="background: #f8fafc; padding: 16px 24px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">Sent from your portfolio at <a href="https://hmusama.vercel.app" style="color: #6366f1; text-decoration: none;">hmusama.vercel.app</a></p>
          </div>
        </div>
      `,
    });

    // 2. Send auto-reply/confirmation email TO the sender
    await transporter.sendMail({
      from: `"Muhammad Usama" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `✅ Got your message — "${subject}"`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%); padding: 32px 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">Thanks for reaching out! 🙏</h1>
          </div>
          
          <div style="padding: 32px 24px;">
            <p style="color: #1e293b; font-size: 16px; line-height: 1.7; margin: 0 0 16px 0;">
              Hi <strong>${name}</strong>,
            </p>
            <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0 0 16px 0;">
              Thank you for getting in touch! I've received your message and will get back to you as soon as possible — usually within 24 hours.
            </p>
            
            <div style="background: #f8fafc; border-radius: 8px; padding: 20px; margin: 24px 0;">
              <h3 style="color: #1e293b; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0;">Your Message Summary</h3>
              <p style="color: #64748b; font-size: 13px; margin: 0 0 4px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="color: #64748b; font-size: 13px; margin: 0; white-space: pre-wrap;"><strong>Message:</strong> ${message.length > 200 ? message.substring(0, 200) + '...' : message}</p>
            </div>
            
            <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0 0 24px 0;">
              In the meantime, feel free to check out my work:
            </p>
            
            <div style="text-align: center; margin-bottom: 24px;">
              <a href="https://hmusama.vercel.app" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #06b6d4); color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 0 8px 8px 0;">🌐 Portfolio</a>
              <a href="https://github.com/hmusamaofficial" style="display: inline-block; background: #1e293b; color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 0 8px 8px 0;">💻 GitHub</a>
              <a href="https://linkedin.com/in/hmusama" style="display: inline-block; background: #0077B5; color: white; text-decoration: none; padding: 12px 32px; border-radius: 8px; font-weight: 600; font-size: 14px; margin: 0 8px 8px 0;">🔗 LinkedIn</a>
            </div>

            <p style="color: #475569; font-size: 15px; line-height: 1.7; margin: 0;">
              Best regards,<br>
              <strong style="color: #1e293b;">Muhammad Usama</strong><br>
              <span style="color: #6366f1;">QA Engineer @ Texinnova</span>
            </p>
          </div>
          
          <div style="background: #f8fafc; padding: 16px 24px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #94a3b8; font-size: 12px; margin: 0;">
              <a href="https://hmusama.vercel.app" style="color: #6366f1; text-decoration: none;">hmusama.vercel.app</a> · 
              <a href="https://wa.me/923134544995" style="color: #6366f1; text-decoration: none;">WhatsApp</a> · 
              <a href="mailto:hmusama2018@gmail.com" style="color: #6366f1; text-decoration: none;">hmusama2018@gmail.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
