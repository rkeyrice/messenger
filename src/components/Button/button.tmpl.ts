import css from "./button.module.scss";

export const tmpl = `<button type="{{type}}" id="{{id}}"   class="{{#if likeLink}}${css.linkButton} {{else}} ${css.defaultButton} {{/if}} {{#if redLink}} ${css.redLink} {{/if}}">{{text}}</button>`;
