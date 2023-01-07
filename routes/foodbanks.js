import express from 'express';
import { getAllFoodbanks } from '../funcs/foodbankFuncs.js';
const router = express.Router();

// Get all foodbanks - calls getAllFoodbanks() from funcs
router.get('/', async (req, res) => {
    const result = await getAllFoodbanks();
    return res.json({ success: true, payload: result });
});

export default router;
