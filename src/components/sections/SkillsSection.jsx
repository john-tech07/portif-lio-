import { skillGroups } from '../../data/skills';
import Card from '../ui/Card';

function SkillBar({ name, level }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-teal rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
          role="progressbar"
          aria-valuenow={level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name}: ${level}%`}
        />
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/40 dark:bg-navy-light/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal font-mono text-sm tracking-widest mb-2">O que sei fazer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Habilidades</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map(group => (
            <Card key={group.id} className="p-6">
              <h3 className="text-sm font-semibold text-teal uppercase tracking-wider mb-5">
                {group.label}
              </h3>
              <div className="flex flex-col gap-4">
                {group.skills.map(skill => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
