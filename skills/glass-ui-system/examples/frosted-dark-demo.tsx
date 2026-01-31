/**
 * Glass UI - Frosted Dark Demo
 *
 * A complete dashboard example using the frosted variant on a dark gradient background.
 * This showcases all 10 components in a realistic interface.
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

export function FrostedDarkDemo() {
  // State for interactive components
  const [activeTab, setActiveTab] = useState('overview');
  const [country, setCountry] = useState('us');
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [volume, setVolume] = useState(75);
  const [sortBy, setSortBy] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState('doc1');
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['root']);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'settings', label: 'Settings' },
  ];

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
  ];

  const sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'name', label: 'Name' },
    { value: 'size', label: 'Size' },
  ];

  const toggleFolder = (id: string) => {
    setExpandedFolders((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1033] via-[#0f1a2e] to-[#0f0f1a] p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Glass Dashboard</h1>
          <GlassSearchInput
            value={searchQuery}
            onChange={setSearchQuery}
            onClear={() => setSearchQuery('')}
            placeholder="Search..."
            variant="frosted"
            theme="dark"
          />
        </header>

        {/* Navigation Tabs */}
        <GlassTabs
          tabs={tabs}
          value={activeTab}
          onChange={setActiveTab}
          variant="frosted"
          theme="dark"
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Card */}
            <GlassCard variant="frosted" theme="dark" padding="lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Statistics</h2>
                <GlassDropdown
                  options={sortOptions}
                  value={sortBy}
                  onChange={setSortBy}
                  variant="frosted"
                  theme="dark"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#a78bfa]">2,847</p>
                  <p className="text-white/60 text-sm">Total Users</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#a78bfa]">$12.4k</p>
                  <p className="text-white/60 text-sm">Revenue</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#a78bfa]">94%</p>
                  <p className="text-white/60 text-sm">Satisfaction</p>
                </div>
              </div>
            </GlassCard>

            {/* Form Card */}
            <GlassCard variant="frosted" theme="dark" padding="lg">
              <h2 className="text-lg font-semibold text-white mb-4">Preferences</h2>
              <div className="space-y-4">
                <GlassSelect
                  options={countries}
                  value={country}
                  onChange={setCountry}
                  placeholder="Select country"
                  variant="frosted"
                  theme="dark"
                />

                <GlassSlider
                  value={volume}
                  onChange={setVolume}
                  min={0}
                  max={100}
                  label="Volume"
                  showValue
                  variant="frosted"
                  theme="dark"
                />

                <div className="flex gap-4">
                  <GlassButton variant="primary">Save Changes</GlassButton>
                  <GlassButton variant="secondary" glassVariant="frosted" theme="dark">
                    Cancel
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Settings Card */}
            <GlassCard variant="frosted" theme="dark" padding="lg">
              <h2 className="text-lg font-semibold text-white mb-4">Settings</h2>

              <GlassSection title="Appearance" variant="frosted" theme="dark">
                <div className="space-y-3">
                  <GlassToggle
                    checked={darkMode}
                    onChange={setDarkMode}
                    label="Dark mode"
                    variant="frosted"
                    theme="dark"
                  />
                  <GlassToggle
                    checked={notifications}
                    onChange={setNotifications}
                    label="Notifications"
                    variant="frosted"
                    theme="dark"
                  />
                </div>
              </GlassSection>

              <GlassSection title="Advanced" defaultOpen={false} variant="frosted" theme="dark">
                <p className="text-white/60 text-sm">Advanced settings go here</p>
              </GlassSection>
            </GlassCard>

            {/* File Tree Card */}
            <GlassCard variant="frosted" theme="dark" padding="md">
              <h2 className="text-lg font-semibold text-white mb-4">Files</h2>
              <div className="-mx-4">
                <GlassTreeItem
                  id="root"
                  label="Documents"
                  hasChildren
                  isExpanded={expandedFolders.includes('root')}
                  onToggle={() => toggleFolder('root')}
                  variant="frosted"
                  theme="dark"
                />
                {expandedFolders.includes('root') && (
                  <>
                    <GlassTreeItem
                      id="doc1"
                      label="Report.pdf"
                      depth={1}
                      isSelected={selectedFile === 'doc1'}
                      onClick={() => setSelectedFile('doc1')}
                      variant="frosted"
                      theme="dark"
                    />
                    <GlassTreeItem
                      id="folder1"
                      label="Projects"
                      depth={1}
                      hasChildren
                      isExpanded={expandedFolders.includes('folder1')}
                      onToggle={() => toggleFolder('folder1')}
                      variant="frosted"
                      theme="dark"
                    />
                    {expandedFolders.includes('folder1') && (
                      <GlassTreeItem
                        id="doc2"
                        label="Design.fig"
                        depth={2}
                        isSelected={selectedFile === 'doc2'}
                        onClick={() => setSelectedFile('doc2')}
                        variant="frosted"
                        theme="dark"
                      />
                    )}
                    <GlassTreeItem
                      id="doc3"
                      label="Notes.md"
                      depth={1}
                      isSelected={selectedFile === 'doc3'}
                      onClick={() => setSelectedFile('doc3')}
                      variant="frosted"
                      theme="dark"
                    />
                  </>
                )}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end gap-3">
          <GlassButton variant="ghost" theme="dark">
            Learn More
          </GlassButton>
          <GlassButton variant="primary">Get Started</GlassButton>
        </div>
      </div>
    </div>
  );
}

export default FrostedDarkDemo;
