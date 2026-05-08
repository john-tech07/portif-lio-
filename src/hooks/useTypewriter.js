import { useEffect, useState } from 'react';

export function useTypewriter(words, { typingSpeed = 100, deletingSpeed = 60, pauseMs = 1800 } = {}) {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const current = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseMs);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex(i => (i + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayText;
}
