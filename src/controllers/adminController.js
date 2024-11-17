const Assignment = require('../models/assignmentModel');

// View Assignments
exports.getAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find({ admin: req.user.id }).populate('userId', 'name email');
        res.status(200).json(assignments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Accept Assignment
exports.acceptAssignment = async (req, res) => {
    try {
        const { id } = req.params;
        const assignment = await Assignment.findById(id);

        if (!assignment)
            return res.status(400).json({ message: "Assignments not found!" });

        // check the admin is correct or not 
        if (assignment.admin != req.user._id)
            return res.status(400).json({ message: "You are not authorized to manage this assignment." });

        assignment.status = "Accepted";
        await assignment.save();

        res.status(200).json({ message: 'Assignment accepted', assignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Reject Assignment
exports.rejectAssignment = async (req, res) => {
    try {
        const { id } = req.params;
        const assignment = await Assignment.findById(id);

        if (!assignment)
            return res.status(400).json({ message: "Assignments not found!" });

        // check the admin is correct or not 
        if (assignment.admin != req.user._id)
            return res.status(400).json({ message: "You are not authorized to manage this assignment." });

        assignment.status = "Rejected";
        await assignment.save();
        res.status(200).json({ message: 'Assignment rejected', assignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
