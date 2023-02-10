import { Request, Response } from "express"
import * as InventoriesServices from "../services/index"

const getInventories = async (req: Request, res: Response) => {
    let page = Number(req.query.page) ?? 0
    let limit = Number(req.query.limit) ?? 10

    const result = await InventoriesServices.getInventories(page, limit)

    if (!result) {
        return res.status(404).send({ code: "not-found", message: "Can't find any Inventory" })
    }

    return res.status(200).send({ inventories: result })
}

const getInventory = async (req: Request, res: Response) => {
    const inventoryId = req.params.id

    if (!inventoryId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter Inventory id", parameter: "InventoryId" })
    }

    const result = await InventoriesServices.getInventory(inventoryId)

    if (!result) {
        return res.status(404).send({ code: "not-found", message: `Can't find Inventory with id: ${inventoryId}` })
    }

    return res.status(200).send({ inventory: result })
}

const createInventory = async (req: Request, res: Response) => {
    const inventory = req.body

    if (!inventory) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter Inventory", parameter: "Inventory" })
    }

    const result = await InventoriesServices.createInventory(inventory)

    if (!result) {
        return res.status(500).send({ code: "internal-error/can't-create", message: "There was a problem with the data base creating the Inventory, try again later." })
    }

    return res.status(200).send({ message: "Inventory created correctly", inventory: result })
}

const updateInventory = async (req: Request, res: Response) => {
    const inventoryId = req.params.id
    const dataToUpdate = req.body

    if (!inventoryId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter Inventory id", parameter: "InventoryId" })
    }
    if (!dataToUpdate) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter data to update", parameter: "dataToUpdate" })
    }

    const result = await InventoriesServices.updateInventory(inventoryId, dataToUpdate)

    if (!result) {
        return res.status(500).send({ code: "internal-error/can't-update", message: "There was a problem with the data base updating the Inventory, try again later." })
    }

    return res.status(200).send({ message: "Inventory updated correctly", inventory: result })
}

const deleteInventory = async (req: Request, res: Response) => {
    const inventoryId = req.params.id

    if (!inventoryId) {
        return res.status(400).send({ code: "bad-request/missing-param", message: "Missing parameter Inventory id", parameter: "InventoryId" })
    }

    const result = await InventoriesServices.deleteInventory(inventoryId)

    if (!result) {
        return res.status(500).send({ code: "internal-error/can't-delete", message: "There was a problem with the data base deleting the Inventory, try again later." })
    }

    return res.status(200).send({ message: "Inventory deleted correctly", inventory: result })
}

export { getInventories, getInventory, createInventory, updateInventory, deleteInventory }