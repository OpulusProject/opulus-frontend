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
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Typography } from '@/components/Typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useLogout } from '@/hooks/auth/useLogout';
import { ROUTES } from '@/pages/routes';

import styles from './Sidebar.module.scss';

const PLACEHOLDER_AVATAR_LINK =
  'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface SidebarProps {
  currentPage: string;
}

interface SidebarButtonProps {
  icon?: React.ReactNode;
  text: string;
  isActive: boolean;
  route: string;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  text,
  isActive,
  route,
  onClick,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.Option}>
      <Button
        variant={isActive ? 'default' : 'ghost'}
        className={styles.Button}
        onClick={onClick}
      >
        {icon}
        <Typography variant="small-medium">{text}</Typography>
      </Button>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ currentPage }) => {
  const { mutate: logout } = useLogout();

  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.Avatar}>
        <Avatar>
          <AvatarImage src={PLACEHOLDER_AVATAR_LINK} />
          {/* <AvatarFallback>A</AvatarFallback> 
          fallback renders before avatar image, brief moment where you can see the fallback before avatar */}
        </Avatar>
      </div>
      <div className={`${styles.Menu} ${styles.FirstMenu}`}>
        <SidebarButton
          icon={<LayoutGrid size={18} />}
          text="Overview"
          isActive={currentPage === 'overview'}
          route={ROUTES.OVERVIEW}
        />
        <SidebarButton
          icon={<ArrowDownUp size={18} />}
          text="Transactions"
          isActive={currentPage === 'transactions'}
          route={ROUTES.TRANSACTIONS}
        />
        <SidebarButton
          icon={<Wallet size={18} />}
          text="Accounts"
          isActive={currentPage === 'accounts'}
          route={ROUTES.ACCOUNTS}
        />
        <SidebarButton
          icon={<PieChart size={18} />}
          text="Reports"
          isActive={currentPage === 'reports'}
          route={ROUTES.REPORTS}
        />
        <SidebarButton
          icon={<Settings2 size={18} />}
          text="Settings"
          isActive={currentPage === 'settings'}
          route={ROUTES.SETTINGS}
        />
      </div>
      <Separator />
      <div className={`${styles.Menu} ${styles.SecondMenu}`}>
        <SidebarButton
          icon={<CircleHelp size={18} />}
          text="Help Center"
          isActive={currentPage === 'help'}
          route={ROUTES.HELP}
        />
        <SidebarButton
          icon={<MessageCircle size={18} />}
          text="Support"
          isActive={currentPage === 'support'}
          route={ROUTES.SUPPORT}
        />
        <SidebarButton
          icon={<LogOut size={18} />}
          text="Sign out"
          isActive={currentPage === 'signout'}
          route={ROUTES.LOGIN}
          onClick={logout}
        />
      </div>
    </div>
  );
};
