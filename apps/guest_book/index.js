const express = require('express');
const session = require('express-session');
const server = express();
const port = 80;


const messages = [];
let errorMessage;


server.set('view engine', 'ejs');
server.use(express.urlencoded({
    extended: true
}));
server.use(session({
    secret: 'super keyboard cat'

}));

server.get('/', (req, response) => {
    response.render('index', {
        'messages': messages,
        'session': req.session
    });
});

server.post('/message/create', (req, response) => {
    const name = req.body.name;
    const message = req.body.message;
    if (name && message) {
        messages.push({
            name,
            message
        });

    } else {
        req.session.errorMessage = "Имя или сообщение не могут быть пустыми";
    }
    response.redirect('/');
});

server.listen(port, () => console.log(`Guestbook listening on port ${port}`));