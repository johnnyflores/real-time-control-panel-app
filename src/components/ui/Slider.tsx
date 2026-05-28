import { type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Slider({ label, className = "", ...props }: Props) {
  return (
    <div className="w-full mb-6 mt-6">
      {label && (
        <div className="text-sm mb-1 dark:text-gray-300 text-gray-700 transition-colors duration-300">
          {label}
        </div>
      )}

      <input
        type="range"
        className={`w-full accent-cyan-500 ${className}`}
        {...props}
      />
    </div>
  );
}
