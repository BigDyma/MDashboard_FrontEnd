import SignUp from "../../Pages/SignUp";
import SignIn from "../../Pages/SignIn";
import NotFound from "../../Pages/NotFound";


export default () => [
    {
      path: '/',
      exact: true,
      component: NotFound,
      loading: 'Custom loading for home page...',
      error: 'Custom error for home page',
      meta: {
        authOnly: true,
      },
    },
    {
      path: '/SignUp',
      exact: true,
      component: SignUp,
      meta: {
          noAuth: true
      }
    },
    {
      path: '/SignIn',
      exact: true,
      component: SignIn,
    },
    {
      path: '*',
      component: NotFound,
      ignoreGlobal: true,
    },
  ];