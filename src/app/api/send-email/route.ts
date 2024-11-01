/**
 * Server-side modules to send email
 * @author Jiners Enoheart
 * @published July 26, 2024
 * @modified July 26, 2024
 */

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { HTTP_SERVER_ERROR } from '@/libs/const'

interface Email {
  to: string,
  subject: string,
  text: string,
}

// Configure the SMTP transport using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // App password from Google
  }
});

//Router as /api/send-email/
export async function POST(req: NextRequest) {
  let email: Email

  //Get to msg data from request
  try {
    email = await req.json()
  } catch (err) {
    return NextResponse.json({ message: 'Error to receive request', err }, { status: HTTP_SERVER_ERROR })
  }

  //Set email data to send
  const mailOptions = { from: process.env.EMAIL_USER, ...email }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: HTTP_SERVER_ERROR });
  }
}
