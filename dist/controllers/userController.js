"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    // ... Existing code ...
    static getOneUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = parseInt(req.params.id);
            try {
                const user = yield UserService_1.UserService.getOneUser({ id: userId });
                if (user) {
                    res.json(user);
                }
                else {
                    res.status(404).json({ error: 'User not found' });
                }
            }
            catch (err) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            try {
                const userId = yield UserService_1.UserService.createUser(user);
                res.status(201).json({ id: userId });
            }
            catch (err) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = parseInt(req.params.id);
            const user = req.body;
            try {
                yield UserService_1.UserService.updateUser(userId, user);
                res.status(204).send();
            }
            catch (err) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = parseInt(req.params.id);
            try {
                yield UserService_1.UserService.deleteUser(userId);
                res.status(204).send();
            }
            catch (err) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.UserController = UserController;
function getAllUsers(arg0, getAllUsers) {
    throw new Error('Function not implemented.');
}
exports.getAllUsers = getAllUsers;
function getUserById(arg0, getUserById) {
    throw new Error('Function not implemented.');
}
exports.getUserById = getUserById;
function createUser(arg0, createUser) {
    throw new Error('Function not implemented.');
}
exports.createUser = createUser;
function updateUser(arg0, updateUser) {
    throw new Error('Function not implemented.');
}
exports.updateUser = updateUser;
