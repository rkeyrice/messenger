import { Error500 } from "./src/pages/500";
import { Error404 } from "./src/pages/404";
import { Login } from "./src/pages/login";
import { Registration } from "./src/pages/registration";
import { ChangePassword } from "./src/pages/changePassword";
import { ChangeProfile } from "./src/pages/changeProfile";
import { Profile } from "./src/pages/profile";
import { Chat } from "./src/pages/chat";

const ROUTES: Record<string, string> = {
  "/500": Error500,
  "/404": Error404,
  "/login": Login,
  "/registration": Registration,
  "/change-password": ChangePassword,
  "/change-profile": ChangeProfile,
  "/profile": Profile,
  "/chat": Chat,
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("app");
  if (root) {
    const component = ROUTES[window.location.pathname];
    console.log(window.location.pathname);
    root.innerHTML = component;
  }
  const changeAvatar = document.getElementById("avatar");
  const popup = document.getElementById("popup");

  changeAvatar?.addEventListener("click", () => {
    if (popup) {
      popup.style.display = "flex";
    }
  });
  popup?.addEventListener("click", (e) => {
    if (e.target == popup) {
      popup.style.display = "none";
    }
  });
  const dialog = document.getElementById("dialog");

  if (dialog) {
    dialog.scrollTop = dialog.scrollHeight;
  }
});
