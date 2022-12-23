import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { GlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const user = localStorage.getItem("loginData");
  const { state } = useContext(GlobalContext);
  const { setUser } = state;

  const clientId =
    "316070226270-g3ufqt0fn23i0tm5nars2vaa7vpdpv2e.apps.googleusercontent.com";
  const logOut = () => {
    localStorage.removeItem("loginData");
    setUser(null);
  };
  return (
    <nav className="bg-cyan-600 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            DansMultiPro
          </span>
        </a>

        {!user ? (
          <div className=" block w-auto" id="navbar-default">
            <ul className="flex flex-col px-2 md:px-4 md:py-2 rounded-lg bg-cyan-800 hover:bg-sky-700 md:flex-row md:space-x-8 mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0"
                  aria-current="page"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <GoogleLogout
            clientId={clientId}
            buttonText="Log out"
            onLogoutSuccess={logOut}
          />
        )}
      </div>
    </nav>
  );
}
