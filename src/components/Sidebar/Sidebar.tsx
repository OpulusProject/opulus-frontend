import {
  ArrowDownUp,
  CircleHelp,
  LayoutGrid,
  LogOut,
  MessageCircle,
  PieChart,
  Settings2,
  Wallet,
} from 'lucide-react';

import { Typography } from '@/components/Typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

import styles from './Sidebar.module.scss';

const PLACEHOLDER_AVATAR_LINK =
  'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const Sidebar: React.FC = () => {
  interface SidebarButtonProps {
    icon?: React.ReactNode;
    text: string;
  }

  const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, text }) => {
    return (
      <div className={styles.Option}>
        <Button variant="ghost" className={styles.Button}>
          {icon}
          <Typography variant="small-medium">{text}</Typography>
        </Button>
      </div>
    );
  };

  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.Avatar}>
        <Avatar>
          <AvatarImage src={PLACEHOLDER_AVATAR_LINK} />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
      <div className={`${styles.Menu} ${styles.FirstMenu}`}>
        <SidebarButton icon={<LayoutGrid size={18} />} text="Overview" />
        <SidebarButton icon={<ArrowDownUp size={18} />} text="Transactions" />
        <SidebarButton icon={<Wallet size={18} />} text="Accounts" />
        <SidebarButton icon={<PieChart size={18} />} text="Reports" />
        <SidebarButton icon={<Settings2 size={18} />} text="Settings" />
      </div>
      <Separator />
      <div className={`${styles.Menu} ${styles.SecondMenu}`}>
        <SidebarButton icon={<CircleHelp size={18} />} text="Help Center" />
        <SidebarButton icon={<MessageCircle size={18} />} text="Support" />
        <SidebarButton icon={<LogOut size={18} />} text="Sign out" />
      </div>
    </div>
  );
};
