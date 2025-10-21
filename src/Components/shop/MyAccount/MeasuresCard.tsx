import { useState } from "react";
import EditMeasures from "./EditMeasures";
import MeasuresGuide from "./MeasuresGuide";
import { CircleQuestionMark, Pen } from "lucide-react";

const MeasuresCard = () => {
  const css = {
    mainWrapper: "",
    wrapper: "w-full flex flex-col gap-3 items-start",
    wrapperInfo: "",
    p: ``,
    p2: "",
    button: ``,
  };

  const [shirtMeasure, setShirtMeasure] = useState<string>("");
  const [pantsMeasure, setPantsMeasure] = useState<number>(40);
  const [shoesMeasure, setShoesMeasure] = useState<number>(40);

  const [editMode, setEditMode] = useState<boolean>(false);

  const [seeMeasuresGuide, setSeeMeasuresGuide] = useState<boolean>(false);

  return (
    <div className={`${css.mainWrapper}`}>
      {!editMode ? (
        <div className={`${css.wrapper}`}>
          <div className={`${css.wrapperInfo}`}>
            <p className={`${css.p}`}>Camisetas</p>
            <p className={`${css.p2}`}>{shirtMeasure}</p>
          </div>
          <div className={`${css.wrapperInfo}`}>
            <p className={`${css.p}`}>Calças</p>
            <p className={`${css.p2}`}>{pantsMeasure}</p>
          </div>
          <div className={`${css.wrapperInfo}`}>
            <p className={`${css.p}`}>Calçado</p>
            <p className={`${css.p2}`}>{shoesMeasure}</p>
          </div>
        </div>
      ) : (
        <EditMeasures />
      )}

      <button
        className={`${css.button}`}
        onClick={() => {
          setEditMode(true);
        }}
      >
        <Pen />
        Atualizar minhas medidas
      </button>
      {!seeMeasuresGuide && (
        <button>
          <CircleQuestionMark /> Como saber minhas medidas?
        </button>
      )}
      {seeMeasuresGuide && (
        <MeasuresGuide setSeeMeasuresGuide={setSeeMeasuresGuide} />
      )}
    </div>
  );
};

export default MeasuresCard;
