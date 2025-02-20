import React from 'react';

import {
  AssetTable,
  AssetTableBody,
  AssetTableCell,
  AssetTableHead,
  AssetTableHeader,
  AssetTableRow,
  Card,
  Color,
} from '@/components/custom';
import { Typography } from '@/components/custom/Typography';
import { useGetUser } from '@/hooks/user/useGetUser';

export const Overview: React.FC = () => {
  const { data: user } = useGetUser();

  return (
    <div>
      <Typography variant="h1">Hello Mr {user?.firstName}</Typography>
      <Card className="w-[50%] h-[50%]">
        <AssetTable>
          <AssetTableHeader>
            <AssetTableHead>Account Types</AssetTableHead>
            <AssetTableHead className="text-right">Amount</AssetTableHead>
          </AssetTableHeader>
          <AssetTableBody>
            <AssetTableRow>
              <Color color={'#00FFAF'}></Color>
              <AssetTableCell>Investments</AssetTableCell>
              <AssetTableCell>Investments</AssetTableCell>
            </AssetTableRow>
            <AssetTableRow>
              <Color color={'#00FFAF'}></Color>
              <AssetTableCell>Investments</AssetTableCell>
              <AssetTableCell>Investments</AssetTableCell>
            </AssetTableRow>
          </AssetTableBody>
        </AssetTable>
      </Card>
    </div>
  );
};
