const express = require('express');
const router = new express.Router();

const ImageData = require('../data/templates.json')

router.get('/', async (req, res) => {
  try {
    var query = req.query;
    var skip = 0;
    // convert year parameter string to int if it exists 
    if (query.hasOwnProperty("skip")) {
      skip = parseInt(query.skip);
    }
    
    const filmData = ImageData;
    console.log('Film Data:', filmData);
    // res.send(filmData.slice(skip*4, skip*4 + 4));
    res.send(filmData);
  } catch (err) {
    console.log('Error:', err);
    res.status(500).send();
  }
});

module.exports = router;
