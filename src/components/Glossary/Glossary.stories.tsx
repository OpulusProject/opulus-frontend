import type { Meta, StoryObj } from '@storybook/react';

import { Glossary } from './Glossary';
import { GlossaryColumn } from './GlossaryColumn';
import { GlossaryLabel } from './GlossaryLabel';
import { GlossaryRow } from './GlossaryRow';
import { GlossaryRowColor } from './GlossaryRowColor';
import { GlossaryValue } from './GlossaryValue';

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
          <GlossaryLabel text="Housing" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#F4A261'} />
          <GlossaryLabel text="Debt & Fees" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#E35D6A'} />
          <GlossaryLabel text="Food" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#3B82F6'} />
          <GlossaryLabel text="Shopping" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
      </GlossaryColumn>
      <GlossaryColumn>
        <GlossaryRow>
          <GlossaryRowColor color={'#6366F1'} />
          <GlossaryLabel text="Entertainment" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#EC4899'} />
          <GlossaryLabel text="Transport & Travel" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#F59E0B'} />
          <GlossaryLabel text="Health & Wellness" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
        <GlossaryRow>
          <GlossaryRowColor color={'#FACC15'} />
          <GlossaryLabel text="Other" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
      </GlossaryColumn>
    </Glossary>
  ),
};
