import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "../ui/card"

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
  return (<Card>
    <CardHeader>
      <CardTitle>{assetClass}</CardTitle>
    </CardHeader>
    <CardContent>${amount}</CardContent>
    <CardFooter>
      <CardDescription>{insight}</CardDescription>
    </CardFooter>
  </Card>
)
}
  