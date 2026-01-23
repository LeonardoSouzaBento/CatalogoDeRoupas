import { HomeContext } from '@/contexts/index';
import { BooleanSetter } from '@/types/types';
import { PenOff } from 'lucide-react';
import { useContext } from 'react';
import { ButtonSeeEditMode } from '../ui/button-see-edit-mode';
import { Button, Icon } from '@/components/ui';

interface HomeTitleSubtitleProps {
  title: string;
  subtitle?: string;
  section?: string;
  sectionEditMode?: boolean;
  setSectionEditMode?: BooleanSetter;
}

export const SectionHeader = ({
  title,
  subtitle,
  section,
  sectionEditMode,
  setSectionEditMode = () => {},
}: HomeTitleSubtitleProps) => {
  const { homeEditMode } = useContext(HomeContext);
  const seeButtonEdit = homeEditMode && !sectionEditMode && section !== 'genders';
  const seeButtonCloseEdit = sectionEditMode && homeEditMode && section !== 'genders';
  const pb = section === 'clothes' ? 'mb-3' : section === 'about' ? 'mb-4' : 'mb-6';

  return (
    <div>
      <div className={`w-full px-3 flex j-center i-center gap-3 ${pb}`}>
        <div className="flex flex-col size-auto">
          <h3
            className={`font-semibold capitalize 
              text-center`}>
            {title}
          </h3>

          {subtitle && (
            <h6
              className={`w-full mb-0.5 font-normal text-center 
              text-muted-foreground capitalize`}>
              {subtitle}
            </h6>
          )}
        </div>
      </div>
      {seeButtonEdit && (
        <ButtonSeeEditMode
          setState={setSectionEditMode}
          className="relative"
          variantion="title"
          section={section}
        />
      )}
      {seeButtonCloseEdit && (
        <Button
          className={`h-11 min-w-52 m-auto mb-5 
             ${section === 'clothes' && 'mb-3'}`}
          onClick={() => {
            setSectionEditMode(false);
          }}>
          Fechar edição
          <Icon LucideIcon={PenOff} />
        </Button>
      )}
    </div>
  );
};
