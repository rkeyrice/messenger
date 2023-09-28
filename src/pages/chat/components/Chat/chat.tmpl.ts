export const tmpl = `
<li class="chats_item">
<div class="img"></div>
    <div class="text_content">
        <div class="name">{{name}}</div>
         <p>{{message}}</p>
    </div>
    <div>
        <div class="time">
            {{time}}
        </div>
        {{#if unreadMessages}}
        <div class="unreadMessages">
             {{unreadMessages}}
        </div>
        {{/if}} 
    </div>
</li>
`;
