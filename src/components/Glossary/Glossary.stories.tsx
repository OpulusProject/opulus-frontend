import type { Meta, StoryObj } from '@storybook/react';

import { Glossary } from './Glossary';
import { GlossaryBody } from './GlossaryBody';
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
      <GlossaryBody>
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
          <GlossaryLabel text="Entertainment" />
          <GlossaryValue text="X%" />
        </GlossaryRow>
      </GlossaryBody>
    </Glossary>
  ),
};
