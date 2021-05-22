// eslint-disable-next-line import/no-unresolved
import { GuardToRoute, GuardFunctionRouteProps, Next } from "react-router-guards/dist/types";
import isLogged from "../Auth/Login/_isLogged";

const requireLogin = (to: GuardToRoute, from: GuardFunctionRouteProps | null, next: Next):void => {
    if (to.meta.authOnly && !isLogged()) {
      next.redirect('/SignIn');
    }
    if (to.meta.noAuth && isLogged()){
      next.redirect("/");
    }
    
    next();
  };
  
  export default requireLogin;
  