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
        {/* <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle btn">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn-primary btn-block btn">View cart</button>
              </div>
            </div>
          </div>
        </div> */}
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
                <Link href={"/app"  }>App</Link>
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
