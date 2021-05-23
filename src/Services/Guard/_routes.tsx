import SignUp from "../../Pages/SignUp";
import SignIn from "../../Pages/SignIn";
import NotFound from "../../Pages/NotFound";
import Application from "../../Pages/Dashboard";

export default () => [
    {
      path: '/',
      exact: true,
      component: Application ,
      loading: 'Custom loading for home page...',
      error: 'Custom error for home page',
      meta: {
        authOnly: false,
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
      path: '/Users',
      exact: true,
      meta: {
        adminOnly: true
      }
    },
    {
      path: '*',
      component: NotFound,
      ignoreGlobal: true,
    },
  ];