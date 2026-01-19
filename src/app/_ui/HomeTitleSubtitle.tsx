import { iconMd } from '@/app/css/lucideIconStyles';
import { HomeContext } from '@/contexts';
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

const css = {
  title: `font-semibold capitalize leading-10 text-center`,
  selectGenderTitle: 'text-center uppercase leading-none! pb-4 normal-p font-medium text-gray-800',
  subtitle: `w-full mb-0.5 font-normal text-center text-neutral-600/88 capitalize big-p`,
};

const HomeTitleSubtitle = ({
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
          <h2 className={`${section == 'genders' ? css.selectGenderTitle : css.title}`}>{title}</h2>

          {subtitle && <h3 className={`${css.subtitle}`}>{subtitle}</h3>}
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
          <div className="wrapper-icon">
            <PenOff {...iconMd} />
          </div>
        </button>
      )}
    </div>
  );
};

export default HomeTitleSubtitle;
