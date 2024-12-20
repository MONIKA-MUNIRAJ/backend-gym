const Attendance = require('../models/Attendance');

// Mark attendance
exports.markAttendance = async (req, res) => {
  const { classId, userId, status } = req.body;
  try {
    const attendance = await Attendance.findOneAndUpdate(
      { classId, userId },
      { status },
      { new: true, upsert: true }
    );
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get attendance by class
exports.getAttendanceByClass = async (req, res) => {
  try {
    const attendance = await Attendance.find({ classId: req.params.classId }).populate('userId', 'name email');
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get attendance for a user
exports.getUserAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ userId: req.user.id }).populate('classId', 'name schedule');
    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
