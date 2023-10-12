import { PersonCard } from "../../components/PersonCard";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Dnd } from "../../components/Dnd";

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
    name: "second_name",
  },
  {
    label: "Имя в чате",
    value: "Rick",
    isDisabled: true,
    name: "display_name",
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

export const ChangeProfile = PersonCard({
  buttons: saveDataButton,
  fields: unDisabledFileds,
  changeAvatar: true,
  popup: Card({
    title: "Загрузите файл",
    buttons: [
      Dnd({ name: "avatar" }),
      Button({ text: "Поменять", type: "button" }),
    ],
  }),
});
