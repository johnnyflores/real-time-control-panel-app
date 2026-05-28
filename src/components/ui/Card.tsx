type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`
        dark:bg-gray-900
        bg-white
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
