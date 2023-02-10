import express from "express"
import mongoose from "mongoose"
import * as dotenv from "dotenv"
import cors from "cors"
import ProductsRoutes from "../src/api/products/routes/index"
import OrdersRoutes from "../src/api/orders/routes/index"

const app = express()
dotenv.config()

const port = process.env.PORT
let corsOptions: cors.CorsOptions = {
    origin: "*",
}

//Conexión a mongoDB
mongoose.connect(`mongodb+srv://hectormm:${process.env.MONGODB_PASSWORD}@sandboxcandyshop.zacm2zy.mongodb.net/candy-shop?retryWrites=true&w=majority`, () => {
    console.log("MongoDB connected")
})

mongoose.connection.on("error", function (e) { console.error(e); });

//Conexión del servidor
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})

//Ruttas
app.use(express.json());
app.use(cors(corsOptions))
app.use("/products", ProductsRoutes)
app.use("/orders", OrdersRoutes)
//app.use("inventories", InvetoriesRotures)
//app.use("users", UsersRotures)