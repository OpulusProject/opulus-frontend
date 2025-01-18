import { Typography } from '../Typography';

interface MetricChangeProps {
  amount: number;
  amountChange: number;
  percentChange?: number;
}

export const MetricChange: React.FC<MetricChangeProps> = ({
  amount,
  amountChange,
  percentChange,
}) => {
  const [integerPart, decimalPart] = amount
    .toFixed(2)
    .split('.')
    .map((part, index) => (index === 0 ? Number(part).toLocaleString() : part));

  return (
    <div>
        <div className="flex items-baseline">
        <Typography variant="small">{`$${integerPart}`}</Typography>
        <Typography variant="small">{`.${decimalPart}`}</Typography>
        </div>
        <div className="flex items-baseline">
        <Typography variant="small">{`${amountChange} (${percentChange}%)`}</Typography>
        <Typography variant="small">{`since  last week`}</Typography>
        </div>
    </div>
  );
};
