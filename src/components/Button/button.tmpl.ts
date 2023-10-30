import css from './button.module.scss';

export const tmpl = `<button type="{{type}}" id="{{id}}"   class="{{#if likeLink}}${css['link-button']} {{else}} ${css['default-button']} {{/if}} {{#if redLink}} ${css['red-link']} {{/if}}">{{text}}</button>`;
