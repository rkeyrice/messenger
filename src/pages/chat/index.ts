import { ChatList } from "./components/ChatList";
console.log("lol");

document.addEventListener("DOMContentLoaded", (): void => {
  const chats = document.querySelector(".chats");

  if (chats) {
    chats.innerHTML = ChatList();
  }
});
