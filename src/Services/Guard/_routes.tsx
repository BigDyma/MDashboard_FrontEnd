import SignUp from "../../Pages/SignUp";
import SignIn from "../../Pages/SignIn";
import NotFound from "../../Pages/NotFound";
import Application from "../../Pages/Dashboard/Home";
import Projects from '../../Pages/Dashboard/Projects';
import Reports from '../../Pages/Dashboard/Reports';
import Profile from '../../Pages/Dashboard/Profile';

export default () => [
    {
      path: '/',
      exact: true,
      component: Application,
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
      path: '/Dashboard',
      exact: true,
      component: Application,
      meta: {
        adminOnly: false // @TODO set to true
      }
    },
    {
      path:'/Profile',
      exact: true,
      component: Profile,
      meta: {
        adminOnly: false // @ set to true
      }
    },
    {
      path:'/Reports',
      exact: true,
      component: Reports,
      meta: {
        adminOnly: false // @ set to true
      }
    },
    {
      path:'/Projects',
      exact: true,
      component: Projects,
      meta: {
        adminOnly: false // @ set to true
      }
    },
    {
      path: '*',
      component: NotFound,
      ignoreGlobal: true,
    },
  ];