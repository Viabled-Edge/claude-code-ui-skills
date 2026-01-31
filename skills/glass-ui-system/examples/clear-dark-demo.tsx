/**
 * Glass UI - Clear Dark Demo
 *
 * Clear variant on dark theme - subtle transparency with higher opacity.
 * Best for text-heavy interfaces where readability is priority.
 */

import React, { useState } from 'react';
import {
  GlassCard,
  GlassButton,
  GlassTabs,
  GlassSelect,
  GlassToggle,
  GlassSlider,
  GlassSection,
  GlassDropdown,
  GlassSearchInput,
  GlassTreeItem,
} from '../assets/components';

export function ClearDarkDemo() {
  const [activeTab, setActiveTab] = useState('editor');
  const [fontSize, setFontSize] = useState(14);
  const [autoSave, setAutoSave] = useState(true);
  const [lineNumbers, setLineNumbers] = useState(true);
  const [fileType, setFileType] = useState('tsx');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'editor', label: 'Editor' },
    { id: 'preview', label: 'Preview' },
    { id: 'console', label: 'Console' },
  ];

  const fileTypes = [
    { value: 'tsx', label: 'TypeScript' },
    { value: 'jsx', label: 'JavaScript' },
    { value: 'py', label: 'Python' },
    { value: 'go', label: 'Go' },
  ];

  const themes = [
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
    { value: 'monokai', label: 'Monokai' },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f1a] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white">Code Editor</h1>
            <GlassDropdown
              options={fileTypes}
              value={fileType}
              onChange={setFileType}
              variant="clear"
              theme="dark"
            />
          </div>
          <GlassSearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            placeholder="Find in file..."
            variant="clear"
            theme="dark"
          />
        </header>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* File Explorer */}
          <GlassCard variant="clear" theme="dark" padding="md">
            <h2 className="font-medium text-white mb-3">Explorer</h2>
            <div className="-mx-4">
              <GlassTreeItem
                id="src"
                label="src"
                hasChildren
                isExpanded
                variant="clear"
                theme="dark"
              />
              <GlassTreeItem
                id="app"
                label="App.tsx"
                depth={1}
                isSelected
                variant="clear"
                theme="dark"
              />
              <GlassTreeItem
                id="index"
                label="index.ts"
                depth={1}
                variant="clear"
                theme="dark"
              />
              <GlassTreeItem
                id="components"
                label="components"
                depth={1}
                hasChildren
                variant="clear"
                theme="dark"
              />
            </div>
          </GlassCard>

          {/* Editor Area */}
          <div className="lg:col-span-2 space-y-4">
            <GlassTabs
              tabs={tabs}
              value={activeTab}
              onChange={setActiveTab}
              variant="clear"
              theme="dark"
            />

            <GlassCard variant="clear" theme="dark" padding="lg" className="min-h-[400px]">
              <pre className="text-white/80 font-mono text-sm leading-relaxed">
{`import React from 'react';

export function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <p>Welcome to Glass UI</p>
    </div>
  );
}

export default App;`}
              </pre>
            </GlassCard>
          </div>

          {/* Settings Panel */}
          <GlassCard variant="clear" theme="dark" padding="md">
            <h2 className="font-medium text-white mb-4">Settings</h2>

            <GlassSection title="Editor" variant="clear" theme="dark">
              <div className="space-y-4">
                <GlassSlider
                  value={fontSize}
                  onChange={setFontSize}
                  min={10}
                  max={24}
                  label="Font Size"
                  showValue
                  variant="clear"
                  theme="dark"
                />

                <GlassSelect
                  options={themes}
                  value="dark"
                  onChange={() => {}}
                  variant="clear"
                  theme="dark"
                />
              </div>
            </GlassSection>

            <GlassSection title="Features" variant="clear" theme="dark">
              <div className="space-y-3">
                <GlassToggle
                  checked={autoSave}
                  onChange={setAutoSave}
                  label="Auto-save"
                  variant="clear"
                  theme="dark"
                />
                <GlassToggle
                  checked={lineNumbers}
                  onChange={setLineNumbers}
                  label="Line numbers"
                  variant="clear"
                  theme="dark"
                />
              </div>
            </GlassSection>

            <div className="mt-6 flex gap-2">
              <GlassButton variant="primary" size="sm">
                Run
              </GlassButton>
              <GlassButton variant="secondary" glassVariant="clear" theme="dark" size="sm">
                Build
              </GlassButton>
            </div>
          </GlassCard>
        </div>

        {/* Status Bar */}
        <GlassCard variant="clear" theme="dark" padding="sm">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/60">TypeScript React</span>
            <span className="text-white/60">Ln 1, Col 1</span>
            <span className="text-[#a78bfa]">Ready</span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default ClearDarkDemo;
