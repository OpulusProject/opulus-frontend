import {
  Search,
  LayoutGrid,
  CircleDollarSign,
  Wallet,
  Zap,
  Gem,
  Settings2,
  CircleHelp,
  Gift,
} from 'lucide-react';
import React, { FC } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

import styles from './Navrail.module.scss';

const menuOne = [
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Overview',
    url: '#',
    icon: LayoutGrid,
  },
  {
    title: 'Expenses',
    url: '#',
    icon: CircleDollarSign,
  },
  {
    title: 'Accounts',
    url: '#',
    icon: Wallet,
  },
  {
    title: 'Insights',
    url: '#',
    icon: Zap,
  },
];

const menuTwo = [
  {
    title: 'Settings',
    url: '#',
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
          <item.icon size={18} /> {/* Set icon size */}
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
              <Gem/>
            </SidebarMenuButton>
          )}

          <SidebarTrigger />
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent className={`${styles.Menu}`}>
          <SidebarMenu>{renderSidebarMenuItems(menuOne)}</SidebarMenu>
        </SidebarContent>

        <SidebarSeparator />

        <SidebarFooter className={`${styles.Footer}`}>
          <SidebarMenu>{renderSidebarMenuItems(menuTwo)}</SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
