import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { cn } from '../../lib/utils';

const NAV_LINKS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map(l => l.href.slice(1));

function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/90 dark:bg-navy/90 backdrop-blur-md border-b border-border',
        scrolled && 'shadow-sm'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold text-teal hover:opacity-80 transition-opacity"
          aria-label="Voltar ao topo"
        >
          IJ<span className="text-gold">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                activeId === link.href.slice(1)
                  ? 'text-teal bg-teal/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-muted-foreground hover:text-teal hover:bg-muted transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="md:hidden" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-muted-foreground hover:text-teal hover:bg-muted transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {menuOpen && (
              <div className="absolute top-16 right-0 left-0 bg-white dark:bg-navy border-b border-border shadow-lg px-4 py-3 flex flex-col gap-1">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={cn(
                      'px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                      activeId === link.href.slice(1)
                        ? 'text-teal bg-teal/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
