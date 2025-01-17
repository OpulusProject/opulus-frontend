import { Meta, StoryFn } from '@storybook/react';
import { DistributionBar, DistributionBarProps } from './DistributionBar';

// Default export to set up metadata about the story
export default {
  title: 'Components/DistributionBar', // Title in Storybook sidebar
  component: DistributionBar,
  argTypes: {
    gap: {
      control: 'number',
      description: 'The gap between the segments in pixels',
      defaultValue: 4,
    },
    values: {
      control: 'array',
      description: 'An array of values for each segment of the bar',
    },
    colors: {
      control: 'array',
      description: 'An array of colors for each segment',
    },
  },
} as Meta;

// Template for creating stories based on props
const Template: StoryFn<DistributionBarProps> = (args) => (
  <DistributionBar {...args} />
);

// Default story using default args
export const Default = Template.bind({});
Default.args = {
  values: [35, 30, 20, 15],
  colors: ['#FF5733', '#33FF57', '#3357FF', '#F0F0F0'],
  gap: 4,
};

