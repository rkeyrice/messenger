import { Error500 } from './src/pages/500';
import { Error404 } from './src/pages/404';
import { Login } from './src/pages/login';
import { Registration } from './src/pages/registration';
import { ChangePassword } from './src/pages/changePassword';
import { ChangeProfile } from './src/pages/changeProfile';
import { Profile } from './src/pages/profile';
import { Chat } from './src/pages/chat';

const ROUTES: Record<string, (root: Element) => void> = {
  '/500': Error500,
  '/404': Error404,
  '/login': Login,
  '/registration': Registration,
  '/change-password': ChangePassword,
  '/change-profile': ChangeProfile,
  '/profile': Profile,
  '/chat': Chat,
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')!;
  const route = window.location.pathname;
  const isRealRoute = route in ROUTES;
  if (root) {
    isRealRoute ? ROUTES[route](root) : ROUTES['/404'](root);
  }
});
