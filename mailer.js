const mailjet = require ('node-mailjet')
.connect('API_KEY', 'SECRET')


const sendEmail = emailInfo => {
    const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
        Messages: [
            {
                From: {
                    Email: emailInfo.fromEmail,
                    Name: emailInfo.fromName,
                },
                To: [
                    {
                        Email: emailInfo.toEmail,
                        Name: emailInfo.toName,
                    },
                ],
                Subject: emailInfo.subject,
                TextPart: emailInfo.textPart,
                HTMLPart: emailInfo.HTMLPart,
                CustomID: emailInfo.customID,
            },
        ],
    });

    return request
        .then(result => {
            console.log(result.body);
        })
        .catch(err => {
            console.log(err.statusCode);
        });
};
function registrationMail(req) {
    const messageInfo = {
        toEmail: req.toEmail,
        toName: req.toName,
        fromEmail: 'no-reply@company.com',
        fromName: 'Company',
        subject: 'Registration Confirmation',
        textPart: 'Registration Confirmation',
        HTMLPart:
            '<h3>Congrats!! You team ' + req.teamName + ' have successfully registered for Dotslash4.0.</h3>'
        + 'Thansk for your interest',
        customID: 'RegistrationMail',
    };

    sendEmail(messageInfo);

    return { Email: 'Successful' };
}
function getReq(){
    const request = mailjet
	.get("contact")
	.request()
request
	.then((result) => {
		console.log(result.body)
	})
	.catch((err) => {
		console.log(err.statusCode)
	})
}


module.exports ={registrationMail, getReq};
