import type { SimpleIcon } from "simple-icons";

export default function BrandIcon({
  icon,
  color,
  className = "inline-block w-5 h-5",
}: {
  icon: SimpleIcon;
  color?: string;
  className?: string;
}) {
  // Ensure SVG uses currentColor so color can be controlled via CSS
  const svg = icon.svg.includes("fill=")
    ? icon.svg
    : icon.svg.replace("<svg", '<svg fill="currentColor"');

  return (
    <span
      className={className}
      aria-label={icon.title}
      role="img"
      style={{ color: color ?? `#${icon.hex}` }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
