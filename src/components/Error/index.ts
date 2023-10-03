import Handlebars from "handlebars";
import { tmpl } from "./error.tmpl";
import { Button } from "../../components/Button";

interface ErrorProps {
  number: number;
  text: string;
}

export const Error = (props: ErrorProps) => {
  return Handlebars.compile(tmpl)({
    Button: Button({ likeLink: true, text: "назад к чатам", type: "button" }),
    ...props,
  });
};
