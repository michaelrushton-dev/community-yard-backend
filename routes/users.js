import express from 'express';
import { getAllUsers } from '../funcs/userFuncs.js';
import Users from '../models/Users.js';
const router = express.Router();

// Get all users - calls getAllUsers() from funcs
router.get('/', async (req, res) => {
    const result = await getAllUsers();
    return res.json({ success: true, payload: result });
});

//Post a new user
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        // creating a new db document with the model of "User"
        const newUser = new Users({
            name: req.body.name,
            email: req.body.email,
            shareLocation: req.body.shareLocation,
        });
        //asyncronously saving it to the database
        await newUser.save();
        console.log('saved new user!', newUser);
    } catch (error) {
        // code to handle the error
        console.log(error);
    }
});

export default router;
