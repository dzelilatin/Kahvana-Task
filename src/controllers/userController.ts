import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { User } from '../interfaces/user';

export class UserController {
  // ... Existing code ...
  static async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      if (users) {
        res.json(users);
      } else {
        res.status(404).json({ error: 'Users not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }


  static async getOneUser(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.id);

    try {
      const user = await UserService.getOneUser({ id: userId });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    const user = req.body as User;

    try {
      const userId = await UserService.createUser(user);
      res.status(201).json({ id: userId });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.id);
    const user = req.body as User;

    try {
      await UserService.updateUser(userId, user);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    const userId = parseInt(req.params.id);

    try {
      await UserService.deleteUser(userId);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
export function getAllUsers(arg0: string, getAllUsers: any) {
    throw new Error('Function not implemented.');
}

export function getUserById(arg0: string, getUserById: any) {
    throw new Error('Function not implemented.');
}

export function createUser(arg0: string, createUser: any) {
    throw new Error('Function not implemented.');
}

export function updateUser(arg0: string, updateUser: any) {
    throw new Error('Function not implemented.');
}

