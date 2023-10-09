import express from 'express';
import { UserController } from './controllers/UserController';

const app = express();
const port = 3000; // Change to your desired port

// Middleware for parsing JSON requests
app.use(express.json());

// Define routes for User entity
app.get('/api/users/:id', UserController.getOneUser);
app.get('/', UserController.getRandom);
app.post('/api/users', UserController.createUser);
app.put('/api/users/:id', UserController.updateUser);
app.delete('/api/users/:id', UserController.deleteUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
