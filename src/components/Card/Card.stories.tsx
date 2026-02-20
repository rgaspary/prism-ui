import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outlined', 'elevated'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    onClick: { action: 'clicked', table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card title',
    subtitle: 'Card subtitle',
    children: 'This is the body of the card. Use this area for short descriptions or content.',
    variant: 'primary',
    size: 'md',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with image',
    subtitle: 'Subtitle goes here',
    children: 'Content below the image.',
    imageUrl: 'https://placekitten.com/600/200',
    variant: 'elevated',
    size: 'lg',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    children: 'This card reacts to clicks.',
    variant: 'outlined',
    size: 'md',
    onClick: action('Card clicked'),
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with footer',
    children: 'Main content',
    footer: 'Footer content — actions or meta',
    variant: 'primary',
    size: 'md',
  },
};