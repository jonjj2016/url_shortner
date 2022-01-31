const mongoose = require('mongoose');
const config = require('config');
const asyncHandler = require('express-async-handler')
const db = config.get('mongoURI');

module.exports  = asyncHandler(async () => {
  await mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('MongoDB Connected');
});

