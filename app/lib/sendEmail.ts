"use server"

import nodemailer from 'nodemailer'

type SendMail = {
    subject: string,
    body: string
}

export async function sendMail({
    body,
    subject,
}: SendMail) {
    const { NEXT_PUBLIC_EMAIL_PASSWORD, NEXT_PUBLIC_EMAIL_USER } = process.env

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: NEXT_PUBLIC_EMAIL_USER,
            pass: NEXT_PUBLIC_EMAIL_PASSWORD
        }
    })

    try {
        await transport.sendMail({
            from: NEXT_PUBLIC_EMAIL_USER,
            to: NEXT_PUBLIC_EMAIL_USER,
            subject,
            html: body,
        })
    } catch (error) {   
        throw new Error(`Não foi possível enviar a mensagem: ${error}`)
    }
}