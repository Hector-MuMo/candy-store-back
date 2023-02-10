import express from "express"
import { getInventories, getInventory, createInventory, updateInventory, deleteInventory } from "../controllers"

const router = express.Router()

router.get("/", getInventories)
router.get("/:id", getInventory)
router.post("/", createInventory)
router.put("/:id", updateInventory)
router.delete("/:id", deleteInventory)

export default router