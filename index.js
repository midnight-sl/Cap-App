import express from "express";
import { createServer } from "http";

//  Express app setup
const app = express();

const server = createServer(app);
server.listen(3000);
server.on('listening', () => {
    console.log('Server is listening on port: 3000');
});

app.get('*', (req, res) => {
    res.end('Hello Express');
});