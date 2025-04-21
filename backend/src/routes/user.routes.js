import express from 'express';
import { createUser, getUsers } from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/register', createUser); // Create user
router.get('/', getUsers);            // List all users

export default router;
