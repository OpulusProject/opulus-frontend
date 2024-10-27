import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '../ui/card';

import styles from './OverviewCard.module.scss';

interface OverviewCardProps {
  assetClass: string;
  amount: number;
  insight?: string;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  assetClass,
  amount,
  insight,
}) => {
  const [integerPart, decimalPart] = amount
    .toFixed(2)
    .split('.')
    .map((part, index) => (index === 0 ? Number(part).toLocaleString() : part));

  return (
    <Card className={styles.Container}>
      <CardHeader className={styles.Header}>
        <CardTitle className={styles.Title}>{assetClass}</CardTitle>
      </CardHeader>
      <CardContent className={styles.Amount}>
        <span className={styles.Integer}>${integerPart}</span>
        <span className={styles.Decimal}>.{decimalPart}</span>
      </CardContent>
      <CardFooter className={styles.Footer}>
        <CardDescription>{insight}</CardDescription>
      </CardFooter>
    </Card>
  );
};

