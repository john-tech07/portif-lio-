import { Briefcase } from 'lucide-react';
import { experiences } from '../../data/experience';
import Badge from '../ui/Badge';

function ExperienceEntry({ exp, isLast }) {
  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-teal/10 dark:bg-teal/20 border-2 border-teal flex items-center justify-center shrink-0">
          <Briefcase size={18} className="text-teal" />
        </div>
        {!isLast && (
          <div className="w-0.5 flex-1 bg-border mt-2" />
        )}
      </div>

      <div className="pb-10 flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
          <h3 className="font-semibold text-foreground">{exp.role}</h3>
          <span className="text-xs font-mono text-teal bg-teal/10 dark:bg-teal/20 px-2 py-0.5 rounded-full whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <p className="text-sm font-medium text-muted-foreground mb-3">{exp.company}</p>

        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {exp.description}
        </p>

        <ul className="flex flex-col gap-2 mb-4">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {exp.stack.map(tech => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/40 dark:bg-navy-light/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal font-mono text-sm tracking-widest mb-2">Onde trabalhei</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Experiência</h2>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceEntry
              key={exp.id}
              exp={exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
