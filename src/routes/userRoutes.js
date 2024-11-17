const express = require('express');
const { uploadAssignment, getAllAdmins } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/upload', protect, uploadAssignment);
router.get('/admins', protect, getAllAdmins);

module.exports = router;
