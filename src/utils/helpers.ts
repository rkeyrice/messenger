import Block from './Block';

export const goTo = (to: string): void => {
  window.location.href = `${window.location.origin}${to}`;
};

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
  console.log(data);
};

export const goBackFromProfile = (to:string):void => {
  const goProfile = document.getElementById('go_back');
  goProfile?.addEventListener('click', ():void => { goTo(to); });
};
