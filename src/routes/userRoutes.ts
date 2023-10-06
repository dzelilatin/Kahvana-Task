// routes/userRoutes.ts
import express from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();

// Get all users with optional query parameters

// Get a single user by ID
router.get('/users/:id', UserController.getOneUser);

// Create a new user
router.post('/users', UserController.createUser);

// Update a user by ID
router.put('/users/:id', UserController.updateUser);

export default router;
