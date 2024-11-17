const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // console.log(req.body);
        // validations 
        if (!name) {
            return res.status(400).json({ message: "Name is requried" });
        }
        if (!email)
            return res.status(400).json({ message: "Email is requried" });

        if (!password)
            return res.status(400).json({ message: "Password is requried" });

        if (!role)
            return res.status(400).json({ message: "Role is requried" });

        // checking the user is already exists or not 
        const isAvailable = await User.findOne({ email: email });
        if (isAvailable) {
            return res.status(400).json({ message: "User already exists" });
        }

        // create user 
        const user = await User.create({ name, email, password, role });

        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email)
            return res.status(400).json({ message: "Email is requried" });

        if (!password)
            return res.status(400).json({ message: "Password is requried" });

        const user = await User.findOne({ email });
        if (!user || (user && !(await user.matchPassword(password)))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
