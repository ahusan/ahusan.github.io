import { useSyncExternalStore } from 'react';

// "night" (the default instrument display) or "day" (paper chart). A choice is stored
// on <html data-theme> and in localStorage.
function current() {
  return document.documentElement.dataset.theme || 'night';
}

function subscribe(cb) {
  window.addEventListener('themechange', cb);
  return () => window.removeEventListener('themechange', cb);
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Private mode: the choice just won't persist.
  }
  window.dispatchEvent(new Event('themechange'));
}

export function useTheme() {
  return useSyncExternalStore(subscribe, current);
}
