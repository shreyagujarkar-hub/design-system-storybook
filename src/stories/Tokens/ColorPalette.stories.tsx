import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Color Palette',
  parameters: {
    docs: {
      description: {
        component: 'Interactive gallery of base color palette families imported directly from `base-palette.json`.',
      },
    },
  },
};

export default meta;

const COLOR_FAMILIES = [
  'slate', 'gray', 'zinc', 'neutral', 'stone',
  'red', 'orange', 'amber', 'yellow', 'lime',
  'green', 'emerald', 'teal', 'cyan', 'sky',
  'blue', 'indigo', 'violet', 'purple', 'fuchsia',
  'pink', 'rose'
];

const SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

export const SwatchGallery: StoryObj = {
  render: () => (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px', maxWidth: '1200px' }}>
      <h2 style={{ marginBottom: '8px', fontSize: '24px' }}>UEDP Base Color Palette</h2>
      <p style={{ color: '#64748B', marginBottom: '32px' }}>
        22 color families parsed from <code>base-palette.json</code> matching Figma variable IDs to CSS custom properties.
      </p>

      {/* Base colors */}
      <div style={{ marginBottom: '32px' }}>
        <h3 style={{ fontSize: '16px', marginBottom: '12px', textTransform: 'capitalize' }}>Base</h3>
        <div style={{ display: 'flex', gap: '12px' }}>
          {['black', 'white'].map((name) => (
            <div
              key={name}
              style={{
                width: '120px',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
                backgroundColor: `var(--uedp-base-${name})`,
                color: name === 'black' ? '#FFF' : '#000',
              }}
            >
              <div style={{ fontWeight: 600 }}>{name}</div>
              <div style={{ fontSize: '12px', opacity: 0.8 }}>--uedp-base-{name}</div>
            </div>
          ))}
        </div>
      </div>

      {COLOR_FAMILIES.map((family) => (
        <div key={family} style={{ marginBottom: '28px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '12px', textTransform: 'capitalize', color: '#1E293B' }}>
            {family}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))', gap: '8px' }}>
            {SHADES.map((shade) => (
              <div
                key={shade}
                style={{
                  borderRadius: '6px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                }}
              >
                <div
                  style={{
                    height: '48px',
                    backgroundColor: `var(--uedp-${family}-${shade})`,
                  }}
                />
                <div style={{ padding: '6px', fontSize: '11px', backgroundColor: '#FFF' }}>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>{shade}</div>
                  <div style={{ color: '#64748B', fontSize: '10px' }}>--uedp-{family}-{shade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};
