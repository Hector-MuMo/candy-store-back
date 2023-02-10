interface Product {
    sku: string,
    name: string,
    description: string,
    brand: string,
    price: string,
    priceComparasion?: string,
    cost: string,
    category: string,
    imgs: string[],
    status: "active" | "disabled"
}

export { Product }