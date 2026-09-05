import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Card Component — UEDP Design System

Article/News Card component matching the Figma Design System specification.
Features header metadata (date & time in cyan), article headline, featured spacecraft media, descriptive body copy, and interactive action footer (more info pill button, circular comment & bookmark icon buttons, and user avatar).

### States
- **default**: Elevated card with prominent ambient shadow.
- **pressed**: Active state with compressed elevation and pressed translation.
        `,
      },
    },
    backgrounds: {
      default: 'figma-canvas',
      values: [
        { name: 'figma-canvas', value: '#CAD5DF' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'dark', value: '#0F172A' },
      ],
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pressed'],
      description: 'Card interaction state',
      table: { defaultValue: { summary: 'default' } },
    },
    title: {
      control: 'text',
      description: 'Article headline',
      table: { defaultValue: { summary: 'Rohtak girl scores 99.8% in CBSE class X, aims for IIT' } },
    },
    date: {
      control: 'text',
      description: 'Publication date tag',
      table: { defaultValue: { summary: '10 fri' } },
    },
    time: {
      control: 'text',
      description: 'Publication time tag',
      table: { defaultValue: { summary: '11:59' } },
    },
    description: {
      control: 'text',
      description: 'Article summary text',
    },
    imageSrc: {
      control: 'text',
      description: 'Featured media image URL',
      table: { defaultValue: { summary: '/spacecraft.jpg' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: 'Default',
  args: {
    variant: 'default',
    title: 'Rohtak girl scores 99.8% in CBSE class X, aims for IIT',
    date: '10 fri',
    time: '11:59',
    imageSrc: '/spacecraft.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sagittis tortor, et sagittis eros. Quisque neque ipsum, porttitor euismod semper facilisis, bibendum fermentum est',
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: '14px',
          fontWeight: 500,
          color: '#64748B',
          marginBottom: '16px',
          alignSelf: 'flex-start',
        }}
      >
        Frame 2043683901
      </div>

      <Card {...args} variant="default" />

      <div
        style={{
          marginTop: '32px',
          fontSize: '24px',
          fontWeight: 400,
          color: '#000000',
          letterSpacing: '-0.02em',
        }}
      >
        default
      </div>
    </div>
  ),
};

export const Pressed: Story = {
  name: 'Pressed',
  args: {
    variant: 'pressed',
    title: 'Rohtak girl scores 99.8% in CBSE class X, aims for IIT',
    date: '10 fri',
    time: '11:59',
    imageSrc: '/spacecraft.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sagittis tortor, et sagittis eros. Quisque neque ipsum, porttitor euismod semper facilisis, bibendum fermentum est',
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px 16px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          border: '2px dashed #7C3AED',
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
            background: '#CAD5DF',
            padding: '0 8px',
            fontSize: '12px',
            fontWeight: 600,
            color: '#7C3AED',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          ❖ Group 39414
        </div>

        <Card {...args} variant="pressed" />
      </div>

      <div
        style={{
          marginTop: '32px',
          fontSize: '24px',
          fontWeight: 400,
          color: '#000000',
          letterSpacing: '-0.02em',
        }}
      >
        pressed
      </div>
    </div>
  ),
};
