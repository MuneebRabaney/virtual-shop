import { Errors } from '../components';
console.log(Errors);
const route = [
  {
    url: ['*', '/404'],
    component: Errors.PageNotFound,
    description: 'Error for page not found',
  },
];

export default route;
