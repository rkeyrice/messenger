import Handlebars from "handlebars";
import { tmpl } from "./button.tmpl";
import "./button.scss";

interface ButtonProps {
  type: string;
  text: string;
  likeLink?: boolean;
}

export const Button = (props: ButtonProps) => {
  const className = props?.likeLink ? "linkButton" : "defaultButton";
  return Handlebars.compile(tmpl)({ className, ...props });
};
