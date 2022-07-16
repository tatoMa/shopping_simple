import { useSession, signIn, signOut } from "next-auth/react";
const LoginButton = () => {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    return (
      <div className="flex justify-end items-center gap-3">
        <p className="text-slate-200 font-thin">
          Welcome back {session.user.name}
        </p>
        <button
          className="text-white bg-slate-500 hover:bg-slate-300 hover:text-black px-4 py-1 rounded-sm"
          onClick={() => signOut()}
        >
          Sign out
        </button>
        <img
          className=" object-contain h-10 rounded-full"
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
        className="text-white bg-slate-500 hover:bg-slate-300 hover:text-black px-4 py-1 rounded-sm"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginButton;
