import mongoose from "mongoose"
import OrderSchema from "../models/OrderSchema"
import { Order } from "../../orders/models/ordersType"

const getAll = async (page?: number, limit?: number) => {
    const orderModel = mongoose.model("order", OrderSchema, "orders")
    if (limit && page) return await orderModel.find({}).skip(page * limit).limit(limit)
    if (limit) return await orderModel.find({}).limit(limit)

    const result = await orderModel.find({})
    return result
}

const getOne = async (orderId: string) => {
    const orderObjectId = new mongoose.Types.ObjectId(orderId)
    let filter = { _id: orderObjectId }
    const orderModel = mongoose.model("order", OrderSchema, "orders")

    const result = await orderModel.findOne(filter)
    return result
}

const create = async (order: Order) => {
    const orderModel = mongoose.model("order", OrderSchema, "orders")

    const result = await orderModel.create(order)
    return result
}

const update = async (orderId: string, dataToUpdate: any) => {
    const orderObjectId = new mongoose.Types.ObjectId(orderId)
    let filter = { _id: orderObjectId }
    const orderModel = mongoose.model("order", OrderSchema, "orders")

    const result = await orderModel.findOneAndUpdate(filter, { "$set": dataToUpdate }, { upsert: true })
    return result
}

const remove = async (orderId: string) => {
    const orderObjectId = new mongoose.Types.ObjectId(orderId)
    let filter = { _id: orderObjectId }
    const orderModel = mongoose.model("order", OrderSchema, "orders")

    const result = await orderModel.deleteOne(filter)
    return result
}



export {
    getAll,
    getOne,
    create,
    update,
    remove
}