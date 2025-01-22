import React from 'react';

import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';
import { GlossaryLabel, GlossaryValue, GlossaryRowColor, GlossaryRow, GlossaryBody, Glossary } from '@/components/Glossary';
import { Card } from '@/components/ui/card';

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant="h1">Hello Mr {user?.firstName}</Typography>
      <div className="flex flex-row">
        <Card className="w-[872px] h-[510px] m-4"></Card>
        <Card className="w-[560px] h-[510px] m-4 p-4 pt-16">
          <div className="flex flex-row gap-[40px] p-[32px]">
            <Glossary>
              <GlossaryBody>
                <GlossaryRow>
                  <GlossaryRowColor color={'#14B8A6'} />
                  <GlossaryLabel text="Housing" />
                  <GlossaryValue text="X%"/>
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
              </GlossaryBody>
            </Glossary>
            <Glossary>
              <GlossaryBody>
              <GlossaryRow>
                  <GlossaryRowColor color={'#6366F1'} />
                  <GlossaryLabel text="Entertainment" />
                  <GlossaryValue text="X%" />
                </GlossaryRow>
                <GlossaryRow>
                  <GlossaryRowColor color={'#F4A261'} />
                  <GlossaryLabel text="Transport & Travel" />
                  <GlossaryValue text="X%" />
                  </GlossaryRow>
                <GlossaryRow>
                  <GlossaryRowColor color={'#EF59E0B'} />
                  <GlossaryLabel text="Health & Wellness" />
                  <GlossaryValue text="X%" />
                  </GlossaryRow>
                <GlossaryRow>
                  <GlossaryRowColor color={'#FACC15'} />
                  <GlossaryLabel text="Other" />
                  <GlossaryValue text="X%" />
                  </GlossaryRow>
              </GlossaryBody>
            </Glossary>
          </div>
        </Card>
      </div>
    </div>
  );
};
