import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'lucide-react';

import { Glossary } from '@/components/Glossary/Glossary';
import { GlossaryColumn } from '@/components/Glossary/GlossaryColumn';
import { GlossaryRow } from '@/components/Glossary/GlossaryRow';
import { GlossaryRowColor } from '@/components/Glossary/GlossaryRowColor';
import { GlossaryRowLabel } from '@/components/Glossary/GlossaryRowLabel';
import { GlossaryRowValue } from '@/components/Glossary/GlossaryRowValue';
import { PieGraph } from '@/components/PieGraph/PieGraph';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui/button';

import { Card } from './Card';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { CardHeaderTabsList } from './CardHeaderTabsList';
import { CardHeaderTabsTrigger } from './CardHeaderTabsTrigger';

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

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card defaultValue="Spending Insights">
      <CardHeader>
        <CardHeaderTabsList defaultValue="Spending Insights">
          <CardHeaderTabsTrigger value="Spending Insights" />
        </CardHeaderTabsList>
        {/* todo: make a custom button component icon not showing up, need to redo LOL */}
        <Button
          variant="expandIcon"
          Icon={Calendar}
          iconPlacement="left"
          iconSize={14}
        >
          <Typography variant="l3">Feb 2025</Typography>
        </Button>
      </CardHeader>
      <CardContent value="Spending Insights">
        <PieGraph segments={segments} title="Transactions" />
        <CardGlossary />
      </CardContent>
    </Card>
  ),
};
