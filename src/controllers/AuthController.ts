import {
  AuthAPI, ISignInData, IUser,
} from '../api/AuthAPI';
import Router from '../utils/Router';
import store from '../utils/store';
import { Routes } from '../utils/types';

class AuthController {
  private api = new AuthAPI();

  async signin(data: ISignInData): Promise<void> {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      Router.go(Routes.ChangeProfile);
    } catch (error) {
      console.log(error);
    }
  }

  async signup(data: IUser): Promise<void> {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      Router.go(Routes.Chat);
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.api.logout();
      store.set('user', undefined);
      Router.go('/');
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUser(): Promise<void> {
    const user = await this.api.getUser();
    store.set('user', user);
  }
}

export default new AuthController();
