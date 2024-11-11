// /controllers/userController.js
const { User, Thought } = require('../models');

module.exports = {
  // GET all users
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // GET a single user by ID
  async getUserById(req, res) {
    try {
      const user = await User.findById(req.params.userId).populate(['thoughts', 'friends']);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // PUT to update a user by ID
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE a user by ID
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (user) {
        await Thought.deleteMany({ _id: { $in: user.thoughts } }); // Bonus: delete associated thoughts
      }
      res.json({ message: 'User and associated thoughts deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // POST to add a friend to a user's friend list
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // DELETE to remove a friend from a user's friend list
  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
