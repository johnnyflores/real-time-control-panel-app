import { type ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'danger' | 'success' | 'neutral';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  fullWidth?: boolean;
};

export default function Button({
  variant = 'neutral',
  fullWidth = false,
  className = '',
  ...props
}: Props) {
  const baseStyles =
    'p-2 rounded font-medium transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<Variant, string> = {
    primary: 'bg-blue-600 hover:bg-blue-700',
    danger: 'bg-red-600 hover:bg-red-700',
    success: 'bg-green-600 hover:bg-green-700',
    neutral: 'bg-gray-700 hover:bg-gray-600',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    />
  );
}
