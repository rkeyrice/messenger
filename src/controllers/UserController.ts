import { UserApi } from '../api/UserAPI';
import store from '../utils/store';

class UserController {
  private api = new UserApi();

  async updateAvatar(data: FormData): Promise<void> {
    try {
      const user = await this.api.updateAvatar(data);
      store.set('user', user);
    } catch (error) {
      console.log(error);
    }
  }

  async updateProfile(data: Record<string, string>): Promise<void> {
    try {
      const user = await this.api.updateProfile(data);
      store.set('user', user);
    } catch (error) {
      console.log(error);
    }
  }

  async updatePassword(data: Record<string, string>): Promise<void> {
    try {
      await this.api.updatePassword(data);
    } catch (error) {
      console.log(error);
    }
  }

  async searchUser(data: Record<string, string>): Promise<[] | undefined> {
    try {
      return await this.api.searchUser(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();
