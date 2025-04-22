import GoogleLogin from "react-google-login"
import { gapi } from "gapi-script"

import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"

import shareVideo from "/assets/share.mp4"
import logo from "/assets/logowhite.png"
import { useEffect } from "react"
import { client } from "../client"

import { MdPerson } from "react-icons/md";
import { dummyUser } from "../utils/fetchUser"

const KEY = import.meta.env.VITE_REACT_APP_GOOGLE_API_TOKEN

export default function Login() {
  const navigate = useNavigate();

  async function onSuccess(response) {
    localStorage.setItem("user", JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl
    }

    client.createIfNotExists(doc)
      .then(response => {
        navigate("/", { replace: true });
      })
  }

  function setDummyUser() {
    localStorage.setItem("user", JSON.stringify(dummyUser));
    navigate("/", { replace: true });
  }

  function onFailure(err) {
    console.log("failure - ", err);
  }

  useEffect(function () {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: KEY })
    })
  }, []);

  return <div className="flex justify-start items-center flex-col h-screen ">
    <div className="relative w-full h-full ">
      <video
        src={shareVideo}
        typeof="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-full object-cover"
      />
      <div className="absolute flex flex-col justify-center items-center w-full inset-0 bg-blackOverlay">
        <div className="p-5">
          <img src={logo} alt="logo" width="130px" />
        </div>
        <div className="shadow-2xl">
          <GoogleLogin
            clientId={KEY}
            render={(renderProps) => (
              <button
                type="button"
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg pointer outline-none"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <FcGoogle className="mr-4" /> Sign in with Google
              </button>
            )}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy="single_host_origin"
          />
        </div>
        <div className="shadow-2xl">
          <button onClick={setDummyUser} className="bg-mainColor flex justify-center items-center p-3 rounded-lg pointer outline-none my-2">
            <MdPerson className="mr-2 text-2xl" /> Guest Login
          </button>
        </div>
      </div>
    </div>
  </div>
}