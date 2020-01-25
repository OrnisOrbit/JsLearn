const express = require('express');
const server = express();
const port = 80;

server.get('/', (req, res) => res.status(200).end(`Server time is ${new Date()}`));
server.listen(port, () => console.log(`Time server is listening on port ${port}!`));