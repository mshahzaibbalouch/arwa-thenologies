const express = require("express");
const Contact = require("../model/contact")
const router = express.Router();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

router.post("/contact", async (req, res) => {
    try {
        const contactsData = req.body;
        const contact = new Contact(contactsData);
        const contactData = await contact.save()

        const emailData = {
            to: 'arwa.techpk@gmail.com',
            from: 'hassaantahirrock@gmail.com',
            subject: 'New Client email',
            text: JSON.stringify(contactsData),
        };

        sgMail.send(emailData)
            .then(() => {
                console.log('Email sent successfully');
            })
            .catch((error) => {
                console.log('Error sending email:', error);
                
            });

        return res.status(200).json({ message: "Contact successfully saved", data: contactData })
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/contact', async (req, res) => {

    const contacts = await Contact.find();

    res.json({
        status: true,
        contacts: contacts
    })

})

module.exports = router;