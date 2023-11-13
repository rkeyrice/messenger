import { Error500 } from './src/pages/500';
import { Error404 } from './src/pages/404';
import { Login } from './src/pages/login';
import { Registration } from './src/pages/registration';
import { ChangePassword } from './src/pages/changePassword';
import { ChangeProfile } from './src/pages/changeProfile';
import { Profile } from './src/pages/profile';
import { Chat } from './src/pages/chat';
import router from './src/utils/router';
import { Routes } from './src/utils/types';
import AuthController from './src/controllers/AuthController';

document.addEventListener('DOMContentLoaded', async () => {
  router
    .use(Routes.Index, Login)
    .use(Routes.Register, Registration)
    .use(Routes.Chat, Chat)
    .use(Routes.Profile, Profile)
    .use(Routes.ChangeProfile, ChangeProfile)
    .use(Routes.ChangePassword, ChangePassword)
    .use(Routes.Error500, Error500)
    .use(Routes.Error404, Error404);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
    default:
  }

  try {
    await AuthController.fetchUser();
    router.start();
    if (!isProtectedRoute) {
      router.go(Routes.Profile);
    }
  } catch (e) {
    router.start();

    if (isProtectedRoute) {
      router.go(Routes.Index);
    }
  }
});
