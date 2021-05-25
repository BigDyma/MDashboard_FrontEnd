import { BehaviorSubject } from 'rxjs';

const userSubject = {
  currentUserSubject: new BehaviorSubject(
    JSON.parse(localStorage.getItem('token') || '{}')
  )
};

const userSubjectBehavior = {
  currentUserValue(): any {
    return userSubject.currentUserSubject.value;
  },
  createUserSubject(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
    userSubject.currentUserSubject.next(token);
  },
  removeUserSubject(): void {
    localStorage.removeItem('token');
    userSubject.currentUserSubject.next(null);
  }
};
export default userSubjectBehavior;
