import { ChatList } from "./components/ChatList";
import { MessageList } from "./components/MessageList";
import { goTo } from "../../utils";

document.addEventListener("DOMContentLoaded", (): void => {
  const chats = document.querySelector(".chats");
  const dialog = document.querySelector(".dialog");

  if (chats) {
    chats.innerHTML = ChatList();
  }
  if (dialog) {
    dialog.innerHTML = MessageList();
    dialog.scrollTop = dialog.scrollHeight;
  }
  goTo("go_profile", "/src/pages/profile/index.html");
});
