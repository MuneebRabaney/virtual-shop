// @flow
// this is an auto generated file. This will be overwritten

export const onCreateProduct = `subscription OnCreateProduct(
  $id: ID
  $title: String
  $image: String
  $price: Float
  $rating: Float
) {
  onCreateProduct(
    id: $id
    title: $title
    image: $image
    price: $price
    rating: $rating
  ) {
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
export const onUpdateProduct = `subscription OnUpdateProduct(
  $id: ID
  $title: String
  $image: String
  $price: Float
  $rating: Float
) {
  onUpdateProduct(
    id: $id
    title: $title
    image: $image
    price: $price
    rating: $rating
  ) {
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
export const onDeleteProduct = `subscription OnDeleteProduct(
  $id: ID
  $title: String
  $image: String
  $price: Float
  $rating: Float
) {
  onDeleteProduct(
    id: $id
    title: $title
    image: $image
    price: $price
    rating: $rating
  ) {
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
export const onCreateCustomer = `subscription OnCreateCustomer(
  $id: ID
  $role: String
  $title: String
  $first_name: String
  $last_name: String
) {
  onCreateCustomer(
    id: $id
    role: $role
    title: $title
    first_name: $first_name
    last_name: $last_name
  ) {
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
export const onUpdateCustomer = `subscription OnUpdateCustomer(
  $id: ID
  $role: String
  $title: String
  $first_name: String
  $last_name: String
) {
  onUpdateCustomer(
    id: $id
    role: $role
    title: $title
    first_name: $first_name
    last_name: $last_name
  ) {
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
export const onDeleteCustomer = `subscription OnDeleteCustomer(
  $id: ID
  $role: String
  $title: String
  $first_name: String
  $last_name: String
) {
  onDeleteCustomer(
    id: $id
    role: $role
    title: $title
    first_name: $first_name
    last_name: $last_name
  ) {
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
export const onCreateMerchant = `subscription OnCreateMerchant(
  $id: ID
  $role: String
  $title: String
  $username: String
  $password: String
) {
  onCreateMerchant(
    id: $id
    role: $role
    title: $title
    username: $username
    password: $password
  ) {
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
export const onUpdateMerchant = `subscription OnUpdateMerchant(
  $id: ID
  $role: String
  $title: String
  $username: String
  $password: String
) {
  onUpdateMerchant(
    id: $id
    role: $role
    title: $title
    username: $username
    password: $password
  ) {
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
export const onDeleteMerchant = `subscription OnDeleteMerchant(
  $id: ID
  $role: String
  $title: String
  $username: String
  $password: String
) {
  onDeleteMerchant(
    id: $id
    role: $role
    title: $title
    username: $username
    password: $password
  ) {
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
export const onCreateOrder = `subscription OnCreateOrder(
  $id: ID
  $customer_id: String
  $products: [String!]
  $status: String
  $created_at: AWSDateTime
) {
  onCreateOrder(
    id: $id
    customer_id: $customer_id
    products: $products
    status: $status
    created_at: $created_at
  ) {
    id
    customer_id
    products
    status
    created_at
    updated_at
  }
}
`;
export const onUpdateOrder = `subscription OnUpdateOrder(
  $id: ID
  $customer_id: String
  $products: [String!]
  $status: String
  $created_at: AWSDateTime
) {
  onUpdateOrder(
    id: $id
    customer_id: $customer_id
    products: $products
    status: $status
    created_at: $created_at
  ) {
    id
    customer_id
    products
    status
    created_at
    updated_at
  }
}
`;
export const onDeleteOrder = `subscription OnDeleteOrder(
  $id: ID
  $customer_id: String
  $products: [String!]
  $status: String
  $created_at: AWSDateTime
) {
  onDeleteOrder(
    id: $id
    customer_id: $customer_id
    products: $products
    status: $status
    created_at: $created_at
  ) {
    id
    customer_id
    products
    status
    created_at
    updated_at
  }
}
`;
