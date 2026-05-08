import { useEffect, useState } from 'react';
import { ExternalLink, FolderOpen, X, ZoomIn } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { projects, projectCategories } from '../../data/projects';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { cn } from '../../lib/utils';

function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <button
        onClick={onClose}
        aria-label="Fechar imagem"
        className="absolute top-4 right-4 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X size={22} />
      </button>

      <img
        src={src}
        alt={alt}
        className="relative z-10 max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
      />
    </div>
  );
}

function ProjectCover({ project, onImageClick }) {
  if (project.coverImage) {
    return (
      <div className="relative h-56 rounded-t-2xl overflow-hidden bg-navy/90 dark:bg-navy-dark flex items-center justify-center p-3 group/cover">
        <img
          src={project.coverImage}
          alt={`Screenshot do projeto ${project.name}`}
          loading="lazy"
          className="w-full h-full object-contain rounded-lg"
        />
        <button
          onClick={e => { e.stopPropagation(); onImageClick(); }}
          aria-label={`Ampliar imagem do projeto ${project.name}`}
          className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/cover:bg-black/40 transition-colors rounded-t-2xl"
        >
          <span className="opacity-0 group-hover/cover:opacity-100 transition-opacity flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20">
            <ZoomIn size={16} />
            Ver imagem
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="h-56 bg-gradient-to-br from-navy to-teal/60 dark:from-navy-dark dark:to-teal/40 rounded-t-2xl flex items-center justify-center">
      <FolderOpen size={48} className="text-white/30" />
    </div>
  );
}

function ProjectCard({ project, onOpen, onImageZoom }) {
  return (
    <Card className="overflow-hidden flex flex-col group hover:shadow-md hover:border-teal/30 transition-all duration-200">
      <ProjectCover project={project} onImageClick={() => onImageZoom(project)} />

      <div className="p-5 flex flex-col gap-3 flex-1">
        <button onClick={() => onOpen(project)} className="text-left">
          <h3 className="font-semibold text-foreground group-hover:text-teal transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {project.description}
          </p>
        </button>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map(tech => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex gap-2 pt-1 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Código do ${project.name} no GitHub`}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-teal transition-colors min-h-[36px] px-2 rounded-lg hover:bg-muted"
          >
            <GithubIcon size={14} />
            Código
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Demo ao vivo do ${project.name}`}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-teal transition-colors min-h-[36px] px-2 rounded-lg hover:bg-muted"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}

          <button
            onClick={() => onOpen(project)}
            className="ml-auto flex items-center gap-1.5 text-xs text-muted-foreground hover:text-teal transition-colors min-h-[36px] px-2 rounded-lg hover:bg-muted"
          >
            Ver detalhes
          </button>
        </div>
      </div>
    </Card>
  );
}

function ProjectModal({ project, onClose, onImageZoom }) {
  if (!project) return null;

  return (
    <Modal open={!!project} onClose={onClose} title={project.name}>
      <div className="flex flex-col gap-5">
        {project.coverImage && (
          <div className="relative group/img rounded-xl overflow-hidden bg-navy/90 dark:bg-navy-dark flex items-center justify-center p-3">
            <img
              src={project.coverImage}
              alt={`Screenshot do projeto ${project.name}`}
              className="w-full max-h-56 object-contain rounded-lg"
            />
            <button
              onClick={() => onImageZoom(project)}
              aria-label="Ampliar imagem"
              className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover/img:bg-black/40 transition-colors rounded-xl"
            >
              <span className="opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                <ZoomIn size={16} />
                Ver imagem
              </span>
            </button>
          </div>
        )}

        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Destaques</h4>
          <ul className="flex flex-col gap-2">
            {project.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-2">Stack</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map(tech => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2 border-t border-border">
          <Button variant="primary" size="md" onClick={() => window.open(project.github, '_blank')}>
            <GithubIcon size={16} />
            Ver código
          </Button>

          {project.demo ? (
            <Button variant="outline" size="md" onClick={() => window.open(project.demo, '_blank')}>
              <ExternalLink size={16} />
              Demo ao vivo
            </Button>
          ) : (
            <Button variant="ghost" size="md" disabled className="opacity-40 cursor-not-allowed">
              <ExternalLink size={16} />
              Sem demo
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}

function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [zoomedProject, setZoomedProject] = useState(null);

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal font-mono text-sm tracking-widest mb-2">O que construí</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Projetos</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[40px]',
                activeCategory === cat
                  ? 'bg-teal text-white'
                  : 'bg-muted text-muted-foreground hover:bg-teal/10 hover:text-teal'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
              onImageZoom={setZoomedProject}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onImageZoom={setZoomedProject}
      />

      {zoomedProject?.coverImage && (
        <ImageLightbox
          src={zoomedProject.coverImage}
          alt={`Screenshot do projeto ${zoomedProject.name}`}
          onClose={() => setZoomedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectsSection;
