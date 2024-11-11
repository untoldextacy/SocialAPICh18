const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// GET all users and POST a new user
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// GET, PUT, and DELETE a user by ID
router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// POST and DELETE a friend by IDs
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
