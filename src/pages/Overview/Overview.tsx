import React from 'react';

import { Chart } from '@/components/Chart';
import { Typography } from '@/components/Typography';
import { useMe } from '@/hooks/user/useMe';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { GlossaryCell, GlossaryRowColor } from '@/components/Glossary';
import { Separator } from '@radix-ui/react-separator';
import { Card } from '@/components/ui/card';

export const Overview: React.FC = () => {
  const { data: user } = useMe();

  return (
    <div>
      <Typography variant="h1">Hello Mr {user?.firstName}</Typography>
      <div className="flex flex-row">
        <Card className="w-[872px] h-[510px] m-4"></Card>
        <Card className="w-[440px] h-[510px] m-4 p-4 pt-16">
          <div className="flex flex-row gap-6">
            <Table>
              <TableBody>
                <TableRow>
                  <GlossaryRowColor color={'#14B8A6'} />
                  <GlossaryCell text="Housing" />
                  <GlossaryCell text="X%" type='value'/>
                </TableRow>
                <TableRow>
                  <GlossaryRowColor color={'#F4A261'} />
                  <GlossaryCell text="Debt & Fees" />
                  <GlossaryCell text="X%" type='value'/>
                </TableRow>
                <TableRow>
                  <GlossaryRowColor color={'#E35D6A'} />
                  <GlossaryCell text="Food" />
                  <GlossaryCell text="X%" type='value'/>
                </TableRow>
                <TableRow>
                  <GlossaryRowColor color={'#3B82F6'} />
                  <GlossaryCell text="Shopping" />
                  <GlossaryCell text="X%" type='value'/>
                </TableRow>
              </TableBody>
            </Table>
            <Table>
              <TableBody>
                <TableRow>
                  <GlossaryRowColor color={'#14B8A6'} />
                  <GlossaryCell text="Housing" />
                  <GlossaryCell text="X%" type='value'/>
                </TableRow>
                <TableRow>
                  <GlossaryRowColor color={'#F4A261'} />
                  <GlossaryCell text="Debt & Fees" />
                  <GlossaryCell text="X%" type='value'/>
                </TableRow>
                <TableRow>
                  <GlossaryRowColor color={'#E35D6A'} />
                  <GlossaryCell text="Food" />
                  <GlossaryCell text="X%" type='value'/>
                </TableRow>
                <TableRow>
                  <GlossaryRowColor color={'#3B82F6'} />
                  <GlossaryCell text="Shopping" />
                  <GlossaryCell text="X%" type='value'/>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
};
