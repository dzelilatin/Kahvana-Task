"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const database_1 = __importDefault(require("../database"));
class UserService {
    // ... Existing code ...
    static getOneUser({ id }) {
        return new Promise((resolve, reject) => {
            database_1.default.get('SELECT * FROM user WHERE id = ?', [id], (err, row) => {
                if (err)
                    reject(err);
                else
                    resolve(row || null);
            });
        });
    }
    static createUser(user) {
        return new Promise((resolve, reject) => {
            database_1.default.run('INSERT INTO user (name, email, phoneNumber) VALUES (?, ?, ?)', [user.name, user.email, user.phoneNumber], function (err) {
                if (err)
                    reject(err);
                else
                    resolve(this.lastID);
            });
        });
    }
    static updateUser(id, user) {
        return new Promise((resolve, reject) => {
            database_1.default.run('UPDATE user SET name = ?, email = ?, phoneNumber = ? WHERE id = ?', [user.name, user.email, user.phoneNumber, id], (err) => {
                if (err)
                    reject(err);
                else
                    resolve();
            });
        });
    }
    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            database_1.default.run('DELETE FROM user WHERE id = ?', [id], (err) => {
                if (err)
                    reject(err);
                else
                    resolve();
            });
        });
    }
}
exports.UserService = UserService;
