import { iconMd } from '@/app/css/lucideIconStyles';
import { UserContext } from '@/contexts';
import { mostSearched } from '@/data/UserData';
import { Search } from 'lucide-react';
import { useContext } from 'react';

const css = {
  wrapper: `w-full h-11 pl-[22px] flex i-center j-start gap-3 
  br-0 hover:bg-gray-100 hover:pl-4 fast-trans`,
};

const Choices = () => {
  const { selectedGender } = useContext(UserContext);
  const currentMostSearched =
    selectedGender === 'masculino'
      ? mostSearched.masculino
      : selectedGender === 'feminino'
      ? mostSearched.feminino
      : mostSearched.infantil;

  return (
    <div>
      {currentMostSearched.map((item) => (
        <div key={item} className={`${css.wrapper}`}>
          <Search {...iconMd} />
          <p className="">{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Choices;
