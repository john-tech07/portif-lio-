import { Mail, ArrowDown, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { useTypewriter } from '../../hooks/useTypewriter';
import Button from '../ui/Button';

const TYPEWRITER_WORDS = [
  'Desenvolvedor Front-end',
  'Especialista em React',
  'UI/UX Enthusiast',
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/John-tech07', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/isaque-ramos-25b876320', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:johnsonisaqueramos@gmail.com', icon: Mail },
];

function HeroSection() {
  const typed = useTypewriter(TYPEWRITER_WORDS);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-navy dark:bg-navy text-white px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold font-mono text-sm tracking-widest mb-4 animate-fade-in">
          Olá, eu sou
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
          Isaque Johnson
        </h1>

        <div className="h-10 flex items-center justify-center mb-6 animate-fade-in">
          <span className="text-xl sm:text-2xl text-teal font-medium">
            {typed}
            <span className="animate-pulse ml-0.5">|</span>
          </span>
        </div>

        <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-8 animate-fade-in leading-relaxed">
          Desenvolvedor Frontend com 1 ano de experiência prática, construindo interfaces modernas e responsivas com React, Tailwind CSS e Shadcn/UI.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 animate-fade-in w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver projetos
            <ArrowDown size={18} />
          </Button>

          <a
            href="/cv.pdf"
            download="Curriculo-Isaque-Johnson.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors min-h-[44px] px-7 py-3 text-base border border-white/40 text-white hover:bg-white/10 w-full sm:w-auto"
          >
            <FileDown size={18} />
            Baixar CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-3 animate-fade-in">
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

      <a
        href="#about"
        aria-label="Rolar para a seção sobre"
        className="absolute bottom-8 animate-bounce text-white/30 hover:text-teal transition-colors"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}

export default HeroSection;
