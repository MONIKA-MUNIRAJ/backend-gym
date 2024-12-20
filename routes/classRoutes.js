const express = require('express');
const {
  getClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass,
} = require('../controllers/classController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getClasses);
router.get('/:id', protect, getClassById);
router.post('/', protect, createClass);
router.put('/:id', protect, updateClass);
router.delete('/:id', protect, deleteClass);

module.exports = router;
