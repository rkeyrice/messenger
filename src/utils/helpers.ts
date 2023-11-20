import Block from './Block';
import router from './Router';
import { ISignInData } from '../api/AuthAPI';
import { IUser, PasswordTypes } from './types';

export const formSubmit = (e: Event, fields: Block[] | Block): void => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const data: Record<string, FormDataEntryValue | null> = {};

  if (Array.isArray(fields)) {
    fields.forEach((field) => {
      const { name } = field.props;
      data[name] = formData.get(name);
      if (field.props.error || !data[name]) {
        field.setProps({ error: true });
      }
    });
  } else {
    const { name } = fields.props;
    data[name] = formData.get(name);
    if (!data[name]) {
      fields.setProps({ error: true });
    }
  }
};

export const formSubmitValues = (e: Event, fields: Block[] | Block): Record<string, FormDataEntryValue | null>
  | PasswordTypes | ISignInData | IUser | boolean => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const data: Record<string, FormDataEntryValue | null> = {};
  let error;

  if (Array.isArray(fields)) {
    fields.forEach((field) => {
      const { name } = field.props;
      data[name] = formData.get(name);
      if (field.props.error || !data[name]) {
        field.setProps({ error: true });
        error = true;
      } else {
        error = false;
      }
    });
  } else {
    const { name } = fields.props;
    data[name] = formData.get(name);
    if (!data[name] || fields.props.error) {
      fields.setProps({ error: true });
      error = true;
    } else {
      error = false;
    }
  }

  return error ? false : data;
};

export const goBackFromProfile = (to: string): void => {
  const goProfile = document.getElementById('go_back');
  goProfile?.addEventListener('click', (): void => { router.go(to); });
};

export type Indexed<T = any> = {
  [key in string]: T;
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  const result = cloneDeep(lhs);
  if (typeof rhs !== 'object' || rhs === null || !lhs) {
    return lhs;
  }
  Object.keys(rhs).forEach((key) => {
    if (typeof rhs[key] === 'object' && result?.hasOwnProperty(key) && typeof result[key] === 'object') {
      result[key] = merge(result[key], rhs[key]);
    } else {
      result[key] = rhs[key];
    }
  });
  return Object.assign(lhs, result);
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
    [key]: acc,
  }), value as any);

  return merge(object as Indexed, result);
}

type Props = Record<string, unknown>

export const isEqual = (a: Props, b: Props): boolean => {
  if (typeof a !== 'object' || typeof b !== 'object') {
    return a === b;
  }

  const keys1 = Object.keys(a ?? {});
  const keys2 = Object.keys(b ?? {});

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !isEqual(a[key] as Props, b[key] as Props)) {
      return false;
    }
  }

  return true;
};

export const cloneDeep = (obj: Record<string, any>): Record<string, any> => {
  const uniqueRefs = new WeakMap();

  function innerClone(value: any): any {
    if (value === null || typeof value !== 'object') {
      return value;
    }

    if (uniqueRefs.has(value)) {
      return uniqueRefs.get(value);
    }

    if (Array.isArray(value)) {
      const newArray: any[] = [];
      uniqueRefs.set(value, newArray);
      value.forEach((item) => {
        newArray.push(innerClone(item));
      });
      return newArray;
    }

    const newObj: any = {};
    uniqueRefs.set(value, newObj);
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        newObj[key] = innerClone(value[key]);
      }
    }
    return newObj;
  }

  return innerClone(obj);
};
