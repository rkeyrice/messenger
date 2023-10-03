import { PersonCard } from "../../components/PersonCard";
import { Button } from "../../components/Button";
import { profileFields } from "../../static/data";

const buttons = [
  {
    text: "Изменить данные",
    type: "button",
    likeLink: true,
    id: "change_data",
  },
  {
    text: "Изменить пароль",
    type: "button",
    likeLink: true,
    id: "change_password",
  },
  {
    text: "Выйти",
    type: "button",
    likeLink: true,
    redLink: true,
    id: "log_out",
  },
].map((e) => Button(e));

export const Profile = PersonCard({ buttons, fields: profileFields });
