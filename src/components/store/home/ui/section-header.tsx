import { HomeContext } from '@/contexts/index';
import type { BooleanSetter } from '@/types/types';
import { useContext } from 'react';
import { EditSectionButton } from './edit-section-button';

interface HomeTitleSubtitleProps {
  title: string;
  subtitle?: string;
  section?: string;
  editMode?: boolean;
  setEditMode?: BooleanSetter;
}

export const SectionHeader = ({
  title,
  subtitle,
  section,
  editMode,
  setEditMode = () => {},
}: HomeTitleSubtitleProps) => {
  const { homeEditMode } = useContext(HomeContext);
  const pb = section === 'clothes' ? 'mb-3' : section === 'about' ? 'mb-2' : 'mb-4';

  return (
    <div>
      <div className={`w-full px-3 flex j-center i-center gap-3 ${pb}`}>
        <div className="flex flex-col size-auto">
          <h3 className={`capitalize text-center text-theme-700`}>{title}</h3>

          {subtitle && (
            <h6
              className={`w-full font-normal text-center 
              text-muted-foreground capitalize`}>
              {subtitle}
            </h6>
          )}
        </div>
      </div>
      {homeEditMode && (
        <EditSectionButton
          editMode={editMode}
          setEditMode={setEditMode}
          className="relative"
          variantion="title"
          section={section}
        />
      )}
    </div>
  );
};
