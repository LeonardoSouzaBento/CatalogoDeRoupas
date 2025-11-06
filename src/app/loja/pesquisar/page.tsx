import ButtonChat from "@ui/ButtonChat";
import Header from "./_components/Header";
import Core from "./Core";


const Pesquisar = () => {
  return (
    <div className="min-h-[100vh] bg-white br-0">
      <Header />
      <div className="px-3">
        <Core />
        <ButtonChat />
      </div>
    </div>
  );
};

export default Pesquisar;
