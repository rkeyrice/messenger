export const tmpl = `<div class="wrapper">
<div class='card'>
    <div class="title">
        {{title}}
    </div>
    <form>
            {{#each inputs}}
                {{{this}}}
            {{/each}}
        <div class="buttons_wrapper">
            {{#each buttons}}
                {{{this}}}
            {{/each}}
        </div>
    </form>
<div>`;
