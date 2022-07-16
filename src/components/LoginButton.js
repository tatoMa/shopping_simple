import { useSession, signIn, signOut } from "next-auth/react";
const LoginButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex justify-end items-center gap-3">
        <p className="text-slate-200 font-thin">
          Welcome back <span className="font-medium">{session.user.name}</span>
        </p>
        <button
          className="text-white bg-slate-400 hover:bg-slate-300 hover:text-black px-4 py-1 rounded-md"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <img
          className=" object-contain h-10 rounded-full cursor-pointer"
          src={session.user.image}
          alt={session.user.name}
          onClick={() => signOut()}
        />
      </div>
    );
  }
  return (
    <div>
      <button
        className="text-white bg-slate-400 hover:bg-slate-300 hover:text-black px-4 py-1 rounded-md"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginButton;
