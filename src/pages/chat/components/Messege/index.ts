import Handlebars from "handlebars";
import { tmpl } from "./messege.tmpl";

interface MessageProps {
  message: string;
  time: string | undefined;
  read?: boolean | undefined;
  fromMe?: boolean | undefined;
}

export const Message = (props: MessageProps) => {
  return Handlebars.compile(tmpl)(props);
};
