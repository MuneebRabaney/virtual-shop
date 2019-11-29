import { Merchant } from '../components';

const route = [
  /**
   * @description [ Sign up a new merchant ]
   *
   * */
  {
    exact: true,
    url: '/merchant/signup',
    component: Merchant.Signup,
  },

  /**
   * @description [ login a merchant ]
   *
   * */
  {
    exact: true,
    url: '/merchant/login',
    component: Merchant.Login,
  },

  /**
   * @description [ view the user Dashboard ]
   *
   * */
  {
    exact: true,
    url: '/merchant/dashboard',
    component: Merchant.Dashboard,
  },

  /**
   * @description [ Create a new product for a merchant ]
   *
   * */
  {
    exact: true,
    url: '/merchant/product/create',
    component: Merchant.Product.Create,
  },

  /**
   * @description [ view the user Dashboard ]
   *
   * */
  {
    exact: true,
    url: '/merchant/product/edit/:id',
    component: Merchant.Product.Edit,
  },

  /**
   * @description [ view the user Dashboard ]
   *
   * */
  {
    exact: true,
    url: '/merchant/products',
    component: Merchant.Product.List,
  },

  /**
   * @description [ view the user Dashboard ]
   *
   * */
  {
    exact: true,
    url: '/merchant/product/:id',
    component: Merchant.Product.Single,
  },
];

export default route;
