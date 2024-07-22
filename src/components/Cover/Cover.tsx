import { Gem } from 'lucide-react';

import { Typography } from '@/components/Typography';

import styles from './Cover.module.scss';

export const Cover: React.FC = () => {
  return (
    <div className={styles.CoverContainer}>
      <div className={styles.header}>
        <Gem size={32} strokeWidth={1.75} className={styles.headerIcon} />
        <Typography variant="extra-extra-large-500">Opulus</Typography>
      </div>
      <div className={styles.quote}>
        <Typography variant="extra-large">
          “A simple fact that is hard to learn is that the time to save money is
          when you have some.”
        </Typography>
        <Typography variant="medium">Jon Moore</Typography>
      </div>
    </div>
  );
};
