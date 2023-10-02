export const goTo = (from: string, to: string): void => {
  const fromElement = document.getElementById(from);
  fromElement?.addEventListener("click", () => {
    window.location.href = `${window.location.origin}${to}`;
  });
};
