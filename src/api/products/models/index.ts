import mongoose from "mongoose";
import ProductSchema from "./productSchema";
import { Product } from "../models/productTypes"

const getAll = async (query: any, page?: number, limit?: number) => {
    const productModel = mongoose.model("product", ProductSchema, "products")

    if (limit && page) return await productModel.find(query).skip(page * limit).limit(limit)
    if (limit) return await productModel.find(query).limit(limit)

    return await productModel.find(query)
}

const getOne = async (productId: string) => {
    let productObjectId = new mongoose.Types.ObjectId(productId)
    let filter = { _id: productObjectId }
    const productModel = mongoose.model("product", ProductSchema, "products")

    const result = await productModel.findOne(filter)
    return result
}

const create = async (product: Product) => {
    const productModel = mongoose.model("product", ProductSchema, "products")

    const result = await productModel.create(product)
    return result
}

const update = async (productId: string, dataToUpdate: any) => {
    let productObjectId = new mongoose.Types.ObjectId(productId)
    let filter = { _id: productObjectId }
    const productModel = mongoose.model("product", ProductSchema, "products")

    const result = await productModel.findOneAndUpdate(filter, { "$set": dataToUpdate }, { upsert: true })
    return result
}

const remove = async (productId: string) => {
    let productObjectId = new mongoose.Types.ObjectId(productId)
    let filter = { _id: productObjectId }
    const productModel = mongoose.model("product", ProductSchema, "products")

    const result = await productModel.deleteOne(filter)
    return result
}


export {
    getAll,
    getOne,
    create,
    update,
    remove
}