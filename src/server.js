import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import cors from 'cors'

const server = express();

mongoose.connect('mongodb+srv://maha:maha@cluster0-zbn90.mongodb.net/codecadetmatch?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3333);