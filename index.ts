document.addEventListener("DOMContentLoaded", () => {
  const isLogin = false;
  const loginPath = "src/pages/login/index.html";
  const authorizationPath = "src/pages/authorization/index.html";
  const needRedirect =
    window.location.pathname !== loginPath ||
    // @ts-ignore
    window.location.pathname !== authorizationPath;
  if (!isLogin && !needRedirect) {
    window.location.href = `${window.location}${loginPath}`;
  }
});

export const root = document.getElementById("app");
