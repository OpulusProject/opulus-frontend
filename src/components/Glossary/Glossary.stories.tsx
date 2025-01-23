import type { Meta, StoryObj } from '@storybook/react';

import { Glossary } from './Glossary';
import { GlossaryColumn } from './GlossaryColumn';
import { GlossaryRowLabel } from './GlossaryRowLabel';
import { GlossaryRow } from './GlossaryRow';
import { GlossaryRowColor } from './GlossaryRowColor';
import { GlossaryRowValue } from './GlossaryRowValue';

const meta: Meta<typeof Glossary> = {
  title: 'Components/Glossary',
  component: Glossary,
};
export default meta;
type Story = StoryObj<typeof Glossary>;

export const BasicGlossary: Story = {
  render: () => (
    <Glossary>
      <GlossaryColumn>
        <GlossaryRow>
          <GlossaryRowColor color={'#14B8A6'} />
          <GlossaryRowLabel text="Housing" />
          <GlossaryRowValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#F4A261'} />
          <GlossaryRowLabel text="Debt & Fees" />
          <GlossaryRowValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#E35D6A'} />
          <GlossaryRowLabel text="Food" />
          <GlossaryRowValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#3B82F6'} />
          <GlossaryRowLabel text="Shopping" />
          <GlossaryRowValue text="X%" />
        </GlossaryRow>
      </GlossaryColumn>
      <GlossaryColumn>
        <GlossaryRow>
          <GlossaryRowColor color={'#6366F1'} />
          <GlossaryRowLabel text="Entertainment" />
          <GlossaryRowValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#EC4899'} />
          <GlossaryRowLabel text="Transport & Travel" />
          <GlossaryRowValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#F59E0B'} />
          <GlossaryRowLabel text="Health & Wellness" />
          <GlossaryRowValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#FACC15'} />
          <GlossaryRowLabel text="Other" />
          <GlossaryRowValue text="X%" />
        </GlossaryRow>
      </GlossaryColumn>
    </Glossary>
  ),
};
