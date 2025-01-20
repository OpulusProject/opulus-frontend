'use client';

import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';

import { Typography } from '@/components/Typography';
import { Checkbox } from '@/components/ui/checkbox';
import { Task } from '@/pages/Transactions/data/schema.ts';

import { DataTableColumnHeader } from './data-table-column-header';

const MERCHANT_LOGO_FALLBACK =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0b3JlIj48cGF0aCBkPSJtMiA3IDQuNDEtNC40MUEyIDIgMCAwIDEgNy44MyAyaDguMzRhMiAyIDAgMCAxIDEuNDIuNTlMMjIgNyIvPjxwYXRoIGQ9Ik00IDEydjhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi04Ii8+PHBhdGggZD0iTTE1IDIydi00YTIgMiAwIDAgMC0yLTJoLTJhMiAyIDAgMCAwLTIgMnY0Ii8+PHBhdGggZD0iTTIgN2gyMCIvPjxwYXRoIGQ9Ik0yMiA3djNhMiAyIDAgMCAxLTIgMmEyLjcgMi43IDAgMCAxLTEuNTktLjYzLjcuNyAwIDAgMC0uODIgMEEyLjcgMi43IDAgMCAxIDE2IDEyYTIuNyAyLjcgMCAwIDEtMS41OS0uNjMuNy43IDAgMCAwLS44MiAwQTIuNyAyLjcgMCAwIDEgMTIgMTJhMi43IDIuNyAwIDAgMS0xLjU5LS42My43LjcgMCAwIDAtLjgyIDBBMi43IDIuNyAwIDAgMSA4IDEyYTIuNyAyLjcgMCAwIDEtMS41OS0uNjMuNy43IDAgMCAwLS44MiAwQTIuNyAyLjcgMCAwIDEgNCAxMmEyIDIgMCAwIDEtMi0yVjciLz48L3N2Zz4=';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, 'MMMM d, yyyy');
};

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[-2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[-2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'accountName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Account" />
    ),
    cell: ({ row }) => <div>{row.getValue('accountName')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction Date" />
    ),
    cell: ({ row }) => {
      const date: string = row.getValue('date');
      return <div>{formatDate(date)}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
  },
  {
    accessorKey: 'merchantName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Merchant" />
    ),
    cell: ({ row }) => (
      <div className="flex flex-row gap-2">
        <img
          src={
            row.original.merchantLogo
              ? row.original.merchantLogo
              : MERCHANT_LOGO_FALLBACK
          }
          className="size-5 rounded-md"
        />
        {row.getValue('merchantName')}
      </div>
    ),
    filterFn: (row, id, value: string[]) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Amount"
        className="justify-end"
      />
    ),
    cell: ({ row }) => {
      const amountValue = row.getValue('amount');

      const formattedAmount =
        typeof amountValue === 'number' ? amountValue.toFixed(2) : '0.00'; // Default value if it's not a number

      return (
        <div className="flex flex-row gap-1 justify-end mr-3">
          <Typography variant="p3">{formattedAmount}</Typography>
          <Typography variant="p3">{row.original.currencyCode}</Typography>
        </div>
      );
    },
    filterFn: (row, id, value: number[]) => {
      return value.includes(row.getValue(id));
    },
    enableHiding: false,
  },
];
