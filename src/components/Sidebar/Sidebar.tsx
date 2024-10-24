import {
  Gem,
  ArrowDownUp,
  CircleHelp,
  LayoutGrid,
  LogOut,
  MessageCircle,
  PieChart,
  Settings2,
  Wallet,
  PanelRightOpen,
} from 'lucide-react';
import React, { useState } from 'react';
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
  isSidebarOpen: boolean;
  route: string;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  text,
  isActive,
  isSidebarOpen,
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
        {!isSidebarOpen && (
        <Typography variant="small-medium">{text}</Typography>
        )}
      </Button>
    </div>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ currentPage }) => {
  const { mutate: logout } = useLogout();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleOnSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div className={`${styles.SidebarContainer} ${!isSidebarOpen ? styles.closed : ''}`}>
      <div className={`${styles.Menu} ${styles.Header}`}>
        {isSidebarOpen && (<Button className={styles.GemButton}>
          <Gem />
        </Button>
        )}
        <Button  onClick={handleOnSidebarToggle} className={styles.CollapseButton}>
          <PanelRightOpen size={18}/>
        </Button>
      </div>
      <Separator />
      <div className={`${styles.Menu} ${styles.Body}`}>
        <SidebarButton
          icon={<LayoutGrid size={18} />}
          text="Overview"
          isActive={currentPage === 'overview'}
          isSidebarOpen = {!isSidebarOpen}
          route={ROUTES.OVERVIEW}
        />
        <SidebarButton
          icon={<ArrowDownUp size={18} />}
          text="Transactions"
          isActive={currentPage === 'transactions'}
          isSidebarOpen = {!isSidebarOpen}
          route={ROUTES.TRANSACTIONS}
        />
        <SidebarButton
          icon={<Wallet size={18} />}
          text="Accounts"
          isActive={currentPage === 'accounts'}
          isSidebarOpen = {!isSidebarOpen}
          route={ROUTES.ACCOUNTS}
        />
        <SidebarButton
          icon={<PieChart size={18} />}
          text="Reports"
          isActive={currentPage === 'reports'}
          isSidebarOpen = {!isSidebarOpen}
          route={ROUTES.REPORTS}
        />
        <SidebarButton
          icon={<Settings2 size={18} />}
          text="Settings"
          isActive={currentPage === 'settings'}
          isSidebarOpen = {!isSidebarOpen}
          route={ROUTES.SETTINGS}
        />
      </div>
      <Separator />
      <div className={`${styles.Menu}`}>
        <SidebarButton
          icon={<CircleHelp size={18} />}
          text="Help Center"
          isActive={currentPage === 'help'}
          isSidebarOpen = {!isSidebarOpen}
          route={ROUTES.HELP}
        />
        <SidebarButton
          icon={<MessageCircle size={18} />}
          text="Support"
          isActive={currentPage === 'support'}
          isSidebarOpen = {!isSidebarOpen}
          route={ROUTES.SUPPORT}
        />
        <SidebarButton
          icon={<LogOut size={18} />}
          text="Sign out"
          isActive={currentPage === 'signout'}
          isSidebarOpen = {!isSidebarOpen}
          route={ROUTES.LOGIN}
          onClick={logout}
        />
      </div>
    </div>
  );
};
