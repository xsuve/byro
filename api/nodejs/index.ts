// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const colors = require('colors');
// const cors = require('cors');
// const http = require('http');
// const server = http.createServer(app);
// const io = require('socket.io')(server, {
//   cors: true,
//   // origins: ['http://192.168.100.139:8080'],
// });

// app.use(cors({ credentials: true, origin: true }));

// // parse requests of content-type: application/json
// app.use(bodyParser.json({ limit: '50mb' }));

// // parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

// // Home route
// app.get('/', (req, res) => {
//   res.json({ message: 'Byro API is running.' });
// });

// // Routes
// // require('./routes/user.routes.js')(app);
// // require('./routes/document.routes.js')(app);
// // require('./routes/s3.routes.js')(app);
// require('./routes/process.routes.js')(app);

// // SocketIO
// io.on('connection', (socket) => {
//   // Desktop join
//   socket.on('desktop_join', (roomId) => {
//     socket.join(roomId);
//   });

//   // Mobile join
//   socket.on('mobile_join', (roomId) => {
//     socket.join(roomId);
//     socket.on('images', (images) => {
//       socket.broadcast.to(roomId).emit('images', images);
//     });
//   });

//   socket.on('disconnect', () => {
//     //
//   });

//   socket.on('error', (error) => {
//     console.log('[SocketIO] '.red + 'Error: ', error);
//   });
// });

// // set port, listen for requests
// const PORT = process.env.PORT || 8080;
// server.listen(PORT, () => {
//   console.log(`[Byro API] `.green + `Server is running on port ${PORT}.`);
// });

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import processRoute from './routes/process.route';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6173;

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.get('/', (req: Request, res: Response) => {
  res.json({ data: 'Byro API' });
});

// Routes
app.use('/processes', processRoute);

app.listen(port, () => {
  console.log(`[API] Server is running at http://localhost:${port}`);
});
