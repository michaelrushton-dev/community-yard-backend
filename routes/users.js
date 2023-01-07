import express from 'express';
import { getAllUsers } from '../funcs/userFuncs.js';
const router = express.Router();

// Get all users - calls getAllUsers() from funcs
router.get('/', async (req, res) => {
    const result = await getAllUsers();
    return res.json({ success: true, payload: result });
});

export default router;
