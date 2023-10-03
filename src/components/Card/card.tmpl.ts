import css from "./card.module.scss";

export const tmpl = `
<div class="{{#if center}} ${css.center} {{/if}}">
<div class=${css.card}>
    <div class=${css.title}>
        {{title}}
    </div>
    <form>
            {{#each inputs}}
                {{{this}}}
            {{/each}}
        <div class=${css.buttons_wrapper}>
            {{#each buttons}}
                {{{this}}}
            {{/each}}
        </div>
    </form>
    </div>
`;
