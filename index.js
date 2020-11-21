const mailer = require('./mailer');

mailer.registrationMail({
    toEmail: 'a@ac.in',
    toName: 'heavily armed',
    teamName: 'heavily armed',
});

mailer.getReq();
