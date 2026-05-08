import { MapPin, Mail } from 'lucide-react';
import { highlights } from '../../data/skills';

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal font-mono text-sm tracking-widest mb-2">Conheça-me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Sobre mim</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden border-4 border-teal/30 shadow-xl">
                <img
                  src="/avatar.jpg"
                  alt="Foto de perfil de Isaque Johnson"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-teal/10 dark:bg-teal/20 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-gold/10 dark:bg-gold/20 rounded-xl -z-10" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-teal shrink-0" />
                São Gonçalo, RJ
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-teal shrink-0" />
                johnsonisaqueramos@gmail.com
              </span>
            </div>

            <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
              <p>
                Sou desenvolvedor Frontend apaixonado por criar interfaces que unem estética e funcionalidade. Com 1 ano de experiência prática no ecossistema web, trabalhei no desenvolvimento de ferramentas internas reais utilizadas por equipes na <span className="text-foreground font-medium">Leste Telecom</span>, incluindo um sistema de agendamento de reuniões e um board estilo Kanban.
              </p>
              <p>
                Meu foco é em React e seu ecossistema moderno — Tailwind CSS, Shadcn/UI e Vite — priorizando código limpo, componentização e uma experiência de usuário fluida. Estou cursando <span className="text-foreground font-medium">Análise e Desenvolvimento de Sistemas na UNinter</span>, aprofundando minha base teórica em engenharia de software.
              </p>
              <p>
                Acredito que bons produtos nascem da atenção aos detalhes. Cada componente que construo é pensado para ser reutilizável, acessível e fácil de manter.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-2">
              {highlights.map(item => (
                <div
                  key={item.label}
                  className="bg-muted dark:bg-navy-light rounded-xl p-4 text-center border border-border"
                >
                  <span className="block text-2xl font-bold text-teal">{item.value}</span>
                  <span className="text-xs text-muted-foreground mt-1 block leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
