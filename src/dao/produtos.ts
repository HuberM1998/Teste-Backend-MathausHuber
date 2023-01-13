import { dbQuery, dbQueryFirst } from "../commons/connection"

var timestamp = new Date().getTime();
var ts = new Date(timestamp);

export type Produto = {
    id: number;
    name: string;
    category: string;
    status: number;
    quantity: number;
    created_at: string;
    updated_at: string;
    deleted_at: string; //O interessante seria ter uma nova tabela com o atributo deleted_at, nesta tabela ele fica obsoleto. Usaria ele tal qual o SoftDelete do Laravel.
}

const creat = async (product: Produto) => {
    product.created_at = ts.toLocaleDateString("pt-BR");
    await dbQuery(`INSERT INTO product (name, category, status, quantity, created_at, updated_at, deleted_at) VALUES(?, ?, ?, ?, ?, ?, ?)`, [product.name, product.category, product.status, product.quantity, product.created_at, product.updated_at, product.deleted_at])
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE  name = 'product'`);
    return readFromId(retorno[0].Id);
}

const updateFromId = async (product: Produto) => {
    product.updated_at = ts.toLocaleDateString("pt-BR");
    await dbQuery(`UPDATE product SET name = ?, category = ?, status = ?, quantity = ?, created_at = ?, updated_at = ?, deleted_at = ? WHERE id = ?`, [product.name, product.category, product.status, product.quantity, product.created_at, product.updated_at, product.deleted_at])
    return readFromId(product.id);
}

const read = async () => {
    const retorno = await dbQuery(`SELECT * FROM product`);
    return retorno as Produto[];
}

const readFromId = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM product WHERE id = ?`, [id]);
    return retorno as Produto | undefined;
}

const deleteFromId = async (id: number) => {
    await dbQueryFirst(`DELETE FROM product WHERE id = ?`, [id]);
}

export const productModel = {
    creat,
    read,
    readFromId,
    deleteFromId,
    updateFromId
}