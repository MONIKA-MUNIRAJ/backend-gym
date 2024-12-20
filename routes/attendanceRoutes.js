const express = require('express');
const {
  markAttendance,
  getAttendanceByClass,
  getUserAttendance,
} = require('../controllers/attendanceController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, markAttendance);
router.get('/class/:classId', protect, getAttendanceByClass);
router.get('/user', protect, getUserAttendance);

module.exports = router;
