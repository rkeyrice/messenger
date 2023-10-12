import css from "./chatList.module.scss";

export const tmpl = `
<ul class=${css.chats_list}>
  {{#each chats}}
    {{{this}}}
  {{/each}}
</ul>
`;
