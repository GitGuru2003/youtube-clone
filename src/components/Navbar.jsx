import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiVideoAddLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky ">
      <div className="flex gap-8 items-center text-2xl ">
        <div>
          <GiHamburgerMenu />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaYoutube className="text-2xl text-red-600" />
          <span className="text-2xl ">YouTube</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <form>
          <div>
            <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl">
              <div className="flex gap-5 items-center pr-5">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-96 bg-zinc-900 focus:outline-none border-none"
                />
              </div>
              <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-3xl">
                <AiOutlineSearch className="text-xl " />
              </button>
            </div>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <FaMicrophone />
        </div>
      </div>

      <div className="flex items-center gap-5 text-xl">
        <RiVideoAddLine />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src=" https://www.popsci.com/wp-content/uploads/2021/06/15/lambo.jpeg"
          alt="Profile Photo"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
