### GrowthX-Assignment
## Overview
This is a backend system for an Assignment Submission Portal where:
- Users can upload assignments.
- Admins can view, accept, or reject assignments.

The system is built using Node.js, Express, and MongoDB. It supports user and admin authentication with role-based access control.

### Technologies Used
- Node.js: Backend runtime.
- Express.js: Web framework for Node.js.
- MongoDB: Database for storing user and assignment data.
- JWT: Authentication via JSON Web Tokens.
- Bcrypt: Password hashing.


### Folder Structure
GrowthX-Assignment/ <br>
├── src/ <br>
│   ├── config/               # Database connection <br>
│   │   └── config.js <br>
│   ├── controllers/          # Business logic for routes <br>
│   │   ├── adminController.js <br>
│   │   ├── authController.js <br>
│   │   └── userController.js <br>
│   ├── middleware/           # Middleware for authentication <br>
│   │   └── authMiddleware.js <br>
│   ├── models/               # Mongoose schemas <br>
│   │   ├── assignmentModel.js <br>
│   │   └── userModel.js <br>
│   └── routes/               # API endpoints <br>
│       ├── adminRoutes.js <br>
│       ├── authRoutes.js <br>
│       └── userRoutes.js <br>
├── server.js                 # Entry point <br>
├── .gitignore                # Git ignored files <br>
├── GrowthX-Assignment.postman_collection.json # Postman collection for testing APIs <br>
├──  package.json              # NPM dependencies <br>
