import {
  CircleDollarSign,
  CircleHelp,
  Gem,
  Gift,
  LayoutGrid,
  Search,
  Settings2,
  Wallet,
  Zap,
} from 'lucide-react';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { ROUTES } from '@/pages/routes';
import { Typography } from '../Typography';

interface SidebarItem {
  title: string;
  url: string;
  icon: React.FC;
}

const menu: SidebarItem[] = [
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Overview',
    url: ROUTES.OVERVIEW,
    icon: LayoutGrid,
  },
  {
    title: 'Expenses',
    url: ROUTES.TRANSACTIONS,
    icon: CircleDollarSign,
  },
  {
    title: 'Accounts',
    url: ROUTES.ACCOUNTS,
    icon: Wallet,
  },
  {
    title: 'Insights',
    url: ROUTES.REPORTS,
    icon: Zap,
  },
];

const footer: SidebarItem[] = [
  {
    title: 'Settings',
    url: ROUTES.SETTINGS,
    icon: Settings2,
  },
  {
    title: 'Chat for help',
    url: '#',
    icon: CircleHelp,
  },
  {
    title: 'Refer and earn',
    url: '#',
    icon: Gift,
  },
];

// Helper function to render menu items
const renderSidebarMenuItems = (
  items: SidebarItem[],
  navigate: (url: string) => void
) => {
  return items.map((item) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        <div onClick={() => navigate(item.url)}>
          <item.icon />
          <Typography variant={'l2'}>{item.title}</Typography>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));
};

export const Navrail: FC = () => {
  const { state } = useSidebar();
  const navigate = useNavigate();

  return (
    <div className="dark">
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex-row-reverse justify-between">
          <SidebarTrigger />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => navigate(ROUTES.OVERVIEW)}
            className={state === 'expanded' ? '' : 'hidden'}
          >
            <Gem size={16} />
          </Button>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent>
          <SidebarMenu>{renderSidebarMenuItems(menu, navigate)}</SidebarMenu>
        </SidebarContent>

        <SidebarSeparator />

        <SidebarFooter>
          <SidebarMenu>{renderSidebarMenuItems(footer, navigate)}</SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
