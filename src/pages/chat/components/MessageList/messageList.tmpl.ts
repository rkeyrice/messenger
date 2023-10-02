import css from "./messegeList.module.scss";
export const tmpl = `
<ul class=${css.dialog_wrapper}>
  {{#each messages}}
    {{{this}}}
  {{/each}}
</ul>
`;
