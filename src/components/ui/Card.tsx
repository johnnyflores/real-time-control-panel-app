type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`
        bg-gray-900
        p-4
        rounded
        shadow-sm
        border border-gray-800
        ${className}
      `}
    >
      {children}
    </div>
  );
}
