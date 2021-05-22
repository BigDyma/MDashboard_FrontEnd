import { BehaviorSubject } from 'rxjs';

const userSubject = {
    currentUserSubject: new BehaviorSubject(JSON.parse((localStorage.getItem('currentUser') || '{}'))),
}

const userSubjectBehavior = {
    currentUserValue():string {
        return userSubject.currentUserSubject.value;
    },
    createUserSubject(token:string):void {
        localStorage.setItem('token', JSON.stringify(token));
        userSubject.currentUserSubject.next(token);
    }


}
export default userSubjectBehavior;