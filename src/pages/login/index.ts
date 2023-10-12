import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

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

export const Login = Card({ title: "Вход", inputs, buttons, center: true });
