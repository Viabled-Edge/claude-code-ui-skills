/**
 * Glass UI - Frosted Light Demo
 *
 * Frosted variant on a light gradient background.
 * Shows how heavy blur works with light theme colors.
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
  GlassSearchInput,
} from '../assets/components';

export function FrostedLightDemo() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState('light');
  const [volume, setVolume] = useState(50);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
  ];

  const themes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Workspace</h1>
          <GlassSearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            placeholder="Search..."
            variant="frosted"
            theme="light"
          />
        </header>

        {/* Tabs */}
        <GlassTabs
          tabs={tabs}
          value={activeTab}
          onChange={setActiveTab}
          variant="frosted"
          theme="light"
        />

        {/* Main Card */}
        <GlassCard variant="frosted" theme="light" padding="lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Welcome Back
          </h2>
          <p className="text-gray-600 mb-6">
            This demo shows the frosted variant on a light background. Notice how
            the heavy blur creates a soft, ethereal effect over the gradient.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Settings</h3>

              <GlassSelect
                options={themes}
                value={theme}
                onChange={setTheme}
                placeholder="Select theme"
                variant="frosted"
                theme="light"
              />

              <GlassSlider
                value={volume}
                onChange={setVolume}
                label="Brightness"
                showValue
                variant="frosted"
                theme="light"
              />

              <GlassToggle
                checked={true}
                onChange={() => {}}
                label="Auto-save"
                variant="frosted"
                theme="light"
              />
            </div>

            <div>
              <GlassSection title="Quick Actions" variant="frosted" theme="light">
                <div className="flex flex-wrap gap-2">
                  <GlassButton variant="primary" size="sm">
                    New Project
                  </GlassButton>
                  <GlassButton variant="secondary" glassVariant="frosted" theme="light" size="sm">
                    Import
                  </GlassButton>
                  <GlassButton variant="ghost" theme="light" size="sm">
                    Templates
                  </GlassButton>
                </div>
              </GlassSection>
            </div>
          </div>
        </GlassCard>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {['Projects', 'Tasks', 'Messages'].map((title, i) => (
            <GlassCard key={title} variant="frosted" theme="light" padding="md">
              <p className="text-gray-600 text-sm">{title}</p>
              <p className="text-2xl font-bold text-[#8b5cf6]">{[12, 47, 8][i]}</p>
            </GlassCard>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <GlassButton variant="primary" size="lg">
            Get Started
          </GlassButton>
          <GlassButton variant="ghost" theme="light" size="lg">
            Learn More
          </GlassButton>
        </div>
      </div>
    </div>
  );
}

export default FrostedLightDemo;
