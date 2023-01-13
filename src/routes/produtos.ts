import { Router } from 'express';
import { productController } from '../controllers/produtos';

const productRouter = Router();
productRouter.get('/', productController.read);
productRouter.get('/:id', productController.readFromId);
productRouter.post('/', productController.creat);
productRouter.put('/:id', productController.updateFromId);
productRouter.delete('/:id', productController.deleteFromId);

export { 
    productRouter,
}

