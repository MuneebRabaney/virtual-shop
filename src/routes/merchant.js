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
   * @description [ view the user dashboard ]
   *
   * */
  {
    exact: true,
    url: '/merchant/dashboard',
    component: Merchant.Dashboard,
  },
];

export default route;
