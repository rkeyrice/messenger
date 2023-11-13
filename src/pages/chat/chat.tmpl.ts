import css from './chat.module.scss';

export const tmpl = `
<main class=${css['chat-wrapper']} >
<div  class=${css['list-wrapper']}>
  <div  class=${css['chat-list-header']}>
    <button id="go_profile">
      <span>Профиль</span>
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 9L5 5L1 1" stroke="#999999" />
      </svg>
    </button>
    <input type="text" placeholder="Поиск" name="search" />
  </div>
  <div  class=${css.chats}>
        {{{chatList}}}
        <span class=${css['add-chat-button']}>{{{AddChatButton}}}</span>
  </div>
</div>
<div  class=${css['dialog-wrapper']}>
{{#if activeChat}}
  <div class=${css['dialog-header']}>
        <div class=${css['dialog-header-item']}>
          <span class=${css['dialog-avatar']}>
          {{#if avatar}}
          <img width="34" height="34" src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}">
        </svg>
          {{/if}} </span>
          <span class=${css['dialog-name']}>{{chatName}}</span>
        </div>
        <div>
        {{{optionsButton}}}
        </div>
  </div>
  <div id="dialog" class=${css.dialog}>
    {{{messageList}}}
  </div>
    {{{messageInput}}}
  </div>
</div>
{{else}}
 <div class=${css['no-active-chat']}>
 <div>Выберите чат</div>
 </div>
{{/if}}
</div>
<div id="create_popup" class=${css['popup-wrapper']}>
{{{popup}}}
</div>
<div></main>
`;
