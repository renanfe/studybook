import express from 'express';
import router from './router';
import path from 'path';
import bodyParser from 'body-parser';
import { AddressInfo } from 'net';

const app = express();

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false} ));
app.use('static', express.static(path.join(__dirname, '/asset')));
app.use("/", router);

const server = app.listen(8080, () => {
  const host = (server.address() as AddressInfo).address;
  const port = (server.address() as AddressInfo).port;
  console.log(`App listening at http://${host}:${port}`);
});