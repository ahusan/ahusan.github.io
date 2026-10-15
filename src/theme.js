import { useSyncExternalStore } from 'react';

// "day" | "night" chart palette. An explicit choice is stored on <html data-theme>
// (and in localStorage); otherwise the system colour scheme decides.
const media = window.matchMedia('(prefers-color-scheme: dark)');

function current() {
  return document.documentElement.dataset.theme || (media.matches ? 'night' : 'day');
}

function subscribe(cb) {
  media.addEventListener('change', cb);
  window.addEventListener('themechange', cb);
  return () => {
    media.removeEventListener('change', cb);
    window.removeEventListener('themechange', cb);
  };
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
