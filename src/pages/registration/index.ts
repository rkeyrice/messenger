import { root } from "../../../index";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

document.addEventListener("DOMContentLoaded", (): void => {
  const inputs = [
    {
      label: "Почта",
      type: "email",
      name: "email",
      error: false,
    },
    {
      label: "Логин",
      type: "input",
      name: "login",
      error: false,
    },
    {
      label: "Имя",
      type: "input",
      name: "first_name",
      error: false,
    },
    {
      label: "Фамилия",
      type: "input",
      name: "second_name",
      error: false,
    },
    {
      label: "Телефон",
      type: "tel",
      name: "phone",
      error: false,
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      error: true,
    },
    {
      label: "Пароль (еще раз)",
      type: "password",
      name: "password",
      errorMessage: "Пароли не совпадают",
      error: false,
    },
  ].map((e) => Input(e));

  const buttons = [
    {
      text: "Зарегистрироваться",
      type: "submit",
    },
    {
      text: "Войти",
      type: "button",
      likeLink: true,
    },
  ].map((e) => Button(e));

  if (root) {
    root.innerHTML = Card({ title: "Регистрация", inputs, buttons });
  }
});
