import { cn } from '../../lib/utils';

function Badge({ children, className = '' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal/10 text-teal dark:bg-teal/20 dark:text-teal-light border border-teal/20',
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
