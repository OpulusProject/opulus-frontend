import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'lucide-react';

import { PieGraph } from '@/components/charts/PieGraph/PieGraph';
import { Color } from '@/components/custom/Color/Color';
import { Glossary } from '@/components/custom/Glossary/Glossary';
import { GlossaryColumn } from '@/components/custom/Glossary/GlossaryColumn';
import { GlossaryRow } from '@/components/custom/Glossary/GlossaryRow';
import { GlossaryRowLabel } from '@/components/custom/Glossary/GlossaryRowLabel';
import { GlossaryRowValue } from '@/components/custom/Glossary/GlossaryRowValue';
import { Typography } from '@/components/custom/Typography';
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
        <Color color={'#14B8A6'} />
        <GlossaryRowLabel>Housing</GlossaryRowLabel>
        <GlossaryRowValue>36.1%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#F4A261'} />
        <GlossaryRowLabel>Debt & Fees</GlossaryRowLabel>
        <GlossaryRowValue>13.3%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#E35D6A'} />
        <GlossaryRowLabel>Food</GlossaryRowLabel>
        <GlossaryRowValue>13.2%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#3B82F6'} />
        <GlossaryRowLabel>Shopping</GlossaryRowLabel>
        <GlossaryRowValue>12.6%</GlossaryRowValue>
      </GlossaryRow>
    </GlossaryColumn>
    <GlossaryColumn>
      <GlossaryRow>
        <Color color={'#6366F1'} />
        <GlossaryRowLabel>Entertainment</GlossaryRowLabel>
        <GlossaryRowValue>10.9%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#EC4899'} />
        <GlossaryRowLabel>Transport & Travel</GlossaryRowLabel>
        <GlossaryRowValue>5.2%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#F59E0B'} />
        <GlossaryRowLabel>Health & Wellness</GlossaryRowLabel>
        <GlossaryRowValue>5.7%</GlossaryRowValue>
      </GlossaryRow>
      <GlossaryRow>
        <Color color={'#FACC15'} />
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
      <CardContent
        value="Spending Insights"
        className="gap-8 items-center justify-start"
      >
        <PieGraph segments={segments} title="Transactions" />
        <CardGlossary />
      </CardContent>
    </Card>
  ),
};
