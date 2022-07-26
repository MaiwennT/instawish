const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/instawish', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDb'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));

exports.mongoose = mongoose;
