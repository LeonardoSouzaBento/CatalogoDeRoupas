import React from 'react';
import { ButtonTester } from '@/components/ui/button-tester';
import { Icon } from '@/components/ui';
import { Search } from 'lucide-react';

const Page = () => {
  return (
    <div>
      <ButtonTester />
      <Icon LucideIcon={Search} fill="var(--icon-fill)" />
    </div>
  );
};

export default Page;
