import express from 'express';
import * as salesController from '../controllers/sales.controller';

const router = express.Router();

//route to get all saless
router.get('', salesController.getAllSaless);

//route to create a new sales
router.post('', salesController.newSales);

//route to get a single sales by their sales id
router.get('/:id', salesController.getSales);

//route to update a single sales by their sales id
router.put('/:id', salesController.updateSales);

//route to delete a single sales by their sales id
router.delete('/:id', salesController.deleteSales);

export default router;
