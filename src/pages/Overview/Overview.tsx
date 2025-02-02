import React from 'react';

import { Typography } from '@/components/custom/Typography';
import { useGetUser } from '@/hooks/user/useGetUser';
import { Page, PageDate, PageHeader, PageHeaderTitle, PageContent, Card } from '@/components/custom';


export const Overview: React.FC = () => {
  const { data: user } = useGetUser();

  return (
    <Page>
      <PageDate />
      <PageHeader>
        <PageHeaderTitle>Hello Mr {user?.firstName}</PageHeaderTitle>
      </PageHeader>
      <PageContent>
        <div className='flex flex-row gap-8'>

          </Card>
          <Card className='w-[35%]'>

          </Card>
        </div>
      </PageContent>
    </Page>
  );
};
