import React from 'react';

interface GlossyInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  className?: string;
}

export function GlossyInput({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  disabled = false,
  className = '',
}: GlossyInputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-4 py-3
          bg-[#1a222e]
          border border-white/10
          rounded-[12px]
          text-[#f1f5f9]
          placeholder:text-[#64748b]
          shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(255,255,255,0.05)]
          hover:border-white/[0.18]
          focus:border-[#3b82f6]
          focus:shadow-[0_0_0_4px_rgba(59,130,246,0.25),0_0_20px_-4px_rgba(59,130,246,0.3)]
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${className}
        `}
      />

      {/* Top edge highlight */}
      <div className="
        absolute top-0 left-4 right-4 h-px
        bg-gradient-to-r from-transparent via-white/10 to-transparent
        pointer-events-none
      " />
    </div>
  );
}

export default GlossyInput;
