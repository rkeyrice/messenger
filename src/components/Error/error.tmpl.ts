import css from "./error.module.scss";

export const tmpl = `
    <div class=${css.wrapper}>
        <div class=${css.title}>{{number}}</div>
        <div class=${css.text}>{{text}}</div>
        <div id="go_back">{{{Button}}}</div>
    </div>
`;
