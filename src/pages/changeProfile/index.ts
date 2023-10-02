import { root } from "../../../index";
import { PersonCard } from "../../components/PersonCard";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Dnd } from "../../components/Dnd";
import { goTo } from "../../utils";

const disabledFields = [
  {
    label: "Почта",
    value: "pochta@yandex.ru",
    isDisabled: true,
    name: "email",
  },
  {
    label: "Логин",
    value: "ivanivanov",
    isDisabled: true,
    name: "login",
  },
  {
    label: "Имя",
    value: "Rick",
    isDisabled: true,
    name: "first_name",
  },
  {
    label: "Фамилия",
    value: "Sanchez",
    isDisabled: true,
    name: "last_name",
  },
  {
    label: "Имя в чате",
    value: "Rick",
    isDisabled: true,
    name: "chat_name",
  },
  {
    label: "Телефон",
    value: "+79099673030",
    isDisabled: true,
    name: "phone",
  },
];

const unDisabledFileds = disabledFields.map((e) => ({
  ...e,
  isDisabled: false,
}));

const saveDataButton = [
  {
    text: "Сохранить",
    type: "button",
  },
].map((e) => Button(e));

document.addEventListener("DOMContentLoaded", () => {
  if (root) {
    root.innerHTML = PersonCard({
      buttons: saveDataButton,
      fields: unDisabledFileds,
      changeAvatar: true,
      Popup: Card({
        title: "Загрузите файл",
        buttons: [
          Dnd({ name: "avatar" }),
          Button({ text: "Поменять", type: "button" }),
        ],
      }),
    });
  }
  const changeAvatar = document.getElementById("avatar");
  goTo("go_back", "/src/pages/chat/index.html");
  const popup = document.getElementById("popup");

  changeAvatar.addEventListener("click", () => {
    popup.style.display = "flex";
  });
  popup.addEventListener("click", (e) => {
    if (e.target == popup) {
      popup.style.display = "none";
    }
  });
});
