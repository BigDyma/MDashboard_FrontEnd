// eslint-disable-next-line import/no-unresolved
import { GuardToRoute, GuardFunctionRouteProps, Next } from "react-router-guards/dist/types";
import isLogged from "../Auth/Login/_isLogged";
import {getRoles} from '../Auth/SessionParser';

const requireLogin = (to: GuardToRoute, from: GuardFunctionRouteProps | null, next: Next):void => {
    if (to.meta.authOnly && !isLogged()) {
      next.redirect('/SignIn');
    }
    if (to.meta.noAuth && isLogged()){
      next.redirect("/");
    }
    if (to.meta.adminOnly && getRoles() !== 'admin'){
      next.redirect('/');
    }
    next();
  };
  
  export default requireLogin;
  