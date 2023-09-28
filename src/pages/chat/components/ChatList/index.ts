import Handlebars from "handlebars";
import { tmpl } from "./chatlist.tmpl";
import { Chat } from "../Chat";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi eaque commodi nemo earum rerum assumenda sequi doloremque soluta, dolores vero debitis accusamus repellendus architecto possimus. Assumenda neque quia atque.";

const chats = [
  {
    name: "Rick",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    time: "12:33",
  },
  {
    name: "Kristina",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    time: "12:33",
  },
  {
    name: "Eldar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    unreadMessages: 6,
    time: "12:33",
  },
  {
    name: "Mike",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    time: "12:33",
  },
  {
    name: "Marina",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    time: "12:33",
  },
  {
    name: "Lana",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    unreadMessages: 1,
    time: "12:33",
  },
  {
    name: "Rick",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    time: "12:33",
  },
  {
    name: "Kristina",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    unreadMessages: 3,
    time: "12:33",
  },
  {
    name: "Eldar",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisiciit amet consectetur adipisicinng elit. Eos, modi",
    unreadMessages: 6,
    time: "12:33",
  },
  {
    name: "Mike",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    time: "12:33",
  },
  {
    name: "Marina",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    time: "12:33",
  },
  {
    name: "Lana",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, modi",
    unreadMessages: 1,
    time: "12:33",
  },
].map((e) => Chat(e));

export const ChatList = () => {
  return Handlebars.compile(tmpl)({ chats });
};
