import { Greeting } from "@/components/store/login/greeting";
import LoginCore from "@/components/store/login-core";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex-center">
      <DecorativeCircle />

      <div className="relative w-full max-w-sm mx-4 bg-light-bg/80 backdrop-blur-xl rounded-2xl shadow-md crop">
        <Greeting />
        <LoginCore />
      </div>
    </div>
  );
};

export default Login;

const DecorativeCircle = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute top-[10%] left-[10%] size-[500px] bg-sky-200/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[10%] size-[500px] bg-rose-200/20 rounded-full blur-[120px] animate-pulse-slow" />
    </div>
  );
};
