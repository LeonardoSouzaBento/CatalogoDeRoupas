import React from 'react';
import { Check } from 'lucide-react';
import { Icon } from '@/components/ui';

interface Props {
  section?: string;
  className?: string;
}

const CheckIcon = ({ section, className }: Props): React.ReactElement => {
  return (
    <span
      className={`inline-flex items-center justify-center round-full
      ${section === 'plans' ? 'min-w-5.5 h-5.5 bg-yellow-400/96' : 'min-w-6 h-6 bg-[#E8F9EE]'} 
      ${className}`}>
      <Icon
        LucideIcon={Check}
        size="xs"
        className={section === 'plans' ? 'text-[#8F22C0]' : 'text-[#22C35D]'}
      />
    </span>
  );
};

export { CheckIcon };
