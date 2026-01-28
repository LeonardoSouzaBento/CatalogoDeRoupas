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
      <div className={`w-full px-3 flex justify-center items-center gap-3 ${pb}`}>
        <div className={`${homeEditMode && `grid grid-cols-[1fr_max-content] 
          gap-4 items-center border p-4 pt-3 rounded-sm`}`}>
          <div className={`flex flex-col ${homeEditMode ? 'items-start' : 'items-center'}`}>
            <h3 className={`w-full max-w-max capitalize text-theme-700`}>{title}</h3>
            {subtitle && (
              <h6
                className={`w-full max-w-max font-normal
                text-muted-foreground capitalize`}>
                {subtitle}
              </h6>
            )}
          </div>
          {homeEditMode && (
            <EditSectionButton
              editMode={editMode}
              setEditMode={setEditMode}
              className="relative"
            />
          )}
        </div>
      </div>
    </div>
  );
};
