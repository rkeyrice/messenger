import { API } from './api';

export class UserApi extends API {
  constructor() {
    super('/user');
  }

  updateProfile(data: Record<string, string>): Promise<XMLHttpRequest> {
    return this.http.put('/profile', { data, headers: { 'Content-Type': 'application/json' } });
  }

  updateAvatar(data: FormData): Promise<XMLHttpRequest> {
    return this.http.put('/profile/avatar', { data });
  }

  updatePassword(data: Record<string, string>): Promise<XMLHttpRequest> {
    return this.http.put('/password', { data, headers: { 'Content-Type': 'application/json' } });
  }

  searchUser(data: Record<string, string>): Promise<[] | undefined> {
    return this.http.post('/search', { data, headers: { 'Content-Type': 'application/json' } });
  }
}
