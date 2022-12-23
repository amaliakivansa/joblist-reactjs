import React, { useContext, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { GlobalContext } from "../context/GlobalContext";
import { useHistory } from "react-router-dom";

const clientId =
  "316070226270-g3ufqt0fn23i0tm5nars2vaa7vpdpv2e.apps.googleusercontent.com";

export default function Login() {
  const { state } = useContext(GlobalContext);
  const { setUser } = state;
  const history = useHistory();

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  }, []);

  const onSuccess = (res) => {
    localStorage.setItem("loginData", JSON.stringify(res.profileObj));
    setUser(JSON.stringify(res.profileObj));
    history.push("/home");
  };

  const onFailure = (err) => {
    alert("failed", err);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {" "}
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Login To Your Account
        </div>
        <div className="flex gap-4 item-center">
          {/* <button
            type="button"
            className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          >
            <svg
              width={20}
              height={20}
              fill="currentColor"
              className="mr-2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
            Facebook
          </button> */}

          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            className="grow"
          />
        </div>
      </div>
    </div>
  );
}
