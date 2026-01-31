import React from 'react';

export interface GlassTreeItemProps {
  id: string;
  label: string;
  depth?: number;
  isSelected?: boolean;
  isExpanded?: boolean;
  hasChildren?: boolean;
  icon?: React.ReactNode;
  variant?: 'frosted' | 'clear';
  theme?: 'dark' | 'light';
  onClick?: () => void;
  onToggle?: () => void;
  className?: string;
}

export const GlassTreeItem: React.FC<GlassTreeItemProps> = ({
  id,
  label,
  depth = 0,
  isSelected = false,
  isExpanded = false,
  hasChildren = false,
  icon,
  variant = 'frosted',
  theme = 'dark',
  onClick,
  onToggle,
  className = '',
}) => {
  const paddingLeft = depth * 16 + 12;

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const mutedColor = theme === 'dark' ? 'text-white/60' : 'text-gray-500';
  const hoverBg = theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5';

  const selectedStyles = isSelected
    ? variant === 'frosted'
      ? 'bg-[#a78bfa]/20 border-l-2 border-[#a78bfa]'
      : 'bg-[#a78bfa]/30 border-l-2 border-[#a78bfa]'
    : '';

  return (
    <div
      data-tree-item={id}
      className={`
        flex items-center gap-2 py-1.5 pr-3
        cursor-pointer select-none
        transition-colors duration-150
        ${hoverBg}
        ${selectedStyles}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={{ paddingLeft: `${paddingLeft}px` }}
      onClick={onClick}
    >
      {hasChildren ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggle?.();
          }}
          className={`
            shrink-0 w-4 h-4 flex items-center justify-center
            ${mutedColor} hover:${textColor}
            transition-colors duration-150
          `.trim().replace(/\s+/g, ' ')}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      ) : (
        <span className="shrink-0 w-4" />
      )}

      {icon && <span className={`shrink-0 w-4 h-4 ${mutedColor}`}>{icon}</span>}

      <span
        className={`
          flex-1 text-sm truncate
          ${isSelected ? textColor : mutedColor}
        `.trim().replace(/\s+/g, ' ')}
      >
        {label}
      </span>
    </div>
  );
};
