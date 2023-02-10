interface UserInfo {
    name: string,
    lastName: string,
    email: string,
    phone: string,
    address: Address
    RFC?: string
}

interface Address {
    street: string,
    suburb: string,
    zip: string
    city: string,
    state: string,
    country?: string,
}
