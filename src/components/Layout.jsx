import { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigationType } from 'react-router-dom';
import { personal } from '../data/portfolioData';
import { setTheme, useTheme } from '../theme';

const NAV = [
  ['Work', '/#work'],
  ['Experience', '/#experience'],
  ['Stack', '/#stack'],
  ['Contact', '/#contact'],
];

const scrollToHash = hash => document.getElementById(hash.slice(1))?.scrollIntoView();

// Scroll to #hash after navigation, or to top on a new page. Back/forward (POP) is left
// to the browser so it restores the previous position.
function useScrollRestore() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType === 'POP') return;
    if (hash) scrollToHash(hash);
    else window.scrollTo(0, 0);
  }, [pathname, hash, navType]);
}

export default function Layout() {
  useScrollRestore();
  const { pathname, hash } = useLocation();
  const theme = useTheme();
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link to="/" className="wordmark">
          Ahusan Mohamed
        </Link>
        <nav aria-label="Main">
          {NAV.map(([label, to]) => (
            <Link key={to} to={to} onClick={() => pathname + hash === to && scrollToHash(hash)}>
              {label}
            </Link>
          ))}
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'day' ? 'night' : 'day')}
            aria-label={`Switch to ${theme === 'day' ? 'night' : 'day'} chart`}
          >
            {theme === 'day' ? 'Night' : 'Day'}
          </button>
          <a className="nav-resume" href={personal.resume} target="_blank" rel="noreferrer">
            Résumé
          </a>
        </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Ahusan Mohamed. Built in Malé.</p>
        <p>
          Away from work: <a href="https://ahusan.dev">ahusan.dev</a>
        </p>
      </footer>
    </>
  );
}
