import User from '../models/user.models.js';

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    console.error('Create User Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Fetch Users Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
