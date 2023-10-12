export const tmpl = `
<div class="input_wrapper">
    <label  class="label">
    {{label}}
    <input name={{name}} type={{type}} class="input" >
    {{#if error}}
    <div class="error">{{errorMessage}}</div>
    {{/if}} 
    </label>          
</div>
`;
