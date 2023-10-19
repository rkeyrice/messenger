import css from './chatList.module.scss';

export const tmpl = `
<ul class=${css['chats-list']}>
    {{{chats}}}
</ul>
`;
