type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Title({ children, className = "" }: Props) {
  return (
    <h2
      className={`text-sm uppercase tracking-wider text-gray-300 mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}
