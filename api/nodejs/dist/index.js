"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const process_route_1 = __importDefault(require("./routes/process.route"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const document_route_1 = __importDefault(require("./routes/document.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 6173;
app.use(express_1.default.json());
app.use((0, cors_1.default)({ credentials: true, origin: true }));
app.get('/', (req, res) => {
    res.json({ data: 'Byro API' });
});
// Routes
app.use('/processes', process_route_1.default);
app.use('/users', user_route_1.default);
app.use('/documents', document_route_1.default);
app.listen(port, () => {
    console.log(`[API] Server is running at http://localhost:${port}`);
});