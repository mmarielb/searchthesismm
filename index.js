'use strict';

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import addThesis from './controllers/thesisControllers';

const app = express();
const router = express.Router();
const database = 'mongodb://localhost/searchthesismm';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

router.route('/newthesis')
  .post(addThesis);

app.use('/api', router);

const server = app.listen(3000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('app listening at http://%s:%s', host, port);
});

mongoose.connect(database, (err, res) => {
  if(err) {
    console.log(`ERROR: connecting to Database ${err}`);
  }
  server;
});
