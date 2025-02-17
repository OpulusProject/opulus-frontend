import { Separator } from '@radix-ui/react-separator';

import {
  Card,
  CardContent,
  CardHeader,
  Color,
  DistributionBar,
  DistributionBarSegment,
  Glossary,
  GlossaryColumn,
  GlossaryRow,
  GlossaryRowLabel,
  GlossaryRowValue,
} from '@/components/custom';
import { AmountChange } from '@/components/custom/AmountChange/AmountChange';
import { AmountDisplay } from '@/components/custom/AmountDisplay/AmountDisplay';
import { Typography } from '@/components/custom/Typography';

interface AssetsCardProps {
  dollarValue: number;
  previousValue: number;
  previousDate: Date;
}

export const AssetsCard: React.FC<AssetsCardProps> = ({
  dollarValue,
  previousValue,
  previousDate,
}) => {
  return (
    <Card className="w-[35%] h-full">
      <CardHeader>Assets</CardHeader>
      <CardContent>
        <AmountDisplay value={dollarValue} />
        <AmountChange
          currentValue={dollarValue}
          previousValue={previousValue}
          previousDate={previousDate}
        />
        <div className="mt-8">
          <Typography variant="p3" className="text-popover-foreground">
            Distribution Bar
          </Typography>
          <DistributionBar total={100} className="mt-3">
            <DistributionBarSegment value={65} color="#65FC9F" />
            <DistributionBarSegment value={25} color="#A2FDC5" />
            <DistributionBarSegment value={10} color="#E0FEEC" />
          </DistributionBar>
        </div>
        <div className="flex flex-row justify-between mt-8">
          <Typography variant="p3" className="text-popover-foreground">
            Asset Classes
          </Typography>
          <Typography variant="p3" className="text-popover-foreground">
            Weight
          </Typography>
        </div>
        <Glossary className="mt-3">
          <GlossaryColumn className="flex gap-3">
            <div>
              <GlossaryRow>
                <Color color="#65FC9F" />
                <GlossaryRowLabel>Real Estate</GlossaryRowLabel>
                <GlossaryRowValue>
                  <AmountDisplay variant="p3" value={966537.42} />
                </GlossaryRowValue>
              </GlossaryRow>
              <GlossaryRow className="mt-1 text-popover-foreground">
                <Color color="#00000000" />
                <GlossaryRowLabel>1 asset</GlossaryRowLabel>
                <GlossaryRowValue>65%</GlossaryRowValue>
              </GlossaryRow>
            </div>
            <Separator className="border-t" />
            <div>
              <GlossaryRow>
                <Color color="#A2FDC5" />
                <GlossaryRowLabel>Investments</GlossaryRowLabel>
                <GlossaryRowValue>
                  <AmountDisplay variant="p3" value={371745.16} />
                </GlossaryRowValue>
              </GlossaryRow>
              <GlossaryRow className="mt-1 text-popover-foreground">
                <Color color="#00000000" />
                <GlossaryRowLabel>30 assets</GlossaryRowLabel>
                <GlossaryRowValue>25%</GlossaryRowValue>
              </GlossaryRow>
            </div>
            <Separator className="border-t" />
            <div>
              <GlossaryRow>
                <Color color="#E0FEEC" />
                <GlossaryRowLabel>Cash</GlossaryRowLabel>
                <GlossaryRowValue>
                  <AmountDisplay variant="p3" value={148698.07} />
                </GlossaryRowValue>
              </GlossaryRow>
              <GlossaryRow className="mt-1 text-popover-foreground">
                <Color color="#00000000" />
                <GlossaryRowLabel>4 assets</GlossaryRowLabel>
                <GlossaryRowValue>10%</GlossaryRowValue>
              </GlossaryRow>
            </div>
          </GlossaryColumn>
        </Glossary>
      </CardContent>
    </Card>
  );
};
