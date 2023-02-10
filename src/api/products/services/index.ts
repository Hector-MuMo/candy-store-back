import * as ProductModels from "../models"
import { Product } from "../models/productTypes"

const getProducts = async (query: any, page?: number, limit?: number) => {
    return await ProductModels.getAll(query, page, limit)
}

const getAProduct = async (productId: string) => {
    return await ProductModels.getOne(productId)
}

const createProduct = async (product: Product) => {
    return await ProductModels.create(product)
}

const updateAProduct = async (productId: string, dataToUpdate: any) => {
    return await ProductModels.update(productId, dataToUpdate)
}

const deleteAProduct = async (productId: string) => {
    return await ProductModels.remove(productId)
}

export {
    getProducts,
    getAProduct,
    createProduct,
    updateAProduct,
    deleteAProduct
}