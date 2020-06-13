const nodemailer = require('nodemailer');
const smtpconfig = require('./config/smtp');
const transporter = nodemailer.createTransport({
    host: smtpconfig.host,
    port: smtpconfig.port,
    secure: false,
    auth: {
        user: smtpconfig.user,
        pass: smtpconfig.pass,
    },
    tsl: {
        rejectUnauthorized: false
    },
});


async function run(){
    const mailSent = await transporter.sendMail({
        text: 'Texto do E-mail',
        subject: 'Assunto do e-mail',
        from: 'Rodrigo Luan <EMAIL>',
        to: ['EMAIL', 'EMAIL']
    })
    console.log(mailSent);
}

run();