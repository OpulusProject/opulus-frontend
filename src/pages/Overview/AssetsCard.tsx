import {
  BalanceChange,
  BalanceDisplay,
  Card,
  CardContent,
  CardHeaderTabsList,
  CardHeaderTabsTrigger,
  DistributionBar,
  DistributionBarSegment,
} from '@/components/custom';
import { Typography } from '@/components/custom/Typography/Typography';

interface AssetsCardProps {
  currentValue: number;
  previousValue: number;
  timePeriod: 'day' | 'week' | 'month' | 'year';
}

export const AssetsCard: React.FC<AssetsCardProps> = ({
  currentValue,
  previousValue,
  timePeriod,
}) => {
  return (
    //TODO: remove tabs trigger once that logic is removed
    <Card defaultValue="Assets" className="w-[35%] h-full">
      <CardHeaderTabsList defaultValue="Assets">
        <CardHeaderTabsTrigger value="Assets" />
      </CardHeaderTabsList>
      <CardContent className="mt-4" value={'Assets'}>
        <BalanceDisplay value={1486980.65} />
        <BalanceChange
          className="mb-8"
          currentValue={currentValue}
          previousValue={previousValue}
          timePeriod={timePeriod}
        />
        <Typography variant="p3" className="text-popover-foreground">
          Distribution Bar
        </Typography>
        {/* TODO: Change colours to HSL */}
        <DistributionBar total={100} className="mt-3">
          <DistributionBarSegment value={65} color="#65FC9F" />
          <DistributionBarSegment value={25} color="#A2FDC5" />
          <DistributionBarSegment value={10} color="#E0FEEC" />
        </DistributionBar>
      </CardContent>
    </Card>
  );
};
