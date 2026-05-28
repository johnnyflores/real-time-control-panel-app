type Props = {
  status: "normal" | "warning" | "critical";
  children: React.ReactNode;
};

export default function Badge({ status, children }: Props) {
  const colors = {
    normal: "bg-green-600",
    warning: "bg-yellow-600",
    critical: "bg-red-600",
  };

  return (
    <span
      className={`
        px-2 py-1 rounded text-xs font-semibold text-white
        ${colors[status]}
      `}
    >
      {children}
    </span>
  );
}
