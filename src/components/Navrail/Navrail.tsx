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
          {/* todo: replace with typography component */}
          <span>{item.title}</span>{' '}
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
        <SidebarHeader className="flex-row justify-between my-4 mx-2">
          {state === 'expanded' && (
            <SidebarMenuButton
              className="p-1.5 rounded-[10px] w-fit h-fit"
              asChild
            >
              <div onClick={() => navigate(ROUTES.OVERVIEW)}>
                <Gem />
              </div>
            </SidebarMenuButton>
          )}

          <SidebarTrigger />
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent className="p-2 my-4 mx-2">
          <SidebarMenu>{renderSidebarMenuItems(menu, navigate)}</SidebarMenu>
        </SidebarContent>

        <SidebarSeparator />

        <SidebarFooter className="mt-4 mx-2 mb-8">
          <SidebarMenu>{renderSidebarMenuItems(footer, navigate)}</SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};
