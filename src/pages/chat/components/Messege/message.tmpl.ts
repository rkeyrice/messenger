import css from './message.module.scss';

export const tmpl = `
 <li class="${css.message} {{#if fromMe}}${css['from-me']} {{/if}}">
       {{message}}
   <div class=${css.time}>
                 {{#if fromMe}}
                 <svg xmlns="http://www.w3.org/2000/svg" width="11" height="5" viewBox="0 0 11 5" fill="none">
                    <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
                    <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5.00006)" stroke="#3369F3"/>
                    {{#if read}}
                         <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5.00006)" stroke="#3369F3"/>
                    {{/if}}
                 </svg>
          {{/if}}
    {{time}}
   </div>
 </li>
`;
