import { Info } from "lucide-react";

const EditMeasures = () => {
  const css = {
    wrapper: ``,
    inputWrapper: ``,
    label: ``,
    input: ``,
    divInfo: ``,
    pInfo: "",
  };

  return (
    <div>
      <h2>Defina suas medidas</h2>
    
      <div className={`${css.divInfo}`}>
        <Info />
        <p className={`${css.pInfo}`}>
          As medida da calça é definida automaticamente, mas você pode
          ajustá-la para mais precisão.
        </p>
      </div>

      <div className={`${css.wrapper}`}>
        <div className={`${css.inputWrapper}`}>
          <label htmlFor="" className={`${css.label}`}>
            Camisa
          </label>
          <input type="text" className={`${css.input}`} />
        </div>
        <button>Salvar</button>
      </div>

      <div className={`${css.wrapper}`}>
        <div className={`${css.inputWrapper}`}>
          <label htmlFor="" className={`${css.label}`}>
            Calça
          </label>
          <input type="text" className={`${css.input}`} />
        </div>
        <button>Salvar</button>
      </div>
      
      <div className={`${css.wrapper}`}>
        <div className={`${css.inputWrapper}`}>
          <label htmlFor="" className={`${css.label}`}>
            Calçado
          </label>
          <input type="text" className={`${css.input}`} />
        </div>
        <button>Salvar</button>
      </div>
    </div>
  );
};

export default EditMeasures;