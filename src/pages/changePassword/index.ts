import { root } from "../../../index";
import { PersonCard } from "../../components/PersonCard";
import { Button } from "../../components/Button";
import { goTo } from "../../utils";

const changePasswordFields = [
  {
    label: "Старый пароль",
    value: "+321321",
    type: "password",
    name: "oldPassword",
  },
  {
    label: "Новый пароль",
    value: "+321321",
    type: "password",
    name: "newPassword",
  },
  {
    label: "Повторите новый пароль",
    value: "+321321",
    type: "password",
    name: "newPassword",
  },
];

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
      fields: changePasswordFields,
    });
  }
  goTo("go_back", "/src/pages/chat/index.html");
});
