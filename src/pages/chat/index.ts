import { ChatList } from "./components/ChatList";
import { MessageList } from "./components/MessegeList";
import { tmpl } from "./chat.tmpl";
import Handlebars from "handlebars";

export const Chat = Handlebars.compile(tmpl)({
  ChatList: ChatList(),
  MessegeList: MessageList(),
});
