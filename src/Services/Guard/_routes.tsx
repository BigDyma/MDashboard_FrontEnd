import SignUp from '../../Pages/SignUp';
import SignIn from '../../Pages/SignIn';
import NotFound from '../../Pages/NotFound';
import Application from '../../Pages/Dashboard/Home';
import Projects from '../../Pages/Dashboard/Projects';
import Reports from '../../Pages/Dashboard/Reports';
import Profile from '../../Pages/Dashboard/Profile';
import ProjectAdd from '../../Pages/Dashboard/Projects/Add';
import ReportAdd from '../../Pages/Dashboard/Reports/Add';
import ViewReport from '../../Pages/Dashboard/ViewReport';

export default () => [
  {
    path: '/',
    exact: true,
    component: Application,
    error: 'Custom error for home page',
    meta: {
      authOnly: true
    }
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
    meta: {
      noAuth: true
    }
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
      adminOnly: true // @TODO set to true
    }
  },
  {
    path: '/Profile',
    exact: true,
    component: Profile,
    meta: {
      authOnly: true // @ set to true
    }
  },
  {
    path: '/Reports',
    exact: true,
    component: Reports,
    meta: {
      authOnly: true // @ set to true
    }
  },
  {
    path: '/Projects',
    exact: true,
    component: Projects,
    meta: {
      authOnly: true // @ set to true
    }
  },
  {
    path: '/Projects/add',
    exact: true,
    component: ProjectAdd,
    meta: {
      authOnly: true // @ set to true
    }
  },
  {
    path: '/Reports/add',
    exact: true,
    component: ReportAdd,
    meta: {
      authOnly: true // @ set to true
    }
  },
  {
    path: '/Reports/:id',
    exact: true,
    component: ViewReport,
    meta: {
      authOnly: true // @ set to true
    }
  },
  {
    path: '/Projects/:id',
    exact: true,
    component: Reports,
    meta: {
      authOnly: true // @ set to true
    }
  },
  {
    path: '*',
    component: NotFound,
    ignoreGlobal: true
  }
];
