import Handlebars from "handlebars";
import { tmpl } from "./messege.tmpl";

interface MessageProps {
  message?: string;
  time?: number;
  read?: boolean;
  fromMe?: boolean;
}

export const Message = (props: MessageProps) => {
  return Handlebars.compile(tmpl)(props);
};
