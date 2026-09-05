import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Badge Component — UEDP Design System

A versatile, accessible badge and tag component matching the Figma Design System specification.
Used as status indicators, categorization tags, and section headers (such as the **Base Palette** and **typography** headers in Figma).

---

### Token Bindings & Variants
| Variant | Background Token | Text Token | Border Token | Description |
|---------|------------------|------------|--------------|-------------|
| **neutral** | \`#FFFFFF\` | \`#000000\` | \`rgba(0,0,0,0.08)\` | Pure white pill/card tag (Figma header style) |
| **primary** | \`--uedp-cyan-100\` (\`#CFFAFE\`) | \`#008CA3\` | \`--uedp-cyan-300\` (\`#67E8F9\`) | Cyan / Teal matching Figma Frame 5 |
| **secondary** | \`--uedp-orange-100\` (\`#FFEDD5\`) | \`#C2410C\` | \`--uedp-orange-300\` (\`#FED7AA\`) | Orange / Warm Amber matching Figma Frame 6 |
| **success** | \`#F0FDF4\` | \`#16A34A\` | \`#BBF7D0\` | Semantic Green matching Figma Frame 1 "sucess" |
| **error** | \`#FEF2F2\` | \`#DC2626\` | \`#FECACA\` | Semantic Red matching Figma Frame 1 "error" |

---

### Figma Reference Architecture
- **Base Palette (Frame 1)**:
  - **Frame 5 (Primary)**: 11-step cyan scale (\`#F0FDFF\` to \`#000000\`)
  - **Frame 6 (Secondary)**: 11-step orange scale (\`#FFF8F0\` to \`#000000\`)
  - **Frame 7 (Neutral)**: 11-step grayscale (\`#FFFFFF\` to \`#000000\`)
  - **Error & Sucess**: Semantic status tokens (\`#DC2626\` and \`#16A34A\`)
- **Typography (Frame 4)**:
  - **Heading**: Large header hierarchy (bold, regular, extra-bold)
  - **Heading2**: Subheading hierarchy (regular, bold)
  - **paragraph1**: Body primary copy (regular, bold)
  - **paragraph**: Body caption copy (regular, bold)
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'secondary', 'success', 'error', 'indigo', 'emerald', 'amber', 'rose', 'slate', 'sky'],
      description: 'Visual color variant bound to design tokens',
      table: { defaultValue: { summary: 'neutral' } },
    },
    shape: {
      control: 'select',
      options: ['rounded', 'pill'],
      description: 'Geometry shape (rounded 8px or pill 9999px)',
      table: { defaultValue: { summary: 'rounded' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size preset (Small, Medium, Large)',
      table: { defaultValue: { summary: 'md' } },
    },
    dot: {
      control: 'boolean',
      description: 'Show status dot indicator',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Badge text label',
      table: { defaultValue: { summary: 'Base Palette' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'neutral',
    shape: 'rounded',
    size: 'md',
    dot: false,
    children: 'Base Palette',
  },
};

export const BasePaletteBadge: Story = {
  name: 'Base Palette (Header Badge)',
  args: {
    variant: 'neutral',
    shape: 'rounded',
    size: 'md',
    children: 'Base Palette',
  },
};

export const TypographyBadge: Story = {
  name: 'Typography (Header Badge)',
  args: {
    variant: 'neutral',
    shape: 'rounded',
    size: 'md',
    children: 'typography',
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge variant="neutral" shape="rounded">Base Palette</Badge>
      <Badge variant="neutral" shape="rounded">typography</Badge>
      <Badge variant="primary" dot>primary</Badge>
      <Badge variant="secondary" dot>secondary</Badge>
      <Badge variant="success" dot>sucess</Badge>
      <Badge variant="error" dot>error</Badge>
    </div>
  ),
};

// Swatches for the Figma Frame 1 recreation
const PRIMARY_SWATCHES = [
  '#F0FDFF', '#D1FAFF', '#A6F4FF', '#70ECFF', '#2FE0FF',
  '#00C7EB', '#00A2C7', '#008CA3', '#006073', '#0D3B47', '#000000'
];

const SECONDARY_SWATCHES = [
  '#FFF8F0', '#FFEDD5', '#FED7AA', '#FDBA74', '#FB923C',
  '#F97316', '#EA580C', '#C2410C', '#7C2D12', '#3B1408', '#000000'
];

const NEUTRAL_SWATCHES = [
  '#FFFFFF', '#F3F4F6', '#E5E7EB', '#D1D5DB', '#9CA3AF',
  '#6B7280', '#4B5563', '#374151', '#1F2937', '#111827', '#000000'
];

export const FigmaReference: Story = {
  name: 'Figma Reference (Base Palette & Typography)',
  render: () => (
    <div
      style={{
        background: '#94A4B4',
        padding: '36px',
        borderRadius: '16px',
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        display: 'flex',
        gap: '40px',
        alignItems: 'flex-start',
        overflowX: 'auto',
      }}
    >
      {/* Left Column: Base Palette */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '580px' }}>
        <div>
          <Badge variant="neutral" shape="rounded" size="md">
            Base Palette
          </Badge>
        </div>

        {/* Frame 1 */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '24px 28px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 500, color: '#1E293B' }}>Frame 1</div>

          {/* Frame 5 - Primary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#334155' }}>Frame 5</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ width: '70px', fontSize: '13px', fontWeight: 500, color: '#0F172A' }}>primary</span>
              <div style={{ display: 'flex', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                {PRIMARY_SWATCHES.map((color, idx) => (
                  <div
                    key={idx}
                    title={color}
                    style={{
                      width: '40px',
                      height: '42px',
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Frame 6 - Secondary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#334155' }}>Frame 6</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ width: '70px', fontSize: '13px', fontWeight: 500, color: '#0F172A' }}>secondary</span>
              <div style={{ display: 'flex', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                {SECONDARY_SWATCHES.map((color, idx) => (
                  <div
                    key={idx}
                    title={color}
                    style={{
                      width: '40px',
                      height: '42px',
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Frame 7 - Neutral */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#334155' }}>Frame 7</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ width: '70px', fontSize: '13px', fontWeight: 500, color: '#0F172A' }}>neutral</span>
              <div style={{ display: 'flex', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                {NEUTRAL_SWATCHES.map((color, idx) => (
                  <div
                    key={idx}
                    title={color}
                    style={{
                      width: '40px',
                      height: '42px',
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Status colors: Error & Sucess */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '48px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ width: '40px', fontSize: '13px', fontWeight: 500, color: '#0F172A' }}>error</span>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#B91C1C',
                  borderRadius: '4px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ width: '50px', fontSize: '13px', fontWeight: 500, color: '#0F172A' }}>sucess</span>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: '#16A34A',
                  borderRadius: '4px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '420px', flex: 1 }}>
        <div>
          <Badge variant="neutral" shape="rounded" size="md">
            typography
          </Badge>
        </div>

        {/* Frame 4 */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '24px 28px',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            minHeight: '380px',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 500, color: '#1E293B' }}>Frame 4</div>

          {/* Heading */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', alignItems: 'center' }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#000000' }}>Heading</div>
            <div style={{ fontSize: '18px', fontWeight: 400, color: '#000000' }}>Heading</div>
            <div style={{ fontSize: '18px', fontWeight: 900, color: '#000000' }}>Heading</div>
          </div>

          {/* Heading2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', alignItems: 'center' }}>
            <div />
            <div style={{ fontSize: '16px', fontWeight: 400, color: '#000000' }}>Heading2</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#000000' }}>Heading2</div>
          </div>

          {/* paragraph1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', alignItems: 'center' }}>
            <div />
            <div style={{ fontSize: '13px', fontWeight: 400, color: '#000000' }}>paragraph1</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#000000' }}>paragraph1</div>
          </div>

          {/* paragraph */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', alignItems: 'center' }}>
            <div />
            <div style={{ fontSize: '11px', fontWeight: 400, color: '#000000' }}>paragraph</div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#000000' }}>paragraph</div>
          </div>
        </div>
      </div>
    </div>
  ),
};
