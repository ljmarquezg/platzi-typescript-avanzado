enum ROLES {
ADMIN = "admin",
SELLER = "seller",
CUSTOMER = "customer"
}

type User = {
    username: string;
    roles: ROLES;
}

const adminUser: User = {
    username: 'nicobytes',
    roles: ROLES.ADMIN
}