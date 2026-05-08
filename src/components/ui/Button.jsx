import { cn } from '../../lib/utils';

const variants = {
  primary: 'bg-teal hover:bg-teal-dark text-white',
  outline: 'border border-teal text-teal hover:bg-teal hover:text-white dark:border-teal dark:text-teal',
  ghost: 'text-foreground hover:bg-muted',
  gold: 'bg-gold hover:bg-gold-dark text-navy font-semibold',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
};

function Button({ variant = 'primary', size = 'md', className = '', children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
