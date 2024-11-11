const router = require('express').Router();
const { getUsers, createUser } = require('../../controllers/userController');

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// GET all thoughts and POST a new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// GET, PUT, and DELETE a thought by ID
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST and DELETE reactions by thought ID and reaction ID
router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
