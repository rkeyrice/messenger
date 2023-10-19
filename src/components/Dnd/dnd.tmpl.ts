import css from './dnd.module.scss';

export const tmpl = `
  <label class=${css.dnd}>
    {{#if DownloadButton}}
    {{{DownloadButton}}}
    {{else}}
    <div>
        Выбрать файл на компьютере
    </div>
    {{/if}}
    <input name="{{name}}" type="file">
</label>
`;
