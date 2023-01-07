import express from 'express';
import { getAllUsers, postNewUser } from '../funcs/userFuncs.js';
const router = express.Router();

// GET ALL USERS - calls getAllUsers() from funcs
router.get('/', async (req, res) => {
    const result = await getAllUsers();
    return res.json({ success: true, payload: result });
});

//POST A NEW USER
router.post('/', async (req, res) => {
    console.log(req.body);
    postNewUser(req);
});

export default router;
