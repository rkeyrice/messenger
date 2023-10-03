import css from "./personCard.module.scss";

export const tmpl = `
    <div class=${css.wrapper}>
            <button class=${css.goback} id="go_back">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
                    <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
                    <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
                </svg>
            </button>
        <div class=${css.content_wrapper}>
            <div class=${css.avatar_wrapper}>
                <div id="avatar" class="${css.avatar_img}  {{#if changeAvatar}}${css.change_avatar}{{/if}}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z" fill="#CDCDCD"/>
                    </svg>
                </div>
            </div>
            <div class=${css.fields_wrapper}>
                <form>
                    {{#each fields}}
                        <div class=${css.field}>
                      <label for={{this.name}} id={{this.name}} class=${css.label}>{{this.label}}</label>
                       
                        <input class=${css.input} name={{this.name}} {{#if this.type}}type={{this.type}}{{else}}input{{/if}}  {{#if this.isDisabled}}disabled="disabled"{{/if}} value={{this.value}}>
                        </div>
                    {{/each}}
                </form>
            </div>
               <div>
                 {{#if showButtonsBlock}}
                   {{#each buttons}}
                        <div class=${css.buttons}>
                            {{{this}}}
                        </div>
                    {{/each}}
                    {{else}}
                    {{#each buttons}}
                    <div class=${css.button}>
                        {{{this}}}
                    </div>
                    {{/each}}
                {{/if}} 
            </div>
        </div>
        {{#if changeAvatar}}
            <div id="popup" class=${css.popup_wrapper}>
                    {{{popup}}}
            </div>
        {{/if}}
    </div>
`;
