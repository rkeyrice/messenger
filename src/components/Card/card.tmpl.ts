import css from './card.module.scss';

export const tmpl = `
{{#if center}}<main class="${css.center}">{{/if}}
<div class=${css.card}>
    <div class=${css.title}>
        {{title}}
    </div>
    <div>{{{content}}}</div>
    </div>
    {{#if center}} </main>{{/if}}
`;
