import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Button Component — UEDP Design System

A versatile, accessible button component matching the Figma Design System specification.
Features pill geometry, responsive sizing from Tiny to Giant, and an integrated orange info icon.

### Token Bindings
| Property | Token Variable | Value |
|----------|---------------|-------|
| Primary BG | \`--uedp-base-white\` | \`#FFFFFF\` |
| Primary Text | Dark Charcoal | \`#2D2319\` |
| Info Icon Fill | \`--uedp-orange-500\` | \`#F97316\` |
| Border Radius | \`--uedp-rounded-full\` | \`9999px\` (Pill) |
| Border Color | \`--uedp-slate-200\` | \`#E2E8F0\` |
| Disabled Opacity | \`--uedp-opacity-50\` | \`50%\` |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['tiny', 'medium', 'large', 'giant', 'sm', 'md', 'lg'],
      description: 'Size preset (Tiny, Medium, Large, Giant)',
      table: { defaultValue: { summary: 'md' } },
    },
    showInfoIcon: {
      control: 'boolean',
      description: 'Show circular orange info icon on the right',
      table: { defaultValue: { summary: 'true' } },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to full container width',
    },
    isLoading: {
      control: 'boolean',
      description: 'Show loading spinner',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    children: {
      control: 'text',
      description: 'Button label',
      table: { defaultValue: { summary: 'more info' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'more info',
    size: 'md',
    showInfoIcon: true,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'more info',
    size: 'md',
    showInfoIcon: true,
  },
};

export const Tiny: Story = {
  args: {
    variant: 'primary',
    size: 'tiny',
    children: 'more info',
    showInfoIcon: true,
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'more info',
    showInfoIcon: true,
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'more info',
    showInfoIcon: true,
  },
};

export const Giant: Story = {
  args: {
    variant: 'primary',
    size: 'giant',
    children: 'more info',
    showInfoIcon: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'latest',
    size: 'md',
    showInfoIcon: false,
  },
};

export const Hover: Story = {
  name: 'Hover',
  args: {
    variant: 'hover',
    children: 'latest',
    size: 'md',
    showInfoIcon: false,
  },
};

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    variant: 'disabled',
    children: 'latest',
    size: 'md',
    showInfoIcon: false,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete Item',
    showInfoIcon: false,
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Saving...',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
    showInfoIcon: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">more info</Button>
      <Button variant="secondary">latest</Button>
      <Button variant="hover">latest</Button>
      <Button variant="disabled">latest</Button>
      <Button variant="danger">Delete Item</Button>
    </div>
  ),
};

export const SecondaryMatrix: Story = {
  render: () => {
    const states = [
      { name: 'Default', tag: '❖ Component 1', className: '' },
      { name: 'Hover', tag: '❖ Component 2', className: 'uedp-button--hover-preview' },
      { name: 'Press', tag: '❖ Component 3', className: 'uedp-button--pressed-preview' },
      { name: 'Disable', tag: '❖ Component 4', className: 'uedp-button--disabled-preview', disabled: true },
    ];

    return (
      <div
        style={{
          background: '#97a9ba',
          padding: '40px 32px',
          borderRadius: '16px',
          fontFamily: "'Inter', sans-serif",
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '900px',
        }}
      >
        {/* Column Headers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr 1fr 1fr 1.3fr',
            gap: '16px',
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <div></div>
          <div style={{ fontSize: '20px', fontWeight: 500, color: '#000000' }}>Tiny</div>
          <div style={{ fontSize: '20px', fontWeight: 500, color: '#000000' }}>Medium</div>
          <div style={{ fontSize: '20px', fontWeight: 500, color: '#000000' }}>Large</div>
          <div style={{ fontSize: '20px', fontWeight: 500, color: '#000000' }}>Giant</div>
        </div>

        {/* Rows */}
        <div
          style={{
            border: '2px dashed #7c3aed',
            borderRadius: '16px',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {states.map((state) => (
            <div
              key={state.name}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 1fr 1fr 1.3fr',
                gap: '16px',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontSize: '22px',
                  fontWeight: 500,
                  color: '#000000',
                  textAlign: 'left',
                  paddingLeft: '8px',
                }}
              >
                {state.name}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="secondary" size="tiny" className={state.className} disabled={state.disabled}>
                  latest
                </Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="secondary" size="medium" className={state.className} disabled={state.disabled}>
                  latest
                </Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="secondary" size="large" className={state.className} disabled={state.disabled}>
                  latest
                </Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button variant="secondary" size="giant" className={state.className} disabled={state.disabled}>
                  latest
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        background: '#97a9ba',
        padding: '48px 36px',
        borderRadius: '16px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Figma column headers */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1.2fr',
          gap: '24px',
          marginBottom: '20px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '24px', fontWeight: 500, color: '#000000' }}>Tiny</div>
        <div style={{ fontSize: '24px', fontWeight: 500, color: '#000000' }}>Medium</div>
        <div style={{ fontSize: '24px', fontWeight: 500, color: '#000000' }}>Large</div>
        <div style={{ fontSize: '24px', fontWeight: 500, color: '#000000' }}>Giant</div>
      </div>

      {/* Figma Component 5 Dashed Frame */}
      <div
        style={{
          border: '2px dashed #7c3aed',
          borderRadius: '16px',
          padding: '24px 20px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-12px',
            left: '16px',
            background: '#97a9ba',
            padding: '0 8px',
            fontSize: '11px',
            fontWeight: 600,
            color: '#7c3aed',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          ❖ Component 5
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1.2fr',
            gap: '24px',
            alignItems: 'center',
            justifyItems: 'center',
          }}
        >
          <Button size="tiny">more info</Button>
          <Button size="medium">more info</Button>
          <Button size="large">more info</Button>
          <Button size="giant">more info</Button>
        </div>
      </div>
    </div>
  ),
};
