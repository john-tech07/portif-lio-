import { GraduationCap, BookOpen } from 'lucide-react';
import { education, certifications } from '../../data/education';

function EducationCard({ item, icon: Icon }) {
  return (
    <div className="flex gap-4 p-5 bg-white dark:bg-navy-light rounded-2xl border border-border shadow-sm">
      <div className="w-10 h-10 rounded-xl bg-teal/10 dark:bg-teal/20 flex items-center justify-center shrink-0">
        <Icon size={20} className="text-teal" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-0.5">
          <h3 className="font-semibold text-foreground">{item.degree || item.name}</h3>
          {item.current && (
            <span className="text-xs bg-gold/10 text-gold dark:bg-gold/20 dark:text-gold-light px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
              Em andamento
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-teal mb-1">{item.institution || item.issuer}</p>
        <p className="text-xs text-muted-foreground mb-2">{item.period}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal font-mono text-sm tracking-widest mb-2">Onde aprendi</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Formação</h2>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Graduação
          </h3>
          {education.map(item => (
            <EducationCard key={item.id} item={item} icon={GraduationCap} />
          ))}

          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">
            Certificações & Cursos
          </h3>
          {certifications.map(item => (
            <EducationCard key={item.id} item={item} icon={BookOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationSection;
