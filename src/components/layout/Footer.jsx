import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

const NAV_LINKS = [
  { label: 'Sobre', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/John-tech07', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/isaque-ramos-25b876320', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:johnsonisaqueramos@gmail.com', icon: Mail },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy dark:bg-navy-dark border-t border-teal/20 text-white mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold text-teal">
              IJ<span className="text-gold">.</span>
            </span>
            <p className="mt-2 text-sm text-white/60 max-w-xs">
              Desenvolvedor Front-end focado em criar interfaces modernas e experiências de usuário de qualidade.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
              Navegação
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
              Contato
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-teal/20 hover:text-teal text-white/70 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © {year} Isaque Johnson Rodrigues Ramos. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/40">
            Feito com React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
