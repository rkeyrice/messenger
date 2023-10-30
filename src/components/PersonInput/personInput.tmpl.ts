import css from './personInput.module.scss';

export const tmpl = `
<div class="${css.field}">
<label for="{{name}}" id="{{name}}" class="${css.label}">{{label}}</label>
<input class="${css.input}" name="{{name}}" type="{{#if type}}{{type}}{{else}}text{{/if}}"  {{#if this.isDisabled}}disabled="disabled"{{/if}} value={{this.value}}>
<div class="${css.error}">{{#if error}} {{{errorMessage}}} {{/if}}</div>
</div>
`;
