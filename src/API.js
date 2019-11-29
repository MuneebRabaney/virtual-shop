/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProductInput = {|
  title: string,
  image?: ?string,
  price: number,
  rating?: ?number,
  description?: ?string,
  created_at: any,
  updated_at: any,
|};

export type UpdateProductInput = {|
  id: string,
  title?: ?string,
  image?: ?string,
  price?: ?number,
  rating?: ?number,
  description?: ?string,
  created_at?: ?any,
  updated_at?: ?any,
|};

export type DeleteProductInput = {|
  id: string,
|};

export type CreateCustomerInput = {|
  role: string,
  title: string,
  first_name: string,
  last_name: string,
  password: string,
  order?: ?Array< ?string >,
  contact_number: any,
  email_address: any,
  created_at: any,
  updated_at: any,
|};

export type UpdateCustomerInput = {|
  id: string,
  role?: ?string,
  title?: ?string,
  first_name?: ?string,
  last_name?: ?string,
  password?: ?string,
  order?: ?Array< ?string >,
  contact_number?: ?any,
  email_address?: ?any,
  created_at?: ?any,
  updated_at?: ?any,
|};

export type DeleteCustomerInput = {|
  id: string,
|};

export type CreateMerchantInput = {|
  role: string,
  title: string,
  username: string,
  password: string,
  orders?: ?Array< ?string >,
  products?: ?Array< ?string >,
  contact_number: any,
  email_address: any,
  created_at: any,
  updated_at: any,
|};

export type UpdateMerchantInput = {|
  id: string,
  role?: ?string,
  title?: ?string,
  username?: ?string,
  password?: ?string,
  orders?: ?Array< ?string >,
  products?: ?Array< ?string >,
  contact_number?: ?any,
  email_address?: ?any,
  created_at?: ?any,
  updated_at?: ?any,
|};

export type DeleteMerchantInput = {|
  id: string,
|};

export type CreateOrderInput = {|
  customer_id: string,
  products: Array< string >,
  status: string,
  created_at: any,
  updated_at: any,
|};

export type UpdateOrderInput = {|
  id: string,
  customer_id?: ?string,
  products?: ?Array< string >,
  status?: ?string,
  created_at?: ?any,
  updated_at?: ?any,
|};

export type DeleteOrderInput = {|
  id: string,
|};

export type TableProductFilterInput = {|
  id?: ?TableIDFilterInput,
  title?: ?TableStringFilterInput,
  image?: ?TableStringFilterInput,
  price?: ?TableFloatFilterInput,
  rating?: ?TableFloatFilterInput,
  description?: ?TableStringFilterInput,
  created_at?: ?TableStringFilterInput,
  updated_at?: ?TableStringFilterInput,
|};

export type TableIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type TableStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type TableFloatFilterInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  contains?: ?number,
  notContains?: ?number,
  between?: ?Array< ?number >,
|};

export type TableCustomerFilterInput = {|
  id?: ?TableIDFilterInput,
  role?: ?TableStringFilterInput,
  title?: ?TableStringFilterInput,
  first_name?: ?TableStringFilterInput,
  last_name?: ?TableStringFilterInput,
  password?: ?TableStringFilterInput,
  order?: ?TableStringFilterInput,
  contact_number?: ?TableStringFilterInput,
  email_address?: ?TableStringFilterInput,
  created_at?: ?TableStringFilterInput,
  updated_at?: ?TableStringFilterInput,
|};

export type TableMerchantFilterInput = {|
  id?: ?TableIDFilterInput,
  role?: ?TableStringFilterInput,
  title?: ?TableStringFilterInput,
  username?: ?TableStringFilterInput,
  password?: ?TableStringFilterInput,
  orders?: ?TableStringFilterInput,
  products?: ?TableStringFilterInput,
  contact_number?: ?TableStringFilterInput,
  email_address?: ?TableStringFilterInput,
  created_at?: ?TableStringFilterInput,
  updated_at?: ?TableStringFilterInput,
|};

