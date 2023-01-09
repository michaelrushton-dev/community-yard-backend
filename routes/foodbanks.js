// ROUTES FOR FOODBANKS

import express from 'express';
import { getAllFoodbanks, postNewFoodbank } from '../funcs/foodbankFuncs.js';
const router = express.Router();

// Get all foodbanks - calls getAllFoodbanks() from funcs
router.get('/', async (req, res) => {
    const result = await getAllFoodbanks();
    return res.json({ success: true, payload: result });
});

router.post('/', async (req, res) => {
    postNewFoodbank(req);
    console.log(req.body);
    return res.status(200);
});
export default router;
