import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

/**
 * Site header and primary navigation.
 *
 * Navigation links are rendered as a list. The current pathname is
 * highlighted using a simple underline style. Add or remove entries in
 * `navItems` to control the menu structure.
 */
export default function Header() {
  const router = useRouter();
  // State to toggle mobile navigation
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/services', label: 'Leistungen' },
    { href: '/about-us', label: 'Über uns' },
    { href: '/digital-business-card', label: 'Digitale Visitenkarte' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Kontakt' },
  ];
  return (
    <header>
      <div className="container header-container">
        {/* Logo */}
        <div className="logo-wrapper">
          <Link href="/">
            {/* Accessible logo text; replace with actual logo image if available */}
            <span className="logo-text">Özer Media</span>
            <span className="sr-only">Zur Startseite</span>
          </Link>
        </div>
        {/* Mobile menu toggle button */}
        <button
          className={`menu-toggle${menuOpen ? ' open' : ''}`}
          aria-label="Navigation umschalten"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span className="line line1" />
          <span className="line line2" />
          <span className="line line3" />
        </button>
        {/* Navigation */}
        <nav aria-label="Hauptnavigation" className={menuOpen ? 'mobile-nav-open' : ''}>
          <ul className="nav-list">
            {navItems.map(({ href, label }) => {
              const isActive = router.pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={isActive ? 'active-link' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}