const UserModel = require('../models/user.model');

module.exports.signUp = async (req, res) => {
  console.log(req.body);
  const { pseudo, password, email } = req.body;

  try {
    user = await UserModel.create({ pseudo, password, email });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send('err');
  }
};
