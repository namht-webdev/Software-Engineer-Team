const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAUTH_PLAYGOURND = 'https://developers.google.com/oauthplayground';
require('dotenv').config();

const {
    MAIL_SERVICE_CLIENT_ID,
    MAIL_SERVICE_CLIENT_SECRET,
    MAIL_SERVICE_REFRESH_TOKEN,
    CENTRAL_CONTACT_EMAIL
} = process.env;

const OAuth2Client = new google.auth.OAuth2(
    MAIL_SERVICE_CLIENT_ID,
    MAIL_SERVICE_CLIENT_SECRET,
    MAIL_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGOURND
)

const sentMail = (to, url, task) => {
    OAuth2Client.setCredentials({
        refresh_token: MAIL_SERVICE_REFRESH_TOKEN
    })

    const accessToken = OAuth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: CENTRAL_CONTACT_EMAIL,
            clientId: MAIL_SERVICE_CLIENT_ID,
            clientSecret: MAIL_SERVICE_CLIENT_SECRET,
            refreshToken: MAIL_SERVICE_REFRESH_TOKEN,
            accessToken
        }
    });

    const mailOptions = {
        from: CENTRAL_CONTACT_EMAIL,
        to: to,
        subject: 'CodeEx',
        html:
            `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the CODEEX.</h2>
        <p>Congratulations! You're almost set to start using ✮✮✮CodeEx✮✮✮.
            Just click the button below to validate your email address.
        </p>
        
        <a href=${url} style="background: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${task}</a>
    
        <p>If the button doesn't work for any reason, you can also click on the link below:</p>
    
        <div>${url}</div>
        </div>
        `
    }

    smtpTransport.sendMail(mailOptions, (err, infor) => {
        if (err) return err;
        return infor;
    })

}

module.exports = sentMail;