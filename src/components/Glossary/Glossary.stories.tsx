import type { Meta, StoryObj } from '@storybook/react';

import { Glossary } from './Glossary';
import { GlossaryColumn } from './GlossaryColumn';
import { GlossaryRow } from './GlossaryRow';
import { GlossaryRowColor } from './GlossaryRowColor';
import { GlossaryRowLabel } from './GlossaryRowLabel';
import { GlossaryRowValue } from './GlossaryRowValue';

const meta: Meta<typeof Glossary> = {
  title: 'Components/Glossary',
  component: Glossary,
};
export default meta;
type Story = StoryObj<typeof Glossary>;

export const SingleColumnGlossary: Story = {
  render: () => (
    <Glossary>
      <GlossaryColumn>
        <GlossaryRow>
          <GlossaryRowColor color={'#14B8A6'} />
          <GlossaryRowLabel>Housing</GlossaryRowLabel>
          <GlossaryRowValue>36.1%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#F4A261'} />
          <GlossaryRowLabel>Debt & Fees</GlossaryRowLabel>
          <GlossaryRowValue>13.3%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#E35D6A'} />
          <GlossaryRowLabel>Food</GlossaryRowLabel>
          <GlossaryRowValue>13.2%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#3B82F6'} />
          <GlossaryRowLabel>Shopping</GlossaryRowLabel>
          <GlossaryRowValue>12.6%</GlossaryRowValue>
        </GlossaryRow>
      </GlossaryColumn>
    </Glossary>
  ),
};

export const MultiColumnGlossary: Story = {
  render: () => (
    <Glossary>
      <GlossaryColumn>
        <GlossaryRow>
          <GlossaryRowColor color={'#14B8A6'} />
          <GlossaryRowLabel>Housing</GlossaryRowLabel>
          <GlossaryRowValue>36.1%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#F4A261'} />
          <GlossaryRowLabel>Debt & Fees</GlossaryRowLabel>
          <GlossaryRowValue>13.3%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#E35D6A'} />
          <GlossaryRowLabel>Food</GlossaryRowLabel>
          <GlossaryRowValue>13.2%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#3B82F6'} />
          <GlossaryRowLabel>Shopping</GlossaryRowLabel>
          <GlossaryRowValue>12.6%</GlossaryRowValue>
        </GlossaryRow>
      </GlossaryColumn>
      <GlossaryColumn>
        <GlossaryRow>
          <GlossaryRowColor color={'#6366F1'} />
          <GlossaryRowLabel>Entertainment</GlossaryRowLabel>
          <GlossaryRowValue>10.9%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#EC4899'} />
          <GlossaryRowLabel>Transport & Travel</GlossaryRowLabel>
          <GlossaryRowValue>5.2%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#F59E0B'} />
          <GlossaryRowLabel>Health & Wellness</GlossaryRowLabel>
          <GlossaryRowValue>5.7%</GlossaryRowValue>
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#FACC15'} />
          <GlossaryRowLabel>Other</GlossaryRowLabel>
          <GlossaryRowValue>2.8%</GlossaryRowValue>
        </GlossaryRow>
      </GlossaryColumn>
    </Glossary>
  ),
};