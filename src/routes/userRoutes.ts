// routes/userRoutes.ts
import express from 'express';
import UserController from '../controllers/userController';

const router = express.Router();

// Get all users with optional query parameters
router.get('/users', UserController.getAllUsers);

// Get a single user by ID
router.get('/users/:id', UserController.getUserById);

// Create a new user
router.post('/users', UserController.createUser);

// Update a user by ID
router.put('/users/:id', UserController.updateUser);

export default router;
