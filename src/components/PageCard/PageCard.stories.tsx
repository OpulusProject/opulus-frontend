import type { Meta, StoryObj } from '@storybook/react';

import { Glossary } from '@/components/Glossary/Glossary';
import { GlossaryColumn } from '@/components/Glossary/GlossaryColumn';
import { GlossaryRow } from '@/components/Glossary/GlossaryRow';
import { GlossaryRowColor } from '@/components/Glossary/GlossaryRowColor';
import { GlossaryRowLabel } from '@/components/Glossary/GlossaryRowLabel';
import { GlossaryRowValue } from '@/components/Glossary/GlossaryRowValue';
import { PieGraph } from '@/components/PieGraph/PieGraph';

import { PageCard } from './PageCard';
import { PageCardContent } from './PageCardContent';
import { PageCardHeader } from './PageCardHeader';
import { PageCardHeaderTabsList } from './PageCardHeaderTabsList';
import { PageCardHeaderTabsTrigger } from './PageCardHeaderTabsTrigger';

const CardGlossary: React.FC = () => (
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
);

const segments = [
  { label: 'Housing', value: 202, fill: '#14B8A6' }, // 15% of 1350
  { label: 'Debt & Fees', value: 135, fill: '#F4A261' }, // 10% of 1350
  { label: 'Food', value: 338, fill: '#E35D6A' }, // 25% of 1350
  { label: 'Shopping', value: 270, fill: '#3B82F6' }, // 20% of 1350
  { label: 'Entertainment', value: 135, fill: '#6366F1' }, // 10% of 1350
  { label: 'Transport & Travel', value: 135, fill: '#EC4899' }, // 10% of 1350
  { label: 'Health & Wellness', value: 68, fill: '#F59E0B' }, // 5% of 1350
  { label: 'Other', value: 68, fill: '#FACC15' }, // 5% of 1350
];

const meta: Meta<typeof PageCard> = {
  title: 'Components/PageCard',
  component: PageCard,
};

export default meta;
type Story = StoryObj<typeof PageCard>;

export const Default: Story = {
  render: () => (
    <PageCard defaultValue="Spending Insights">
      <PageCardHeader>
        <PageCardHeaderTabsList defaultValue="Spending Insights">
          <PageCardHeaderTabsTrigger value="Spending Insights" />
        </PageCardHeaderTabsList>
      </PageCardHeader>
      <PageCardContent value="Spending Insights">
        <PieGraph segments={segments} title="Transactions" />
        <CardGlossary />
      </PageCardContent>
    </PageCard>
  ),
};
