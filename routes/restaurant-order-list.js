
"use strict";

//this is the restaurants list of incoming orders

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  //restaurants orderlist of incoming orders
  router.get('/restaurant/:id/orderlist', (req, res) => {
    req.session.user_id = req.params.id;
    let templateVars = {
      
    }
    res.render('', templateVars);
  })


  return router;
}

