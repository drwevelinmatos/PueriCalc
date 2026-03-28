export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

export function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

export function byId(id) {
  return document.getElementById(id);
}

export function showResult(elId, text) {
  const el = byId(elId);
  if (!el) return;
  el.style.display = 'block';
  el.textContent = text;
}

export function hideResult(elId) {
  const el = byId(elId);
  if (!el) return;
  el.style.display = 'none';
  el.textContent = '';
}
