type Props = {
  dir?: "left" | "right";
  size?: number;
};

export default function Chevron({ dir = "right", size = 7 }: Props) {
  const height = size * (12 / 7);
  return (
    <svg width={size} height={height} viewBox="0 0 7 12" fill="none" aria-hidden>
      <path
        d={dir === "right" ? "M1 1l5 5-5 5" : "M6 1L1 6l5 5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
