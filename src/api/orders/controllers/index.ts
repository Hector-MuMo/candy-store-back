import { Request, Response } from "express"
import * as OrdersServices from "../services/index"

const getOrders = async (req: Request, res: Response) => {
    let page = Number(req.query.page) ?? 0
    let limit = Number(req.query.limit) ?? 10

    const result = await OrdersServices.getOrders(page, limit)

    if (!result) {
        return res.status(404).send({ code: "not-found", message: "Can't find any order" })
    }

    return res.status(200).send({ orders: result })
}

const getOrder = async (req: Request, res: Response) => {
    const orderId = req.params.id

    if (!orderId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter order id", parameter: "orderId" })
    }

    const result = await OrdersServices.getAOrder(orderId)

    if (!result) {
        return res.status(404).send({ code: "not-found", message: `Can't find order with id: ${orderId}` })
    }

    return res.status(200).send({ order: result })
}

const createOrder = async (req: Request, res: Response) => {
    const order = req.body

    if (!order) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter order", parameter: "order" })
    }

    const result = await OrdersServices.createAOrder(order)

    if (!result) {
        return res.status(500).send({ code: "internal-error/can't-create", message: "There was a problem with the data base creating the order, try again later." })
    }

    return res.status(200).send({ message: "order created correctly", order: result })
}

const updateOrder = async (req: Request, res: Response) => {
    const orderId = req.params.id
    const dataToUpdate = req.body

    if (!orderId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter order id", parameter: "orderId" })
    }
    if (!dataToUpdate) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter data to update", parameter: "dataToUpdate" })
    }

    const result = await OrdersServices.updateAOrder(orderId, dataToUpdate)

    if (!result) {
        return res.status(500).send({ code: "internal-error/can't-update", message: "There was a problem with the data base updating the order, try again later." })
    }

    return res.status(200).send({ message: "order updated correctly", order: result })
}

const deleteOrder = async (req: Request, res: Response) => {
    const orderId = req.params.id

    if (!orderId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter order id", parameter: "orderId" })
    }

    const result = await OrdersServices.deleteAOrder(orderId)

    if (!result) {
        return res.status(500).send({ code: "internal-error/can't-delete", message: "There was a problem with the data base deleting the order, try again later." })
    }

    return res.status(200).send({ message: "order deleted correctly", order: result })
}

export { getOrders, getOrder, createOrder, updateOrder, deleteOrder }