export type TableOrderFilterInput = {|
  id?: ?TableIDFilterInput,
  customer_id?: ?TableStringFilterInput,
  products?: ?TableStringFilterInput,
  status?: ?TableStringFilterInput,
  created_at?: ?TableStringFilterInput,
  updated_at?: ?TableStringFilterInput,
|};

export type CreateProductMutationVariables = {|
  input: CreateProductInput,
|};

export type CreateProductMutation = {|
  createProduct: ? {|
    __typename: "Product",
    id: string,
    title: string,
    image: ?string,
    price: number,
    rating: ?number,
    description: ?string,
    created_at: any,
    updated_at: any,
  |},
|};

export type UpdateProductMutationVariables = {|
  input: UpdateProductInput,
|};

export type UpdateProductMutation = {|
  updateProduct: ? {|
    __typename: "Product",
    id: string,
    title: string,
    image: ?string,
    price: number,
    rating: ?number,
    description: ?string,
    created_at: any,
    updated_at: any,
  |},
|};

export type DeleteProductMutationVariables = {|
  input: DeleteProductInput,
|};

export type DeleteProductMutation = {|
  deleteProduct: ? {|
    __typename: "Product",
    id: string,
    title: string,
    image: ?string,
    price: number,
    rating: ?number,
    description: ?string,
    created_at: any,
    updated_at: any,
  |},
|};

export type CreateCustomerMutationVariables = {|
  input: CreateCustomerInput,
|};

