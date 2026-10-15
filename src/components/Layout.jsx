import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { personal } from '../data/portfolioData';
import { setTheme, useTheme } from '../theme';

const NAV = [
  ['Work', '/#work'],
  ['Experience', '/#experience'],
  ['Stack', '/#stack'],
  ['Contact', '/#contact'],
];

// Scroll to #hash after navigation, or to top on a new page.
function useScrollRestore() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function Layout() {
  useScrollRestore();
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
            <Link key={to} to={to}>
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
          <a className="nav-resume" href={personal.resume} download>
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
