'use strict';

import mongoose from 'mongoose';
const Thesis = mongoose.model('thesis');

export default addThesis = (req, res) => {
  console.log('POST');
  console.log(req.body);

  let thesis = new Thesis({
    title:    req.body.title,
    date:     req.body.date,
    author:   req.body.author,
    tutor:    req.body.tutor,
    cotutor:  req.body.cotutor,
    dni:      req.body.dni,
    urlPdf:   req.body.urlPdf,
    urlImage: req.body.urlImage
  });

  thesis.save((err, thesis) => {
    if(err) return res.send(500, err.message);
    res.status(200).jsonp(thesis);
  });
};
