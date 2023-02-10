import * as OrdersModel from "../models/index"
import { Order } from "../models/ordersType"

const getOrders = async (page?: number, limit?: number) => {
    return await OrdersModel.getAll(page, limit)
}

const getAOrder = async (orderId: string) => {
    return await OrdersModel.getOne(orderId)
}

const createAOrder = async (order: Order) => {
    return await OrdersModel.create(order)
}

const updateAOrder = async (orderId: string, dataToUpdate: any) => {
    return await OrdersModel.update(orderId, dataToUpdate)
}

const deleteAOrder = async (orderId: string) => {
    return await OrdersModel.remove(orderId)
}

export {
    getOrders,
    getAOrder,
    createAOrder,
    updateAOrder,
    deleteAOrder
}



