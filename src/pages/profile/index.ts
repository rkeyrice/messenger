import { root } from "../../../index";
import { PersonCard } from "../../components/PersonCard";
import { Button } from "../../components/Button";
import { profileFields } from "../../static/data";
import { goTo } from "../../utils";

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

document.addEventListener("DOMContentLoaded", () => {
  if (root) {
    root.innerHTML = PersonCard({ buttons, fields: profileFields });
  }
  goTo("change_data", "/src/pages/changeProfile/index.html");
  goTo("change_password", "/src/pages/changePassword/index.html");
  goTo("go_back", "/src/pages/chat/index.html");
});
