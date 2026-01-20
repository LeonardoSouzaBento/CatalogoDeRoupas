import { HomeContext } from '@/contexts';
import { iconMd } from '@/css/lucideIconStyles';
import { BooleanSetter } from '@/types/types';
import { PenOff } from 'lucide-react';
import { useContext } from 'react';
import ButtonSeeEditMode from './button-see-edit-mode';

interface HomeTitleSubtitleProps {
  title: string;
  subtitle?: string;
  section?: string;
  sectionEditMode?: boolean;
  setSectionEditMode?: BooleanSetter;
}

const HomeSectionTitle = ({
  title,
  subtitle,
  section,
  sectionEditMode,
  setSectionEditMode = () => {},
}: HomeTitleSubtitleProps) => {
  const { homeEditMode } = useContext(HomeContext);
  const seeButtonEdit = homeEditMode && !sectionEditMode && section !== 'genders';
  const seeButtonCloseEdit = sectionEditMode && homeEditMode && section !== 'genders';

  return (
    <div>
      <div
        className={`w-full px-3 flex j-center i-center gap-3 ${
          section == 'clothes' ? 'mb-3' : 'mb-6'
        }`}>
        <div className="flex flex-col size-auto">
          {section == 'genders' ? (
            <p
              className={`text-center uppercase font-medium 
            text-muted-foreground large-text`}>
              {title}
            </p>
          ) : (
            <h3
              className={`font-semibold capitalize 
              text-center`}>
              {title}
            </h3>
          )}

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
          positionStyles="relative"
          variantion="title"
          section={section}
        />
      )}
      {seeButtonCloseEdit && (
        <button
          className={`h-11 min-w-52 flex-center m-auto mb-5 br-2xl 
            bg-linear-to-br from-stone-800 to-stone-800/88 text-white shadow-lg hover:shadow-lg-hover ${
              section === 'clothes' && 'mb-3!'
            }`}
          onClick={() => {
            setSectionEditMode(false);
          }}>
          Fechar edição
          <PenOff {...iconMd} />
        </button>
      )}
    </div>
  );
};

export default HomeSectionTitle;
