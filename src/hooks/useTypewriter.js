import { useEffect, useMemo, useState } from "react";

export function useTypewriter(phrases, options = {}) {
  const {
    typingSpeed = 55,
    deletingSpeed = 35,
    pauseAfterTyped = 1200,
    pauseAfterDeleted = 250,
    loop = true,
  } = options;

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases?.[phraseIndex] ?? "";
  const text = prefersReducedMotion ? currentPhrase : currentPhrase.slice(0, subIndex);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (!phrases?.length) return;

    if (!loop && phraseIndex === phrases.length - 1 && !isDeleting && subIndex === currentPhrase.length) {
      return;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && subIndex === currentPhrase.length) {
      const t = setTimeout(() => setIsDeleting(true), pauseAfterTyped);
      return () => clearTimeout(t);
    }

    if (isDeleting && subIndex === 0) {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, pauseAfterDeleted);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setSubIndex((v) => v + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(t);
  }, [
    prefersReducedMotion,
    phrases,
    phraseIndex,
    subIndex,
    isDeleting,
    currentPhrase,
    typingSpeed,
    deletingSpeed,
    pauseAfterTyped,
    pauseAfterDeleted,
    loop,
  ]);

  return { text, phraseIndex, isDeleting };
}
