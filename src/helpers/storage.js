export function saveState(key, state) {
  localStorage.setItem(key, JSON.stringify(state))
}

export function loadState(key) {
  const state = localStorage.getItem(key)
  if (!state) return null;

  return JSON.parse(state);
}
