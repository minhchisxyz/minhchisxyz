'use server'

import nodemailer from 'nodemailer'

type State = {
  success: boolean
  message: string
}

export async function sendEmail(prevState: State, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, message: 'Please fill in all fields.' }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Message from ${name} (${email})`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email. Please try again.' }
  }
}

