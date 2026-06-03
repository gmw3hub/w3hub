type Props = {
  className?: string;
};

export default function DoodleBackdrop({
  className = "absolute inset-0",
}: Props) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundColor: "#AEEFBD",
        backgroundImage: "url(/images/features/bg-doodle.webp)",
        backgroundRepeat: "repeat",
        backgroundSize: "500px",
      }}
    />
  );
}
