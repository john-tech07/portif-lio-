import { cn } from '../../lib/utils';

function Card({ className = '', children, ...props }) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-navy-light rounded-2xl border border-border shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
