type Target = HTMLElement | null;
type Content = HTMLElement | HTMLElement[] | null;

export function render(target: Target, content: Content) {
  if (!target || !content) {
    return;
  }

  if (Array.isArray(content)) {
    target.innerHTML = "";
    target.append(...content);
  }

  if (content instanceof HTMLElement) {
    target.innerHTML = "";
    target.append(content);
  }
}
