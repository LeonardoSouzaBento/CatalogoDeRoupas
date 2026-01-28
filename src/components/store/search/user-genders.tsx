'use client';
import { UserContext } from '@/contexts/userContext_';
import type { BooleanSetter, Gender, StateSetter } from '@/types/types';
import { useContext } from 'react';
import { genders } from '@/types/types';
import { Button } from '@/components/ui/button';

const mainCss = {
  wrapper: `rounded-none py-6`,
  wrapperGenders: 'flex flex-wrap gap-4',
  selected: `border bg-light-bg hover:shadow-sm hover:bg-light-bg `,
  button: `h-10 max-[375px]:min-w-1/2 min-[375px]:min-w-none flex-center bg-gray-50 hover:bg-gray-100 font-normal`,
};

export const UserGenders = () => {
  const { selectedGender, setSelectedGender, childCatSelected, setChildCatSelected } =
    useContext(UserContext);

  return (
    <div className={`px-2`}>
      <div className={`${mainCss.wrapper}`}>
        <p className={`mb-4 `}>Gênero:</p>
        <div className={`${mainCss.wrapperGenders}`}>
          {genders.map((item) => (
            <GenderButton
              key={item}
              gender={item}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              childCatSelected={childCatSelected}
              setChildCatSelected={setChildCatSelected}
            />
          ))}

          <ChildButtons
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            childCatSelected={childCatSelected}
            setChildCatSelected={setChildCatSelected}
          />
        </div>
      </div>
    </div>
  );
};

/* botões masculino e feminino */
interface ButtonsProps {
  selectedGender: Gender;
  setSelectedGender: StateSetter<Gender>;
  childCatSelected: boolean;
  setChildCatSelected: BooleanSetter;
}

interface GenderButtonProps extends ButtonsProps {
  gender: Gender;
}

const GenderButton = ({
  gender,
  selectedGender,
  setSelectedGender,
  childCatSelected,
  setChildCatSelected,
}: GenderButtonProps) => {
  const selected = selectedGender === gender.toLowerCase() && !childCatSelected;

  return (
    <Button
      onClick={() => {
        if (selectedGender !== gender) {
          setSelectedGender(gender);
        }
        if (childCatSelected) {
          setChildCatSelected(false);
        }
      }}
      variant={selected ? 'default' : 'outline'}>
      <p>{gender}</p>
    </Button>
  );
};

/* botões infantil */
const ChildButtons = ({
  selectedGender,
  setSelectedGender,
  childCatSelected,
  setChildCatSelected,
}: ButtonsProps) => {
  const femaleSelected = selectedGender === 'feminino' && childCatSelected;
  const maleSelected = selectedGender === 'masculino' && childCatSelected;

  function handleSelectGender(gender: Gender) {
    if (selectedGender !== gender) {
      setSelectedGender(gender);
    }
    if (!childCatSelected) {
      setChildCatSelected(true);
    }
  }

  return (
    <>
      <Button
        variant={maleSelected ? 'default' : 'outline'}
        onClick={() => {
          handleSelectGender('masculino');
        }}>
        Infantil - masculino
      </Button>
      <Button
        variant={femaleSelected ? 'default' : 'outline'}
        onClick={() => {
          handleSelectGender('feminino');
        }}>
        Intantil - feminino
      </Button>
    </>
  );
};
