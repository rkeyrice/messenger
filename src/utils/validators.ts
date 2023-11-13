import Block from './Block';

const RE_LOGIN = /^(?!^-)(?!.*-$)(?=[a-zA-Z0-9_-]*[a-zA-Z_-])[a-zA-Z0-9_-]{3,20}$/;
const RE_EMAIL = /^([\w-]+\.)*[\w-]+@[\w-]+(\.[\w-]+)*\.[A-Za-z]{2,6}$/;
const RE_PASSWORD = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
const RE_LAST_AND_SECOND_NAME = /^[А-ЯЁA-Z][а-яёa-z-]*$/;
const RE_PHONE = /^\+?\d{10,15}$/;

export const validate = (target: Block, e: FocusEvent): void => {
  const REJEX: Record<string, RegExp> = {
    login: RE_LOGIN,
    password: RE_PASSWORD,
    email: RE_EMAIL,
    first_name: RE_LAST_AND_SECOND_NAME,
    second_name: RE_LAST_AND_SECOND_NAME,
    phone: RE_PHONE,
    oldPassword: RE_PASSWORD,
    newPassword: RE_PASSWORD,
    repeatNewPassword: RE_PASSWORD,
  };
  const name = (e.target as HTMLInputElement).getAttribute('name') ?? '';
  if (REJEX[name] && e.currentTarget instanceof HTMLInputElement && !REJEX[name].test(e.currentTarget.value)) {
    target.setProps({ error: true, value: e.currentTarget.value });
  } else if (e.currentTarget instanceof HTMLInputElement) {
    target.setProps({ error: false, value: e.currentTarget.value });
  }
};
