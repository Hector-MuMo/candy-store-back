import mongoose from "mongoose"
import InventorySchema from "./InventorySchema"

const getAll = async (page?: number, limit?: number) => {
    const InventoryModel = mongoose.model("inventory", InventorySchema, "inventories")
    if (limit && page) return await InventoryModel.find({}).skip(page * limit).limit(limit)
    if (limit) return await InventoryModel.find({}).limit(limit)

    const result = await InventoryModel.find({})
    return result
}

const getOne = async (inventoryId: string) => {
    const inventoryObjectId = new mongoose.Types.ObjectId(inventoryId)
    let filter = { _id: inventoryObjectId }
    const InventoryModel = mongoose.model("inventory", InventorySchema, "inventories")

    const result = await InventoryModel.findOne(filter)
    return result
}

const create = async (inventory: Inventory) => {
    const InventoryModel = mongoose.model("inventory", InventorySchema, "inventories")

    const result = await InventoryModel.create(inventory)
    return result
}

const update = async (inventoryId: string, dataToUpdate: any) => {
    const inventoryObjectId = new mongoose.Types.ObjectId(inventoryId)
    let filter = { _id: inventoryObjectId }
    const InventoryModel = mongoose.model("inventory", InventorySchema, "inventories")

    const result = await InventoryModel.findOneAndUpdate(filter, { "$set": dataToUpdate }, { upsert: true })
    return result
}

const remove = async (inventoryId: string) => {
    const inventoryObjectId = new mongoose.Types.ObjectId(inventoryId)
    let filter = { _id: inventoryObjectId }
    const InventoryModel = mongoose.model("inventory", InventorySchema, "inventories")

    const result = await InventoryModel.deleteOne(filter)
    return result
}



export {
    getAll,
    getOne,
    create,
    update,
    remove
}