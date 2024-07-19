import fs from 'fs/promises';
import path from 'path';
import React, { useEffect, useState } from 'react';
import { z } from 'zod';

import { Typography } from '@/components/Typography';
import { PageLayout } from '@/pages/Layouts/PageLayout';
import { columns } from '@/pages/Transactions/components/columns';
import { DataTable } from '@/pages/Transactions/components/data-table';
import { taskSchema } from '@/pages/Transactions/data/schema';

import styles from './Transactions.module.scss';

const data = [
  {
    id: 'TASK-8782',
    title:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    status: 'in progress',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-7878',
    title:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    status: 'backlog',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-7839',
    title: 'We need to bypass the neural TCP card!',
    status: 'todo',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-5562',
    title:
      'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!',
    status: 'backlog',
    label: 'feature',
    priority: 'medium',
  },
  {
    id: 'TASK-8686',
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: 'canceled',
    label: 'feature',
    priority: 'medium',
  },
  {
    id: 'TASK-1280',
    title:
      'Use the digital TLS panel, then you can transmit the haptic system!',
    status: 'done',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-7262',
    title:
      'The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!',
    status: 'done',
    label: 'feature',
    priority: 'high',
  },
  {
    id: 'TASK-1138',
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!",
    status: 'in progress',
    label: 'feature',
    priority: 'medium',
  },
  {
    id: 'TASK-7184',
    title: 'We need to program the back-end THX pixel!',
    status: 'todo',
    label: 'feature',
    priority: 'low',
  },
  {
    id: 'TASK-5160',
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!",
    status: 'in progress',
    label: 'documentation',
    priority: 'high',
  },
  {
    id: 'TASK-5618',
    title:
      "Generating the driver won't do anything, we need to index the online SSL application!",
    status: 'done',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-6699',
    title:
      "I'll transmit the wireless JBOD capacitor, that should hard drive the SSD feed!",
    status: 'backlog',
    label: 'documentation',
    priority: 'medium',
  },
  {
    id: 'TASK-2858',
    title: 'We need to override the online UDP bus!',
    status: 'backlog',
    label: 'bug',
    priority: 'medium',
  },
  {
    id: 'TASK-9864',
    title:
      "I'll reboot the 1080p FTP panel, that should matrix the HEX hard drive!",
    status: 'done',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-8404',
    title: 'We need to generate the virtual HEX alarm!',
    status: 'in progress',
    label: 'bug',
    priority: 'low',
  },
  {
    id: 'TASK-5365',
    title:
      "Backing up the pixel won't do anything, we need to transmit the primary IB array!",
    status: 'in progress',
    label: 'documentation',
    priority: 'low',
  },
  {
    id: 'TASK-1780',
    title:
      'The CSS feed is down, index the bluetooth transmitter so we can compress the CLI protocol!',
    status: 'todo',
    label: 'documentation',
    priority: 'high',
  },
  {
    id: 'TASK-6938',
    title:
      'Use the redundant SCSI application, then you can hack the optical alarm!',
    status: 'todo',
    label: 'documentation',
    priority: 'high',
  },
  {
    id: 'TASK-9885',
    title: 'We need to compress the auxiliary VGA driver!',
    status: 'backlog',
    label: 'bug',
    priority: 'high',
  },
  {
    id: 'TASK-3216',
    title:
      "Transmitting the transmitter won't do anything, we need to compress the virtual HDD sensor!",
    status: 'backlog',
    label: 'documentation',
    priority: 'medium',
  },
];

export const Transactions: React.FC = () => {
  const tasks = z.array(taskSchema).parse(data);
  return (
    <PageLayout currentPage="transactions">
      <Typography variant="extra-extra-large">Transactions</Typography>
      <DataTable data={tasks} columns={columns} />
    </PageLayout>
  );
};
