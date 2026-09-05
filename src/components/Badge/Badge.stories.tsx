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

Pill badge matching the Figma Design System specification.
Includes the 4 interactive states from the reference:
- **Default**: White pill with orange info icon
- **Hover**: Warm peach background with orange info icon
- **Press**: Vibrant orange background with white circular info icon
- **Disabled**: White background with muted grey text and grey info icon

### Token & State Mapping
| State | Variant | Background | Text Color | Icon Style |
|-------|---------|------------|------------|------------|
| Default | \`default\` | \`#FFFFFF\` | \`#2D1E12\` | Orange circle, white glyph |
| Hover | \`hover\` | \`#FED7AA\` | \`#2D1E12\` | Orange circle, white glyph |
| Press | \`press\` | \`#F97316\` | \`#2D1E12\` | White circle, orange glyph |
| Disabled | \`disabled\` | \`#FFFFFF\` | \`#596373\` | Grey circle, white glyph |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'hover', 'press', 'disabled', 'primary', 'indigo', 'emerald', 'amber', 'rose', 'slate', 'sky'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size preset (Small, Medium, Large)',
      table: { defaultValue: { summary: 'md' } },
    },
    showInfoIcon: {
      control: 'boolean',
      description: 'Show circular info icon on the right',
      table: { defaultValue: { summary: 'true' } },
    },
    dot: {
      control: 'boolean',
      description: 'Show status dot indicator on the left',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Badge text label',
      table: { defaultValue: { summary: 'more info' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    showInfoIcon: true,
    dot: false,
    children: 'more info',
  },
};

export const Hover: Story = {
  args: {
    variant: 'hover',
    size: 'md',
    showInfoIcon: true,
    dot: false,
    children: 'more info',
  },
};

export const Press: Story = {
  args: {
    variant: 'press',
    size: 'md',
    showInfoIcon: true,
    dot: false,
    children: 'more info',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'disabled',
    size: 'md',
    showInfoIcon: true,
    dot: false,
    children: 'more info',
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div
      style={{
        background: '#94A4B4',
        padding: '40px 32px',
        borderRadius: '16px',
        fontFamily: "'Inter', sans-serif",
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '24px',
        minWidth: '260px',
      }}
    >
      {/* 1. Default State */}
      <div style={{ paddingBottom: '20px', borderBottom: '2px dashed #7C3AED', display: 'flex', justifyContent: 'center' }}>
        <Badge variant="default" size="md">
          more info
        </Badge>
      </div>

      {/* 2. Hover State */}
      <div style={{ paddingBottom: '20px', borderBottom: '2px dashed #7C3AED', display: 'flex', justifyContent: 'center' }}>
        <Badge variant="hover" size="md">
          more info
        </Badge>
      </div>

      {/* 3. Press State */}
      <div style={{ paddingBottom: '20px', borderBottom: '2px dashed #7C3AED', display: 'flex', justifyContent: 'center' }}>
        <Badge variant="press" size="md">
          more info
        </Badge>
      </div>

      {/* 4. Disabled State */}
      <div style={{ paddingBottom: '8px', display: 'flex', justifyContent: 'center' }}>
        <Badge variant="disabled" size="md">
          more info
        </Badge>
      </div>
    </div>
  ),
};
