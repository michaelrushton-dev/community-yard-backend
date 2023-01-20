// ROUTES FOR FOODBANKS

import express from 'express';
import {
    getAllFoodbanks,
    postNewFoodbank,
    updateFoodbank,
} from '../funcs/foodbankFuncs.js';
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

router.put('/:id', async (req, res) => {
    const foodbankId = req.params.id;
    updateFoodbank(foodbankId, req);
    return res.json({ success: true, payload: req.body });
});
export default router;
