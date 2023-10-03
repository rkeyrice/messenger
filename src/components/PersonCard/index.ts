import Handlebars from "handlebars";
import { tmpl } from "./personCard.tmpl";

interface PersonCardProps {
  buttons: string[];
  fields:
    | {
        label: string;
        value: string;
        type: string;
        name: string;
      }[]
    | { isDisabled: boolean; label: string; value: string; name: string }[];
  changeAvatar?: boolean;
  popup?: string;
}

export const PersonCard = (props: PersonCardProps) => {
  const showButtonsBlock = props.buttons.length > 1;
  return Handlebars.compile(tmpl)({ showButtonsBlock, ...props });
};
