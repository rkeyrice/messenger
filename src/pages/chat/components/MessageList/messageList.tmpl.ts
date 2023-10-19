import css from './messageList.module.scss';

export const tmpl = `
<ul class=${css['dialog-wrapper']}>
    {{{messages}}}
</ul>
`;
