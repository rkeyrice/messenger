import { root } from "../../../index";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { goTo } from "../../utils";

document.addEventListener("DOMContentLoaded", (): void => {
  const inputs = [
    {
      label: "Логин",
      type: "input",
      name: "login",
      errorMessage: "Неверный логин",
      error: false,
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      errorMessage: "Неверный пароль",
      error: true,
    },
  ].map((e) => Input(e));

  const buttons = [
    {
      text: "Авторизоваться",
      type: "submit",
    },
    {
      text: "Нет аккаунта?",
      type: "button",
      likeLink: true,
      id: "registration",
    },
  ].map((e) => Button(e));

  if (root) {
    root.innerHTML = Card({ title: "Вход", inputs, buttons });
  }
  goTo("registration", "/src/pages/registration/index.html");
});
