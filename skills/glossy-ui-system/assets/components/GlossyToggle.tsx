import React from 'react';

interface GlossyToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function GlossyToggle({
  checked,
  onChange,
  disabled = false,
  className = '',
}: GlossyToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`
        relative inline-flex h-6 w-11
        rounded-full
        transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
        focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:ring-offset-2 focus:ring-offset-[#080b12]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${checked
          ? 'bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] shadow-[0_0_20px_-4px_rgba(59,130,246,0.4)]'
          : 'bg-[#1a222e] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]'
        }
        ${className}
      `}
    >
      {/* Shine overlay when active */}
      {checked && (
        <span className="
          absolute inset-0 rounded-full
          bg-[linear-gradient(135deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.1)_25%,transparent_50%)]
          pointer-events-none
        " />
      )}

      {/* Toggle knob */}
      <span className={`
        relative inline-block h-5 w-5
        rounded-full
        bg-white
        shadow-[0_2px_8px_rgba(0,0,0,0.3)]
        transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${checked ? 'translate-x-[22px]' : 'translate-x-0.5'}
        top-0.5
      `}>
        {/* Knob shine */}
        <span className="
          absolute inset-0 rounded-full
          bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,transparent_50%)]
        " />
      </span>
    </button>
  );
}

export default GlossyToggle;
