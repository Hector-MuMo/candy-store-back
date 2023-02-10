import { Request, Response } from "express"
import * as ProductServices from "../services/index"

const getProducts = async (req: Request, res: Response) => {
    let page = Number(req.query.page) ?? 0
    let limit = Number(req.query.limit) ?? 10
    let query = {}

    const result = await ProductServices.getProducts(query, page, limit)

    return res.status(200).send(result)
}

const getProduct = async (req: Request, res: Response) => {
    const productId = req.params.id

    if (!productId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter product Id", parameter: "productId" })
    }

    const result = await ProductServices.getAProduct(productId)
    return res.status(200).send({ product: result })
}

const createProduct = async (req: Request, res: Response) => {
    const product = req.body

    console.log(product)

    if (!product) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter product", parameter: "product" })
    }

    const result = await ProductServices.createProduct(product)

    return res.status(200).send({ product: result })
}

const updateProduct = async (req: Request, res: Response) => {
    const productId = req.params.id
    const dataToUpdate = req.body

    if (!productId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter product Id", parameter: "productId" })
    }
    if (!dataToUpdate) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing information to update", parameter: "dataToUpdate" })
    }

    const result = await ProductServices.updateAProduct(productId, dataToUpdate)

    return res.status(200).send({ message: "updated correctly", productUpdated: result })
}

const deleteProduct = async (req: Request, res: Response) => {
    const productId = req.params.id

    if (!productId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter product Id", parameter: "productId" })
    }

    const result = await ProductServices.deleteAProduct(productId)

    return res.status(200).send({ message: "deleted correctly", productDeleted: result })
}

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}