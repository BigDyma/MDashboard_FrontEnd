
import userSubjectBehavior from './_userSubject';

const isLogged = () => {
    const currentUser = userSubjectBehavior.currentUserValue();
    // console.log (currentUserSubject.value.token);
    return (currentUser && currentUser.token !== undefined);
  }

export default isLogged;