import { NextPage } from "next";
import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoogleLogin } from "react-google-login";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const activeLink =
  "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer  font-semibold rounded text-[#F51997]";
const normalLink =
  "flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer  font-semibold rounded";
const SideBar: NextPage = () => {
  const [showSidebar, setShowSidebar] = useState<Boolean>(true);
  const router = useRouter();
  const userProfile = false;

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSidebar && (
        <div className="w-20 xl:w-400 flex flex-col justify-start ">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div
                className={router.pathname === "/" ? activeLink : normalLink}
              >
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="capitalize text-xl hidden xl:block">
                  For you
                </span>
              </div>
            </Link>
          </div>
          {!userProfile && (
            <div className="px-2 py-4 hidden xl:block">
              <p className="text-gray-400">
                Log in to like and comment on videos
              </p>
              <div className="pr-4">
                <GoogleLogin
                  clientId=""
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997]"
                    >
                      Login
                    </button>
                  )}
                  onSuccess={() => {}}
                  onFailure={() => {}}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          )}
          <Discover />
          <SuggestedAccounts />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default SideBar;
