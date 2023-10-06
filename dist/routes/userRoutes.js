"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/userRoutes.ts
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
const router = express_1.default.Router();
// Get all users with optional query parameters
// Get a single user by ID
router.get('/users/:id', UserController_1.UserController.getOneUser);
// Create a new user
router.post('/users', UserController_1.UserController.createUser);
// Update a user by ID
router.put('/users/:id', UserController_1.UserController.updateUser);
exports.default = router;
