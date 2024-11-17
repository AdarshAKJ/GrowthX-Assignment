const Assignment = require('../models/assignmentModel');
const User = require('../models/userModel');

// Upload Assignment
exports.uploadAssignment = async (req, res) => {
    try {
        const { task, admin } = req.body;

        if (req.user.role != "User")
            return res.status(400).json({ message: "only user can upload Assignment" });
        // validation
        if (!task)
            return res.status(400).json({ message: "task is requried" });
        if (!admin)
            return res.status(400).json({ message: "admin is requried" });

        // check the admin exits or not 
        const isAdminExist = await User.findOne({
            _id: admin,
            role: 'Admin'
        })
        if (!isAdminExist) {
            return res.status(400).json({ message: "admin not exist" });
        }

        // create assignment
        const assignment = await Assignment.create({ userId: req.user.id, task, admin });

        res.status(201).json({ message: 'Assignment uploaded', assignment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Fetch All Admins
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 'Admin' }).select("name email");
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
