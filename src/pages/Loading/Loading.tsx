import { Gem } from 'lucide-react';

import styles from './Loading.module.scss';

export const Loading: React.FC = () => {
  return (
    <div className={styles.loadingPageContainer}>
      <div className={styles.icon}>
        <Gem size={28} />
      </div>
    </div>
  );
};
