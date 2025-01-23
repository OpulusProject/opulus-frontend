import React from 'react';

import {
  Glossary,
  GlossaryBody,
  GlossaryLabel,
  GlossaryRow,
  GlossaryRowColor,
  GlossaryValue,
} from '@/components/Glossary';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/ui/card';
import { useMe } from '@/hooks/user/useMe';

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant="h1">Hello Mr {user?.firstName}</Typography>
    </div>
  );
};
