const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/config');

dotenv.config();
connectDB();

const app = express();
app.get("/", (req, res) => {
    console.log("working");
    res.json({ data: "Hello World" });
});

app.use(bodyParser.json());
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/user', require('./src/routes/userRoutes'));
app.use('/api/admin', require('./src/routes/adminRoutes'));

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});
