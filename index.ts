import { Error500 } from './src/pages/500';
import { Error404 } from './src/pages/404';
import { Login } from './src/pages/login';
import { Registration } from './src/pages/registration';
import { ChangePassword } from './src/pages/changePassword';
import { ChangeProfile } from './src/pages/changeProfile';
import { Profile } from './src/pages/profile';
import { Chat } from './src/pages/chat';
import router from './src/utils/router';
import Block from './src/utils/Block';
import { Routes } from './src/utils/types';
import { Chat } from './src/pages/chat';

// const ROUTES: Record<string, (root: Element) => void> = {
//   '/500': Error500,
//   '/404': Error404,
//   '/login': Login,
//   '/registration': Registration,
//   '/change-password': ChangePassword,
//   '/change-profile': ChangeProfile,
//   '/profile': Profile,
//   '/chat': Chat,
// };


document.addEventListener('DOMContentLoaded', () => {
  router
    .use(Routes.Index, Login)
    .use(Routes.Register, Registration)
    .use(Routes.Chat, Chat)
    .use(Routes.Profile, Profile)
    .use(Routes.ChangeProfile, ChangeProfile)
    .use(Routes.ChangePassword, ChangePassword)
    .use(Routes.Error500, Error500)
    .use(Routes.Error404, Error404)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    router.start();
    if (!isProtectedRoute) {
      router.go(Routes.Index);
    }
  } catch (e) {
    console.log(e, 'Here')
    router.start();

    if (isProtectedRoute) {

      router.go(Routes.Index);
    }
  }
  // console.log('lol');
  // const root = document.querySelector('#app')!;
  // const route = window.location.pathname;
  // const isRealRoute = route in ROUTES;
  // if (root) {
  //   isRealRoute ? ROUTES[route](root) : ROUTES['/404'](root);
  // }
});
