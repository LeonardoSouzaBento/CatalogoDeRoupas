import { StoreLogo } from "@/components/store/login/store-logo";
import LoginCore from "@/components/store/login-core";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex-center">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] size-[500px] bg-sky-200/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] size-[500px] bg-rose-200/20 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="relative w-full max-w-sm mx-4 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg">
        <div className="mb-8">
          <StoreLogo />
        </div>
        <LoginCore />
      </div>
    </div>
  );
};

export default Login;
