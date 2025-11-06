import LogoName from "./components/LogoName";
import Core from "./components/Core";

const css = {
  container: `h-screen w-full px-3 centralize`,
  wrapper: `h-auto w-full max-w-100 mb-12 p-6 pt-5 pb-8 br-2xl bg-white
  shadow-soft hover:shadow-soft-hover trans relative`,
  title:
    "text-gray-900 font-semibold capitalize tracking-normal mb-3 text-left text-[1.33em]",
  button: ``,
};

export const buttonStyles =
  "w-full h-11 j-center text-[1.06em] hover:scale-102 trans";

const Login = () => {
  return (
    <div className={`${css.container} bg-gradient-to-br from-white to-gray-100`}>
      <div className="w-full max-w-100">
        <LogoName />
        <div className={`${css.wrapper}`}>
          <div className="w-full flex flex-col">
            <Core />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
