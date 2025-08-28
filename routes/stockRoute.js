import express from 'express'
import {createStockItem,getAllStockItems,getStockItem,updateStockItem} from '../controllers/stockController.js';

const router = express.Router();

router.get('/getAll',getAllStockItems);
router.post('/add',createStockItem);
router.get('/getItem/:id',getStockItem);
router.put('/edit/:id',updateStockItem);

export default router;