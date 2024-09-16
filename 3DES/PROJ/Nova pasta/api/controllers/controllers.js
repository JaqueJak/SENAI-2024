const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registrar usuário
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'Usuário já existe' });
    }

    user = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10), // Hash da senha
    });

    await user.save();

    const payload = { userId: user.id };
    const token = jwt.sign(payload, 'secrettoken', { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
};

module.exports = { registerUser };
