document.addEventListener("DOMContentLoaded", () => {
  const isLogin = false;
  const loginPath = "/src/pages/login/index.html";
  const needRedirect = window.location.pathname === "/";

  if (!isLogin && needRedirect) {
    window.location.href = `${window.location.origin}${loginPath}`;
  }
});

export const root = document.getElementById("app");
