import Handlebars from "handlebars";
import { tmpl } from "./chat.tmpl";

interface ChatListProps {
  name: string;
  message: string;
  unreadMessages?: number;
}

export const Chat = (props: ChatListProps) => {
  return Handlebars.compile(tmpl)(props);
};
