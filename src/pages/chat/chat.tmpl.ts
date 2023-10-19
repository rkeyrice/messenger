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
  </div>
</div>
<div  class=${css['dialog-wrapper']}>
  <div class=${css['dialog-header']}>
        <div>
          <span class=${css['dialog-avatar']}></span>
          <span class=${css['dialog-name']}>Rick</span>
        </div>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="16" viewBox="0 0 3 16" fill="none">
        <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
        <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
        <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
      </svg>
    </button>
  </div>
  <div id="dialog" class=${css.dialog}>
    {{{messageList}}}
  </div>
    {{{messageInput}}}
  </div>
</div>
</div>
<div></main>
`;
