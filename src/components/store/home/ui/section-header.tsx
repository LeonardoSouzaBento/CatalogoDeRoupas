import { useHomeContext } from '@/contexts/index';
import type { BooleanSetter } from '@/types/types';
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
  const { homeEditMode } = useHomeContext();
  const mb = section === 'clothes' ? 'mb-3' : 'mb-6 mt-1.5';
  const textAlign = homeEditMode ? 'text-left' : 'text-center';
  const alignItems = homeEditMode ? 'items-start' : 'items-start sm:items-center';

  return (
    <div>
      <div
        className={`w-full ${section == 'clothes' && 'px-4'} 
        flex justify-start sm:justify-center items-center gap-3 ${mb}`}>
        <div
          className={`${
            homeEditMode &&
            `grid grid-cols-[1fr_max-content] 
          gap-4 items-center border p-4 pt-3 rounded-md`
          }`}>
          <div className={`flex flex-col ${alignItems}`}>
            <h3 className={`w-full max-w-max capitalize text-theme-700 ${textAlign}`}>{title}</h3>
            {subtitle && (
              <p
                className={`w-full max-w-max font-normal
                text-muted-foreground ${textAlign}`}>
                {subtitle}
              </p>
            )}
          </div>
          {homeEditMode && (
            <EditSectionButton editMode={editMode} setEditMode={setEditMode} className="relative" />
          )}
        </div>
      </div>
    </div>
  );
};
