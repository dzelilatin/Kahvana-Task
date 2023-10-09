import db from '../database';
import { User } from '../interfaces/user';

export class UserService {
  static getAllUsers(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM user', (err, row) => {
        if (err) reject(err);
        else resolve(row as User || null);
      });
    });
  }

  static getOneUser({ id }: { id: number; }): Promise<User | null> {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM user WHERE id = ?', [id], (err, row) => {
        if (err) reject(err);
        else resolve(row as User || null);
      });
    });
  }

  static createUser(user: User): Promise<number> {
    return new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO user (name, email, phoneNumber) VALUES (?, ?, ?)',
        [user.name, user.email, user.phoneNumber],
        function (err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
  }

  static updateUser(id: number, user: User): Promise<void> {
    return new Promise((resolve, reject) => {
      db.run(
        'UPDATE user SET name = ?, email = ?, phoneNumber = ? WHERE id = ?',
        [user.name, user.email, user.phoneNumber, id],
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
  }

  static deleteUser(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      db.run('DELETE FROM user WHERE id = ?', [id], (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }
}


function reject(err: any) {
  throw new Error('Function not implemented.');
}

function resolve(arg0: User) {
  throw new Error('Function not implemented.');
}

