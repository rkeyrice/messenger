import Handlebars from "handlebars";
import { tmpl } from "./input.tmpl";
import "./input.scss";

interface InputProps {
  type: string;
  label: string;
  name: string;
  error?: boolean;
  errorMessage?: string;
}

export const Input = (props: InputProps) => {
  return Handlebars.compile(tmpl)(props);
};
