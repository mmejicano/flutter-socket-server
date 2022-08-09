import http from 'http';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { Server } from 'socket.io';
import { socketController } from './sockets/socket.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Node server
const serverHttp = http.createServer(app);
const io = new Server(serverHttp);

// Mensajes sockets
io.on('connection', socketController);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('public'));

serverHttp.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Server running http://localhost:${port}`);
});
