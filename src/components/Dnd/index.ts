import Handlebars from "handlebars";
import { tmpl } from "./dnd.tmpl";

export const Dnd = (props: { DownloadButton?: string; name: string }) => {
  return Handlebars.compile(tmpl)(props);
};
