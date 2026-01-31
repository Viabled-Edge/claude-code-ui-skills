/**
 * Glass UI - Clear Light Demo
 *
 * Clear variant on light theme - the most readable combination.
 * Ideal for text-heavy applications and professional interfaces.
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
} from '../assets/components';

export function ClearLightDemo() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [selectedFolder, setSelectedFolder] = useState('inbox');
  const [compactView, setCompactView] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const tabs = [
    { id: 'inbox', label: 'Inbox' },
    { id: 'sent', label: 'Sent' },
    { id: 'drafts', label: 'Drafts' },
  ];

  const folders = [
    { value: 'inbox', label: 'Inbox (12)' },
    { value: 'starred', label: 'Starred (3)' },
    { value: 'archive', label: 'Archive' },
  ];

  const sortOptions = [
    { value: 'date', label: 'Date' },
    { value: 'sender', label: 'Sender' },
    { value: 'subject', label: 'Subject' },
  ];

  const emails = [
    {
      id: 1,
      sender: 'Design Team',
      subject: 'New mockups ready for review',
      preview: 'Hi, the latest designs are ready. Please review when you have time...',
      time: '10:30 AM',
      unread: true,
    },
    {
      id: 2,
      sender: 'John Smith',
      subject: 'Re: Project timeline',
      preview: 'Thanks for the update. I think we can move forward with the plan...',
      time: '9:15 AM',
      unread: false,
    },
    {
      id: 3,
      sender: 'Marketing',
      subject: 'Q4 Campaign Results',
      preview: 'Here are the results from our Q4 marketing campaign. Overall...',
      time: 'Yesterday',
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Mail</h1>
          <div className="flex items-center gap-4">
            <GlassSearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder="Search mail..."
              variant="clear"
              theme="light"
            />
            <GlassButton variant="primary" size="sm">
              Compose
            </GlassButton>
          </div>
        </header>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <GlassTabs
            tabs={tabs}
            value={activeTab}
            onChange={setActiveTab}
            variant="clear"
            theme="light"
          />
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            Sort by:
            <GlassDropdown
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
              variant="clear"
              theme="light"
            />
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <GlassCard variant="clear" theme="light" padding="md">
            <h2 className="font-medium text-gray-900 mb-3">Folders</h2>

            <GlassSelect
              options={folders}
              value={selectedFolder}
              onChange={setSelectedFolder}
              variant="clear"
              theme="light"
            />

            <div className="mt-6">
              <GlassSection title="Settings" variant="clear" theme="light">
                <GlassToggle
                  checked={compactView}
                  onChange={setCompactView}
                  label="Compact view"
                  variant="clear"
                  theme="light"
                />
              </GlassSection>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">Storage</p>
              <GlassSlider
                value={65}
                onChange={() => {}}
                variant="clear"
                theme="light"
              />
              <p className="text-xs text-gray-400 mt-1">6.5 GB of 10 GB used</p>
            </div>
          </GlassCard>

          {/* Email List */}
          <div className="lg:col-span-3">
            <GlassCard variant="clear" theme="light" padding="none">
              {emails.map((email, index) => (
                <div
                  key={email.id}
                  className={`
                    p-4 cursor-pointer transition-colors
                    hover:bg-black/5
                    ${index !== emails.length - 1 ? 'border-b border-gray-200' : ''}
                    ${email.unread ? 'bg-[#a78bfa]/5' : ''}
                  `}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className={`font-medium ${email.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                      {email.sender}
                    </span>
                    <span className="text-sm text-gray-500">{email.time}</span>
                  </div>
                  <p className={`text-sm ${email.unread ? 'text-gray-800' : 'text-gray-600'}`}>
                    {email.subject}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 truncate">
                    {email.preview}
                  </p>
                </div>
              ))}

              <div className="p-4 border-t border-gray-200">
                <div className="flex justify-center gap-4">
                  <GlassButton variant="ghost" theme="light" size="sm">
                    Load More
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Quick Actions */}
        <GlassCard variant="clear" theme="light" padding="md">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">3 conversations selected</span>
            <div className="flex gap-2">
              <GlassButton variant="secondary" glassVariant="clear" theme="light" size="sm">
                Archive
              </GlassButton>
              <GlassButton variant="secondary" glassVariant="clear" theme="light" size="sm">
                Mark Read
              </GlassButton>
              <GlassButton variant="ghost" theme="light" size="sm">
                Delete
              </GlassButton>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

export default ClearLightDemo;