export type CreateCustomerMutation = {|
  createCustomer: ? {|
    __typename: "Customer",
    id: string,
    role: string,
    title: string,
    first_name: string,
    last_name: string,
    password: string,
    order: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type UpdateCustomerMutationVariables = {|
  input: UpdateCustomerInput,
|};

export type UpdateCustomerMutation = {|
  updateCustomer: ? {|
    __typename: "Customer",
    id: string,
    role: string,
    title: string,
    first_name: string,
    last_name: string,
    password: string,
    order: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type DeleteCustomerMutationVariables = {|
  input: DeleteCustomerInput,
|};

export type DeleteCustomerMutation = {|
  deleteCustomer: ? {|
    __typename: "Customer",
    id: string,
    role: string,
    title: string,
    first_name: string,
    last_name: string,
    password: string,
    order: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type CreateMerchantMutationVariables = {|
  input: CreateMerchantInput,
|};

export type CreateMerchantMutation = {|
  createMerchant: ? {|
    __typename: "Merchant",
    id: string,
    role: string,
    title: string,
    username: string,
    password: string,
    orders: ?Array< ?string >,
    products: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type UpdateMerchantMutationVariables = {|
  input: UpdateMerchantInput,
|};

export type UpdateMerchantMutation = {|
  updateMerchant: ? {|
    __typename: "Merchant",
    id: string,
    role: string,
    title: string,
    username: string,
    password: string,
    orders: ?Array< ?string >,
    products: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type DeleteMerchantMutationVariables = {|
  input: DeleteMerchantInput,
|};

export type DeleteMerchantMutation = {|
  deleteMerchant: ? {|
    __typename: "Merchant",
    id: string,
    role: string,
    title: string,
    username: string,
    password: string,
    orders: ?Array< ?string >,
    products: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type CreateOrderMutationVariables = {|
  input: CreateOrderInput,
|};

export type CreateOrderMutation = {|
  createOrder: ? {|
    __typename: "Order",
    id: string,
    customer_id: string,
    products: Array< string >,
    status: string,
    created_at: any,
    updated_at: any,
  |},
|};

export type UpdateOrderMutationVariables = {|
  input: UpdateOrderInput,
|};

export type UpdateOrderMutation = {|
  updateOrder: ? {|
    __typename: "Order",
    id: string,
    customer_id: string,
    products: Array< string >,
    status: string,
    created_at: any,
    updated_at: any,
  |},
|};

export type DeleteOrderMutationVariables = {|
  input: DeleteOrderInput,
|};

export type DeleteOrderMutation = {|
  deleteOrder: ? {|
    __typename: "Order",
    id: string,
    customer_id: string,
    products: Array< string >,
    status: string,
    created_at: any,
    updated_at: any,
  |},
|};

export type GetProductQueryVariables = {|
  id: string,
|};

export type GetProductQuery = {|
  getProduct: ? {|
    __typename: "Product",
    id: string,
    title: string,
    image: ?string,
    price: number,
    rating: ?number,
    description: ?string,
    created_at: any,
    updated_at: any,
  |},
|};

export type ListProductsQueryVariables = {|
  filter?: ?TableProductFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListProductsQuery = {|
  listProducts: ? {|
    __typename: "ProductConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      title: string,
      image: ?string,
      price: number,
      rating: ?number,
      description: ?string,
      created_at: any,
      updated_at: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetCustomerQueryVariables = {|
  id: string,
|};

export type GetCustomerQuery = {|
  getCustomer: ? {|
    __typename: "Customer",
    id: string,
    role: string,
    title: string,
    first_name: string,
    last_name: string,
    password: string,
    order: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type ListCustomersQueryVariables = {|
  filter?: ?TableCustomerFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListCustomersQuery = {|
  listCustomers: ? {|
    __typename: "CustomerConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      role: string,
      title: string,
      first_name: string,
      last_name: string,
      password: string,
      order: ?Array< ?string >,
      contact_number: any,
      email_address: any,
      created_at: any,
      updated_at: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetMerchantQueryVariables = {|
  id: string,
|};

export type GetMerchantQuery = {|
  getMerchant: ? {|
    __typename: "Merchant",
    id: string,
    role: string,
    title: string,
    username: string,
    password: string,
    orders: ?Array< ?string >,
    products: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type ListMerchantsQueryVariables = {|
  filter?: ?TableMerchantFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListMerchantsQuery = {|
  listMerchants: ? {|
    __typename: "MerchantConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      role: string,
      title: string,
      username: string,
      password: string,
      orders: ?Array< ?string >,
      products: ?Array< ?string >,
      contact_number: any,
      email_address: any,
      created_at: any,
      updated_at: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetOrderQueryVariables = {|
  id: string,
|};

export type GetOrderQuery = {|
  getOrder: ? {|
    __typename: "Order",
    id: string,
    customer_id: string,
    products: Array< string >,
    status: string,
    created_at: any,
    updated_at: any,
  |},
|};

export type ListOrdersQueryVariables = {|
  filter?: ?TableOrderFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListOrdersQuery = {|
  listOrders: ? {|
    __typename: "OrderConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      customer_id: string,
      products: Array< string >,
      status: string,
      created_at: any,
      updated_at: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateProductSubscriptionVariables = {|
  id?: ?string,
  title?: ?string,
  image?: ?string,
  price?: ?number,
  rating?: ?number,
|};

export type OnCreateProductSubscription = {|
  onCreateProduct: ? {|
    __typename: "Product",
    id: string,
    title: string,
    image: ?string,
    price: number,
    rating: ?number,
    description: ?string,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnUpdateProductSubscriptionVariables = {|
  id?: ?string,
  title?: ?string,
  image?: ?string,
  price?: ?number,
  rating?: ?number,
|};

export type OnUpdateProductSubscription = {|
  onUpdateProduct: ? {|
    __typename: "Product",
    id: string,
    title: string,
    image: ?string,
    price: number,
    rating: ?number,
    description: ?string,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnDeleteProductSubscriptionVariables = {|
  id?: ?string,
  title?: ?string,
  image?: ?string,
  price?: ?number,
  rating?: ?number,
|};

export type OnDeleteProductSubscription = {|
  onDeleteProduct: ? {|
    __typename: "Product",
    id: string,
    title: string,
    image: ?string,
    price: number,
    rating: ?number,
    description: ?string,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnCreateCustomerSubscriptionVariables = {|
  id?: ?string,
  role?: ?string,
  title?: ?string,
  first_name?: ?string,
  last_name?: ?string,
|};

export type OnCreateCustomerSubscription = {|
  onCreateCustomer: ? {|
    __typename: "Customer",
    id: string,
    role: string,
    title: string,
    first_name: string,
    last_name: string,
    password: string,
    order: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnUpdateCustomerSubscriptionVariables = {|
  id?: ?string,
  role?: ?string,
  title?: ?string,
  first_name?: ?string,
  last_name?: ?string,
|};

export type OnUpdateCustomerSubscription = {|
  onUpdateCustomer: ? {|
    __typename: "Customer",
    id: string,
    role: string,
    title: string,
    first_name: string,
    last_name: string,
    password: string,
    order: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnDeleteCustomerSubscriptionVariables = {|
  id?: ?string,
  role?: ?string,
  title?: ?string,
  first_name?: ?string,
  last_name?: ?string,
|};

export type OnDeleteCustomerSubscription = {|
  onDeleteCustomer: ? {|
    __typename: "Customer",
    id: string,
    role: string,
    title: string,
    first_name: string,
    last_name: string,
    password: string,
    order: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnCreateMerchantSubscriptionVariables = {|
  id?: ?string,
  role?: ?string,
  title?: ?string,
  username?: ?string,
  password?: ?string,
|};

export type OnCreateMerchantSubscription = {|
  onCreateMerchant: ? {|
    __typename: "Merchant",
    id: string,
    role: string,
    title: string,
    username: string,
    password: string,
    orders: ?Array< ?string >,
    products: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnUpdateMerchantSubscriptionVariables = {|
  id?: ?string,
  role?: ?string,
  title?: ?string,
  username?: ?string,
  password?: ?string,
|};

export type OnUpdateMerchantSubscription = {|
  onUpdateMerchant: ? {|
    __typename: "Merchant",
    id: string,
    role: string,
    title: string,
    username: string,
    password: string,
    orders: ?Array< ?string >,
    products: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnDeleteMerchantSubscriptionVariables = {|
  id?: ?string,
  role?: ?string,
  title?: ?string,
  username?: ?string,
  password?: ?string,
|};

export type OnDeleteMerchantSubscription = {|
  onDeleteMerchant: ? {|
    __typename: "Merchant",
    id: string,
    role: string,
    title: string,
    username: string,
    password: string,
    orders: ?Array< ?string >,
    products: ?Array< ?string >,
    contact_number: any,
    email_address: any,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnCreateOrderSubscriptionVariables = {|
  id?: ?string,
  customer_id?: ?string,
  products?: ?Array< string >,
  status?: ?string,
  created_at?: ?any,
|};

export type OnCreateOrderSubscription = {|
  onCreateOrder: ? {|
    __typename: "Order",
    id: string,
    customer_id: string,
    products: Array< string >,
    status: string,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnUpdateOrderSubscriptionVariables = {|
  id?: ?string,
  customer_id?: ?string,
  products?: ?Array< string >,
  status?: ?string,
  created_at?: ?any,
|};

export type OnUpdateOrderSubscription = {|
  onUpdateOrder: ? {|
    __typename: "Order",
    id: string,
    customer_id: string,
    products: Array< string >,
    status: string,
    created_at: any,
    updated_at: any,
  |},
|};

export type OnDeleteOrderSubscriptionVariables = {|
  id?: ?string,
  customer_id?: ?string,
  products?: ?Array< string >,
  status?: ?string,
  created_at?: ?any,
|};

export type OnDeleteOrderSubscription = {|
  onDeleteOrder: ? {|
    __typename: "Order",
    id: string,
    customer_id: string,
    products: Array< string >,
    status: string,
    created_at: any,
    updated_at: any,
  |},
|};