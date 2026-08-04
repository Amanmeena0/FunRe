interface MaterialIconProps {
  icon: string;
  filled?: boolean;
  className?: string;
  size?: number;
  weight?: number;
}

export default function MaterialIcon({
  icon,
  filled = false,
  className = "",
  size = 24,
  weight = 400,
}: MaterialIconProps) {
  const fillValue = filled ? 1 : 0;

  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{
        fontVariationSettings: `'FILL' ${fillValue}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      }}
    >
      {icon}
    </span>
  );
}