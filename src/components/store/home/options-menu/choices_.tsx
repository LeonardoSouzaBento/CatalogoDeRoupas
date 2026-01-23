import { Button, Icon } from '@/components/ui';
import { UserContext } from '@/contexts/index';
import { mostSearched } from '@/data/UserData';
import { Search } from 'lucide-react';
import { useContext } from 'react';

const css = {
  wrapper: `w-full h-11 flex i-center j-start gap-3 
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
        <Button key={item} className={`${css.wrapper}`}>
          <Icon LucideIcon={Search} />
          {item}
        </Button>
      ))}
    </div>
  );
};

export default Choices;
