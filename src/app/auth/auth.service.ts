import { User } from "./user.model";
import { AuthData } from "./auth-data.model";
import { Subject } from 'rxjs/Subject';

export class AuthService {
    authChange = new Subject<boolean>();
    private user: User;

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
        this.authChange.next(true);
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString()
        };
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
    }

    getUser() {
        return {...this.user}; //break reference
    }

    isAuth() {
        return this.user != null;
    }
}