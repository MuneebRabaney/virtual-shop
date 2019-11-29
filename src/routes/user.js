import { User } from '../components';

const route = [
  /**
   * @description [ Sign up a new user ]
   *
   * */
  {
    exact: true,
    url: ['/', '/user/signup'],
    component: User.Signup,
  },

  /**
   * @description [ login a new user ]
   *
   * */
  {
    exact: true,
    url: '/user/login',
    component: User.Login,
  },
];

export default route;
