import { X } from "lucide-react";

const MeasuresGuide = ({
  setSeeMeasuresGuide,
}: {
  setSeeMeasuresGuide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const css = {
    section: ``,
    h1: `capitalize`,
    wrapper: ``,
    containerCols: "flex",
    wrapperCol: "flex flex-col",
    wrapperButtons: "flex flex-col sm:flex-row gap-3",
    button: "base-button-light",
  };

  return (
    <section className={`${css.section}`}>
      <button
        className="buttonClose"
        onClick={() => {
          setSeeMeasuresGuide(false);
        }}
      >
        <X />
      </button>
      <h1 className={`${css.h1}`}>Guia de Medidas</h1>

      <div className={`${css.wrapperButtons}`}>
        <button className={`${css.button}`}>Masculino</button>
        <button className={`${css.button}`}>Feminino</button>
      </div>

      <h2>Camisas</h2>
      <div className={`${css.wrapper}`}>
        <div className={`${css.containerCols}`}>
          <div className={`${css.wrapperCol}`}>
            <p>Tamanho</p>
          </div>
          <div className={`${css.wrapperCol}`}>
            <p>Largura da cintura</p>
          </div>
          <div className={`${css.wrapperCol}`}>
            <p>Largura do busto/torax</p>
          </div>
        </div>
      </div>

      <h2>Calças</h2>
      <div className={`${css.wrapper}`}>
        <div className={`${css.containerCols}`}>
          <div className={`${css.wrapperCol}`}>
            <p>Tamanho da camiseta</p>
          </div>
          <div className={`${css.wrapperCol}`}>
            <p>Tamanho da calça</p>
          </div>
          <div className={`${css.wrapperCol}`}>
            <p>Circunferência da cintura</p>
          </div>
        </div>
      </div>

      <h2>Calçados</h2>
      <div className={`${css.wrapper}`}>
        <div className={`${css.containerCols}`}>
          <div className={`${css.wrapperCol}`}></div>
          <div className={`${css.wrapperCol}`}></div>
          <div className={`${css.wrapperCol}`}></div>
        </div>
      </div>
    </section>
  );
};

export default MeasuresGuide;
