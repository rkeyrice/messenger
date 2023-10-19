import css from './input.module.scss';

export const tmpl = `
<div class="${css['input-wrapper']}">
    <label  class="${css.label}">
    {{label}}
    <input name="{{name}}" value="{{value}}" type="{{type}}" class="${css.input}">
    {{#if error}}
    <div  class="${css.error}">{{errorMessage}}</div>
    {{/if}} 
    </label>          
</div>
`;
