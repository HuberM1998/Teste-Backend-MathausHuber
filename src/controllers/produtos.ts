import { Request, Response } from 'express';
import { badRequest, internalServerError, validateNumber, notFound, ok } from '../commons/helpers';
import { Produto, productModel } from '../dao/produtos';

const creat = (req: Request, res: Response) => {

    {
        const product = req.body;
        if (!product)
            return badRequest(res, "Produto inválido");

        if (!product.name)
            return badRequest(res, 'Informe o nome do produto');

        if (!product.category)
            return badRequest(res, 'Informe a categoria do produto');
        
        if (!product.status)
            return badRequest(res, 'Informe o status do produto');
        
        if (!product.quantity)
            return badRequest(res, 'Informe a quantidade');
        
    }

    const product = req.body as Produto;
    return productModel.creat(product)
        .then(product => {
            res.json(product);
        })
        .catch(err => internalServerError(res, err));
}


const updateFromId = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const product = req.body;
        if (!product)
            return badRequest(res, "Produto inválido");

        if (!product.name)
            return badRequest(res, 'Informe o nome do produto');

        if (!product.category)
            return badRequest(res, 'Informe a categoria do produto');
        
        if (!product.status)
            return badRequest(res, 'Informe o status do produto');
        
        if (!product.quantity)
            return badRequest(res, 'Informe a quantidade');

        const productSaved = await productModel.readFromId(id);
        if(!productSaved)
            return notFound(res);
    }

    const product = req.body as Produto;
    return productModel.updateFromId(product)
        .then(product => {
            res.json(product)
        })
        .catch(err => internalServerError(res, err));
}


const read = ({}: Request, res: Response) => {
    productModel.read()
        .then(products => {
            res.json(products)
        })
        .catch(err => internalServerError(res, err));
}

const readFromId = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');
    }

    return productModel.readFromId(id)
        .then((product) => {
            if(product)
                return res.json(product);
            else
                return notFound(res);
        })
        .catch(err => internalServerError(res, err));
}

const deleteFromId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    {
        if(!validateNumber(id))
            return badRequest(res, 'id inválido');

        const productSaved = await productModel.readFromId(id);
        if(!productSaved)
            return notFound(res);
    }

    return productModel.deleteFromId(id)
        .then(() => ok(res))
        .catch(err => internalServerError(res, err));
}

export const productController = {
    creat,
    read,
    readFromId,
    deleteFromId,
    updateFromId
}