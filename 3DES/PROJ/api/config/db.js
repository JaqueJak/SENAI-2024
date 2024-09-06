const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/yourdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado!');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Para o processo em caso de erro
  }
};

module.exports = connectDB;
