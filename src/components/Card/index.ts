import Handlebars from "handlebars";
import { tmpl } from "./card.tmpl";

interface CardProps {
  title: string;
  inputs?: string[];
  buttons: string[];
  center?: boolean;
}

export const Card = (props: CardProps) => {
  return Handlebars.compile(tmpl)(props);
};
