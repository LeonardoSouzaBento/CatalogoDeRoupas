import { StoreLogo } from '@/components/store/login/store-logo';
import LoginCore from '@/components/store/login-core';

const css = {
  container: `h-screen w-full px-3 flex-center`,
  wrapper: `h-auto w-full max-w-100 mb-12 p-6 pt-5 pb-8 br-2xl bg-white
  shadow-lg hover:shadow-lg-hover trans relative`,
  title: 'text-gray-900 font-semibold capitalize tracking-normal mb-3 text-left ',
  button: ``,
};

export const buttonStyles = 'w-full h-11 j-center  hover:scale-102 trans';

const Login = () => {
  return (
    <div className={`${css.container} bg-gradient-to-br from-white to-gray-100`}>
      <div className="w-full max-w-100">
        <StoreLogo />
        <div className={`${css.wrapper}`}>
          <div className="w-full flex flex-col">
            <LoginCore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
