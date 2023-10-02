import Handlebars from "handlebars";
import { tmpl } from "./button.tmpl";

interface ButtonProps {
  type: string;
  text: string;
  likeLink?: boolean;
  redLink?: boolean;
  id?: string;
}

export const Button = (props: ButtonProps) => {
  return Handlebars.compile(tmpl)({ ...props });
};
