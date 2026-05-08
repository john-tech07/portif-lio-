import { useEffect } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

function Modal({ open, onClose, title, children, className = '' }) {
  useEffect(() => {
    if (!open) return;

    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'relative bg-white dark:bg-navy-light rounded-2xl shadow-xl border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto',
          className
        )}
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
