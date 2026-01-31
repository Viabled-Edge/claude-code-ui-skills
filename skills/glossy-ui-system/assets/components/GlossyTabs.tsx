import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface GlossyTabsProps {
  tabs: Tab[];
  value: string;
  onChange: (id: string) => void;
  className?: string;
}

export function GlossyTabs({
  tabs,
  value,
  onChange,
  className = '',
}: GlossyTabsProps) {
  return (
    <div className={`
      inline-flex gap-1 p-1
      bg-[#1a222e]
      rounded-[16px]
      shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(255,255,255,0.05)]
      ${className}
    `}>
      {tabs.map((tab) => {
        const isActive = tab.id === value;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              relative px-5 py-2.5
              rounded-[12px]
              font-medium text-sm
              transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isActive
                ? 'bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] text-white shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5),0_2px_6px_-2px_rgba(0,0,0,0.3)]'
                : 'text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-[#232d3b]'
              }
            `}
          >
            {/* Shine overlay for active tab */}
            {isActive && (
              <span className="
                absolute inset-0 rounded-[12px]
                bg-[linear-gradient(135deg,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.1)_25%,transparent_50%)]
                pointer-events-none
              " />
            )}

            <span className="relative">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default GlossyTabs;
