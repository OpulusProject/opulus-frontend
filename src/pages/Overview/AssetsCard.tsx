import {
  BalanceChange,
  BalanceDisplay,
  Card,
  CardContent,
  CardHeader,
  DistributionBar,
  DistributionBarSegment,
} from '@/components/custom';
import { Typography } from '@/components/custom/Typography';

interface AssetsCardProps {
  currentValue: number;
  previousValue: number;
  timePeriod: string;
}

export const AssetsCard: React.FC<AssetsCardProps> = ({
  currentValue,
  previousValue,
  timePeriod,
}) => {
  return (
    <Card className="w-[35%] h-full">
      <CardHeader>Assets</CardHeader>
      <CardContent className="mt-4">
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
