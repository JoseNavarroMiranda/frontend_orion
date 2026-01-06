import { useTypewriter } from "./useTypewriter";

export default function Typewriter({
  phrases,
  className = "",
  cursorClassName = "ml-1 inline-block w-[0.6ch] animate-pulse opacity-80",
  cursor = "|",
  options,
}) {
  const { text } = useTypewriter(phrases, options);

  return (
    <span className={className} aria-live="polite" aria-atomic="true">
      {text}
      <span className={cursorClassName}>{cursor}</span>
    </span>
  );
}
