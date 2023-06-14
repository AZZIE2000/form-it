import { memo, useEffect, useState } from "react";
import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Link from "next/link";

interface NavBarProps {
  children?: React.ReactNode;
}

const NavBar: NextPage<NavBarProps> = memo(({ children }) => {
  const { data: sessionData } = useSession();
  const [loading, setLoading] = useState(false);
  const handleLogOut = () => {
    setLoading(true);
    signOut().finally(() => setLoading(false));
  };
  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );
  return (
    <div className="navbar sticky top-0  bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Form.It</a>
      </div>
      <div className="flex-none">
        {sessionData ? (
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <img src={sessionData.user.image || ""} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <Link href={"/profile"} className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <Link href={"/app"}>App</Link>
              </li>
              <li>
                <a
                  onClick={() => handleLogOut()}
                  className="flex justify-between"
                >
                  Logout
                  {loading && (
                    <span className="loading loading-dots loading-xs"></span>
                  )}
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="btn-primary btn-outline btn-sm btn"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
});

export default NavBar;
