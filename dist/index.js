"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = require("./controllers/UserController");
const app = (0, express_1.default)();
const port = 3000; // Change to your desired port
// Middleware for parsing JSON requests
app.use(express_1.default.json());
// Define routes for User entity
app.get('/api/users/:id', UserController_1.UserController.getOneUser);
app.post('/api/users', UserController_1.UserController.createUser);
app.put('/api/users/:id', UserController_1.UserController.updateUser);
app.delete('/api/users/:id', UserController_1.UserController.deleteUser);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
