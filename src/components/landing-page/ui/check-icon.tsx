import React from 'react';
import { Check } from 'lucide-react';
import { Icon } from '@/components/ui';

const CheckIcon = ({ section }: { section?: string }): React.ReactElement => {
  return (
    <span
      className={`inline-flex items-center justify-center round-full ml-1
      ${section === 'plans' ? '-ml-1 min-w-5.5 h-5.5 bg-yellow-400' : '-ml-1 min-w-6 h-6 bg-[#E8F9EE]'}`}>
      <Icon
        LucideIcon={Check}
        size="lg"
        className={section === 'plans' ? 'text-[#8F22C0]' : 'text-[#22C35D]'}
        strokeValue={2.3}
      />
    </span>
  );
};

export { CheckIcon };
