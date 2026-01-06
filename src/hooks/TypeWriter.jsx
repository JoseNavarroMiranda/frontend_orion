import { useTypewriter } from "./useTypewriter";

export default function Typewriter({ phrases, className = "", cursorClassName = "...", cursor = "|", options }) {
  const { text } = useTypewriter(phrases, options)
  const safeText = text || "\u00A0" 

  return (
    <span className={`inline-flex min-w-[14ch] ${className}`} aria-live="polite" aria-atomic="true">
      {safeText}
      <span className={cursorClassName}>{cursor}</span>
    </span>
  );
}
