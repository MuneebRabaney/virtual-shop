// @flow
// this is an auto generated file. This will be overwritten

export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    title
    image
    price
    rating
    description
    created_at
    updated_at
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    title
    image
    price
    rating
    description
    created_at
    updated_at
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    title
    image
    price
    rating
    description
    created_at
    updated_at
  }
}
`;
export const createCustomer = `mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
    id
    role
    title
    first_name
    last_name
    password
    order
    contact_number
    email_address
    created_at
    updated_at
  }
}
`;
export const updateCustomer = `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    id
    role
    title
    first_name
    last_name
    password
    order
    contact_number
    email_address
    created_at
    updated_at
  }
}
`;
export const deleteCustomer = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
  deleteCustomer(input: $input) {
    id
    role
    title
    first_name
    last_name
    password
    order
    contact_number
    email_address
    created_at
    updated_at
  }
}
`;
export const createMerchant = `mutation CreateMerchant($input: CreateMerchantInput!) {
  createMerchant(input: $input) {
    id
    role
    title
    username
    password
    orders
    products
    contact_number
    email_address
    created_at
    updated_at
  }
}
`;
export const updateMerchant = `mutation UpdateMerchant($input: UpdateMerchantInput!) {
  updateMerchant(input: $input) {
    id
    role
    title
    username
    password
    orders
    products
    contact_number
    email_address
    created_at
    updated_at
  }
}
`;
export const deleteMerchant = `mutation DeleteMerchant($input: DeleteMerchantInput!) {
  deleteMerchant(input: $input) {
    id
    role
    title
    username
    password
    orders
    products
    contact_number
    email_address
    created_at
    updated_at
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    id
    customer_id
    products
    status
    created_at
    updated_at
  }
}
`;
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
    id
    customer_id
    products
    status
    created_at
    updated_at
  }
}
`;
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
    id
    customer_id
    products
    status
    created_at
    updated_at
  }
}
`;
