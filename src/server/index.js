const port = 3031;
const eventTimeout = process.env.EVENTS_TIMEOUT || 2000;
const simulateLateResponse = !!process.env.LATE_RESPONSE || false;
const startAt = process.env.START_AT || '14:20';

const express = require('express');
const app = express();
app.use(express.static('dist'));

const server = require('http').createServer(app);

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});