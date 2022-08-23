const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    service: "outlook",
    port: 587,
    secure:false,
    auth: {
        user: "janakiraman12345678900@outlook.com",
        pass:"Janakiraman00."
    }
})

const confirmationMail =async (email, link) => {
   await transporter.sendMail({
        from: "janakiraman12345678900@outlook.com",
        to: email,
        subject: `Access link`,
        text: `Your access link is ${link}`
    })
    
}

module.exports = confirmationMail