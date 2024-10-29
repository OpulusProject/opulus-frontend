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

import styles from './Navrail.module.scss';

const menu = [
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Overview',
    url: '/home/overview',
    icon: LayoutGrid,
  },
  {
    title: 'Expenses',
    url: '/home/transactions',
    icon: CircleDollarSign,
  },
  {
    title: 'Accounts',
    url: '/home/accounts',
    icon: Wallet,
  },
  {
    title: 'Insights',
    url: '/home/reports',
    icon: Zap,
  },
];

const footer = [
  {
    title: 'Settings',
    url: '/home/settings',
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
  items: { title: string; url: string; icon: React.FC }[]
) => {
  return items.map((item) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        <a href={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  ));
};

export const Navrail: FC = () => {
  const { state } = useSidebar();

  return (
    <div className="dark">
      <Sidebar collapsible="icon">
        <SidebarHeader className={`${styles.Header}`}>
          {state === 'expanded' && (
            <SidebarMenuButton className={`${styles.Gem}`}>
              <Gem />
            </SidebarMenuButton>
          )}

          <SidebarTrigger />
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent className={`${styles.Menu}`}>
          <SidebarMenu>{renderSidebarMenuItems(menu)}</SidebarMenu>
        </SidebarContent>

        <SidebarSeparator />

        <SidebarFooter className={`${styles.Footer}`}>
          <SidebarMenu>{renderSidebarMenuItems(footer)}</SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
