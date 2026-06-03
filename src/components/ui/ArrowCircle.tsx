type Props = {
  size?: number;
  className?: string;
  invert?: boolean;
};

export default function ArrowCircle({ size = 28, className = "", invert }: Props) {
  const color = invert ? "bg-black text-white" : "bg-white text-black";
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full transition-colors group-hover:bg-mint group-hover:text-black ${color} ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.5}
        height={size * 0.5}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
