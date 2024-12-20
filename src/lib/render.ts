type Target = HTMLElement | null;
type Content = HTMLElement | HTMLElement[] | number | string | null;

export function render(target: Target, content: Content) {
  if (!target || content === null || content === undefined) {
    return;
  }

  if (Array.isArray(content)) {
    target.innerHTML = "";
    target.append(...content);
  }

  if (content instanceof HTMLElement || typeof content === "string") {
    target.innerHTML = "";
    target.append(content);
  }

  if (typeof content === "number") {
    target.innerHTML = "";
    target.append(String(content));
  }
}
