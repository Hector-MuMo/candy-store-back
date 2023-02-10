import { Product } from "../../products/models/productTypes"

interface Order {
    order_id: string,
    order_payment: string,
    userInfo: UserInfo,
    products: Product[],
    total_products: number,
    delivery_type: string,
    status: "active" | "cancelled" | "pending"
};

export {
    Order
}