import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Foundational Tokens',
  parameters: {
    docs: {
      description: {
        component: 'Documentation gallery for geometry, radii, spacing scale, padding, and max-width tokens extracted from `foundational-tokens.json`.',
      },
    },
  },
};

export default meta;

const RADII = [
  { name: 'rounded-none', val: '0px' },
  { name: 'rounded-sm', val: '2px' },
  { name: 'rounded', val: '4px' },
  { name: 'rounded-md', val: '6px' },
  { name: 'rounded-lg', val: '8px' },
  { name: 'rounded-xl', val: '12px' },
  { name: 'rounded-2xl', val: '16px' },
  { name: 'rounded-3xl', val: '24px' },
  { name: 'rounded-full', val: '9999px' },
];

const SPACING = [
  { name: 'gap-0', px: '0px' },
  { name: 'gap-1', px: '4px' },
  { name: 'gap-2', px: '8px' },
  { name: 'gap-3', px: '12px' },
  { name: 'gap-4', px: '16px' },
  { name: 'gap-6', px: '24px' },
  { name: 'gap-8', px: '32px' },
  { name: 'gap-12', px: '48px' },
  { name: 'gap-16', px: '64px' },
];

export const BorderRadii: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px' }}>
      <h2 style={{ marginBottom: '8px' }}>Border Radius Scale</h2>
      <p style={{ color: '#64748B', marginBottom: '24px' }}>Extracted from <code>foundational-tokens.json</code></p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
        {RADII.map((r) => (
          <div key={r.name} style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#FB923C',
                margin: '0 auto 8px',
                borderRadius: `var(--uedp-${r.name})`,
                boxShadow: '0 4px 12px rgba(251, 146, 60, 0.25)',
              }}
            />
            <div style={{ fontWeight: 600, fontSize: '13px' }}>{r.name}</div>
            <div style={{ color: '#64748B', fontSize: '11px' }}>{r.val}</div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const SpacingScale: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px' }}>
      <h2 style={{ marginBottom: '8px' }}>Spacing Scale (Gap / Padding)</h2>
      <p style={{ color: '#64748B', marginBottom: '24px' }}>Visual scale of gap and padding tokens</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {SPACING.map((s) => (
          <div key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '80px', fontWeight: 600, fontSize: '13px' }}>{s.name}</div>
            <div style={{ width: '50px', color: '#64748B', fontSize: '12px' }}>{s.px}</div>
            <div
              style={{
                height: '24px',
                backgroundColor: '#FB923C',
                borderRadius: '4px',
                width: `var(--uedp-${s.name})`,
                minWidth: '4px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};
