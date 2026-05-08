import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/John-tech07', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/isaque-ramos-25b876320', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:johnsonisaqueramos@gmail.com', icon: Mail },
];

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function InputField({ label, id, error, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'h-11 px-4 rounded-lg border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal transition-colors',
          error ? 'border-red-400 focus:ring-red-400' : 'border-border'
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Nome é obrigatório';
  if (!form.email.trim()) errors.email = 'Email é obrigatório';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email inválido';
  if (!form.subject.trim()) errors.subject = 'Assunto é obrigatório';
  if (!form.message.trim()) errors.message = 'Mensagem é obrigatória';
  else if (form.message.trim().length < 10) errors.message = 'Mensagem muito curta (mínimo 10 caracteres)';
  return errors;
}

function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSendError('');

    try {
      const res = await fetch('https://formspree.io/f/mnjwbldr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm(INITIAL_FORM);
      } else {
        setSendError('Erro ao enviar. Tente novamente ou me contate por email.');
      }
    } catch {
      setSendError('Sem conexão. Verifique sua internet e tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/40 dark:bg-navy-light/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal font-mono text-sm tracking-widest mb-2">Vamos conversar</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Contato</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground leading-relaxed">
              Estou aberto a novas oportunidades, projetos freelance e colaborações. Se quiser conversar sobre tecnologia ou tem uma ideia em mente, é só me enviar uma mensagem.
            </p>

            <div>
              <p className="text-sm font-semibold text-foreground mb-3">Links diretos</p>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label !== 'Email' ? '_blank' : undefined}
                    rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-teal transition-colors group"
                  >
                    <span className="w-9 h-9 rounded-lg bg-teal/10 dark:bg-teal/20 flex items-center justify-center group-hover:bg-teal/20 transition-colors">
                      <Icon size={18} className="text-teal" />
                    </span>
                    {label === 'Email' ? 'johnsonisaqueramos@gmail.com' : label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-navy-light rounded-2xl border border-border shadow-sm p-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <CheckCircle size={48} className="text-teal" />
                <h3 className="font-semibold text-foreground text-lg">Mensagem enviada!</h3>
                <p className="text-sm text-muted-foreground">
                  Obrigado pelo contato. Responderei o mais breve possível.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <InputField
                  label="Nome"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  autoComplete="name"
                />
                <InputField
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
                <InputField
                  label="Assunto"
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Sobre o que você quer falar?"
                  value={form.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Escreva sua mensagem..."
                    value={form.message}
                    onChange={handleChange}
                    className={cn(
                      'px-4 py-3 rounded-lg border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal transition-colors resize-none',
                      errors.message ? 'border-red-400 focus:ring-red-400' : 'border-border'
                    )}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500">{errors.message}</span>
                  )}
                </div>

                {sendError && (
                  <p className="text-sm text-red-500">{sendError}</p>
                )}

                <Button type="submit" variant="primary" size="md" disabled={loading}>
                  {loading ? (
                    <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Send size={16} />
                  )}
                  {loading ? 'Enviando...' : 'Enviar mensagem'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
