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
GrowthX-Assignment/
├── src/
│   ├── config/               # Database connection
│   │   └── config.js
│   ├── controllers/          # Business logic for routes
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middleware/           # Middleware for authentication
│   │   └── authMiddleware.js
│   ├── models/               # Mongoose schemas
│   │   ├── assignmentModel.js
│   │   └── userModel.js
│   └── routes/               # API endpoints
│       ├── adminRoutes.js
│       ├── authRoutes.js
│       └── userRoutes.js
├── server.js                 # Entry point
├── .gitignore                # Git ignored files
├── GrowthX-Assignment.postman_collection.json # Postman collection for testing APIs
├──  package.json              # NPM dependencies
