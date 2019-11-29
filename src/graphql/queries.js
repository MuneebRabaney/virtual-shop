// @flow
// this is an auto generated file. This will be overwritten

export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
export const listProducts = `query ListProducts(
  $filter: TableProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      image
      price
      rating
      description
      created_at
      updated_at
    }
    nextToken
  }
}
`;
export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
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
export const listCustomers = `query ListCustomers(
  $filter: TableCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getMerchant = `query GetMerchant($id: ID!) {
  getMerchant(id: $id) {
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
export const listMerchants = `query ListMerchants(
  $filter: TableMerchantFilterInput
  $limit: Int
  $nextToken: String
) {
  listMerchants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    customer_id
    products
    status
    created_at
    updated_at
  }
}
`;
export const listOrders = `query ListOrders(
  $filter: TableOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customer_id
      products
      status
      created_at
      updated_at
    }
    nextToken
  }
}
`;
