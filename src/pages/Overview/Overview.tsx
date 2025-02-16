import { Separator } from '@radix-ui/react-separator';
import React from 'react';

import { LineChart } from '@/components/charts/LineChart/LineChart';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Color,
  DistributionBar,
  DistributionBarSegment,
  DollarValueChange,
  Glossary,
  GlossaryColumn,
  GlossaryRow,
  GlossaryRowLabel,
  GlossaryRowValue,
  Page,
  PageContent,
  PageDate,
  PageHeader,
  PageHeaderTitle,
} from '@/components/custom';
import { DollarValue } from '@/components/custom/DollarValue/DollarValue';
import { Typography } from '@/components/custom/Typography';
import { useGetUser } from '@/hooks/user/useGetUser';

const DATA = [
  { date: new Date(2023, 0, 1), value: 500 },
  { date: new Date(2023, 1, 1), value: 400 },
  { date: new Date(2023, 2, 1), value: 300 },
  { date: new Date(2023, 3, 1), value: 600 },
  { date: new Date(2023, 4, 1), value: 700 },
  { date: new Date(2023, 5, 1), value: 800 },
  { date: new Date(2023, 6, 1), value: 950 },
  { date: new Date(2023, 7, 1), value: 850 },
  { date: new Date(2023, 8, 1), value: 1000 },
  { date: new Date(2023, 9, 1), value: 950 },
  { date: new Date(2023, 10, 1), value: 900 },
  { date: new Date(2023, 11, 1), value: 700 },
  { date: new Date(2024, 0, 1), value: 500 },
  { date: new Date(2024, 1, 1), value: 600 },
  { date: new Date(2024, 2, 1), value: 700 },
  { date: new Date(2024, 3, 1), value: 800 },
  { date: new Date(2024, 4, 1), value: 900 },
  { date: new Date(2024, 5, 1), value: 1000 },
  { date: new Date(2024, 6, 1), value: 1100 },
  { date: new Date(2024, 7, 1), value: 1400 },
  { date: new Date(2024, 8, 1), value: 1300 },
  { date: new Date(2024, 9, 1), value: 1200 },
];

export const Overview: React.FC = () => {
  const { data: user } = useGetUser();

  return (
    <Page>
      <PageDate />
      <PageHeader>
        <PageHeaderTitle>Hello Mr {user?.firstName}</PageHeaderTitle>
      </PageHeader>
      <PageContent>
        <div className="flex flex-row gap-8">
          <Card className="w-[65%] h-full p-0 relative">
            <CardHeader className="ml-8 mt-8">Cash Flow</CardHeader>
            <CardContent className="mt-4">
              <div className="ml-8">
                <DollarValue value={'1486980.56'}></DollarValue>
                <DollarValueChange
                  value={'1486980.56'}
                  delta={'2000'}
                ></DollarValueChange>
              </div>
              <div>
                <LineChart data={DATA} dataKey="value" label="Net Worth" />
              </div>
            </CardContent>
            <CardFooter className="absolute bottom-8 right-8 flex justify-end items-center gap-3">
              <Color color={'#65FC9F'}></Color>
              <Typography variant={'p3'} className="text-[#FFFFFF4C]">
                last updated 12:01 AM
              </Typography>
            </CardFooter>
          </Card>
          <Card className="w-[35%] h-full">
            <CardHeader>Assets</CardHeader>
            <CardContent className="mt-4">
              <DollarValue value={'1486980.56'} />
              <DollarValueChange value={'1486980.56'} delta={'2000'} />
              <div className="mt-8">
                <Typography variant={'p3'} className="text-popover-foreground">
                  Distribution Bar
                </Typography>
                <DistributionBar total={100} className="mt-3">
                  <DistributionBarSegment value={65} color="#65FC9F" />
                  <DistributionBarSegment value={25} color="#A2FDC5" />
                  <DistributionBarSegment value={10} color="#E0FEEC" />
                </DistributionBar>
              </div>
              <div className="flex flex-row justify-between mt-8">
                <Typography variant={'p3'} className="text-popover-foreground">
                  Asset Classes
                </Typography>
                <Typography variant={'p3'} className="text-popover-foreground">
                  Weight
                </Typography>
              </div>
              <Glossary className="mt-3">
                <GlossaryColumn className="flex gap-3">
                  <div>
                    <GlossaryRow>
                      <Color color={'#65FC9F'} />
                      <GlossaryRowLabel>Real Estate</GlossaryRowLabel>
                      <GlossaryRowValue>
                        <DollarValue
                          value={'966537.42'}
                          variant="p3"
                        ></DollarValue>
                      </GlossaryRowValue>
                    </GlossaryRow>

                    <GlossaryRow className="mt-1 text-popover-foreground">
                      <Color color={'#00000000'} />
                      <GlossaryRowLabel variant="p3">1 asset</GlossaryRowLabel>
                      <GlossaryRowValue>65%</GlossaryRowValue>
                    </GlossaryRow>
                  </div>
                  <Separator className="border-t border-[#FFFFFF1A]" />
                  <div>
                    <GlossaryRow>
                      <Color color={'#A2FDC5'} />
                      <GlossaryRowLabel>Investments</GlossaryRowLabel>
                      <GlossaryRowValue>
                        <DollarValue
                          value={'371745.16'}
                          variant="p3"
                        ></DollarValue>
                      </GlossaryRowValue>
                    </GlossaryRow>
                    <GlossaryRow className="mt-1 text-popover-foreground">
                      <Color color={'#00000000'} />
                      <GlossaryRowLabel variant="p3">
                        30 assets
                      </GlossaryRowLabel>
                      <GlossaryRowValue>25%</GlossaryRowValue>
                    </GlossaryRow>
                  </div>
                  <Separator className="border-t border-[#FFFFFF1A]" />
                  <div>
                    <GlossaryRow>
                      <Color color={'#E0FEEC'} />
                      <GlossaryRowLabel>Cash</GlossaryRowLabel>
                      <GlossaryRowValue>
                        <DollarValue
                          value={'148698.07'}
                          variant="p3"
                        ></DollarValue>
                      </GlossaryRowValue>
                    </GlossaryRow>
                    <GlossaryRow className="mt-1 text-popover-foreground">
                      <Color color={'#00000000'} />
                      <GlossaryRowLabel variant="p3">4 assets</GlossaryRowLabel>
                      <GlossaryRowValue>10%</GlossaryRowValue>
                    </GlossaryRow>
                  </div>
                </GlossaryColumn>
              </Glossary>
            </CardContent>
          </Card>
        </div>
      </PageContent>
    </Page>
  );
};
