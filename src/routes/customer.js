import { Customer } from '../components';

const route = [
  /**
   * @description [ Sign up a new user ]
   *
   * */
  {
    exact: true,
    url: '/customer/signup',
    component: Customer.Signup,
  },

  /**
   * @description [ login a new user ]
   *
   * */
  {
    exact: true,
    url: '/customer/Dashboard',
    component: Customer.Dashboard,
  },
];

export default route;
