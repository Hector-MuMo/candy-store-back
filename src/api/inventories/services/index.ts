import * as InventoriesModel from "../models/index"
import { Inventory } from "../models/inventoriesTypes"

const getInventories = async (page?: number, limit?: number) => {
    return await InventoriesModel.getAll(page, limit)
}

const getInventory = async (InventoryId: string) => {
    return await InventoriesModel.getOne(InventoryId)
}

const createInventory = async (inventory: Inventory) => {
    return await InventoriesModel.create(inventory)
}

const updateInventory = async (InventoryId: string, dataToUpdate: any) => {
    return await InventoriesModel.update(InventoryId, dataToUpdate)
}

const deleteInventory = async (InventoryId: string) => {
    return await InventoriesModel.remove(InventoryId)
}

export {
    getInventories,
    getInventory,
    createInventory,
    updateInventory,
    deleteInventory
}