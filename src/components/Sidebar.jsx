import React from "react";
import { LuThumbsUp } from "react-icons/lu";
import {
  MdHistory,
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdOutlineWatchLater,
  MdSubscriptions,
} from "react-icons/md";
const Sidebar = () => {
  const topLinks = [
    {
      icon: <MdHomeFilled className="text-xl" />,
      name: "Home",
    },
    {
      icon: <MdOutlineSlowMotionVideo className="text-xl" />,
      name: "Shorts",
    },

    {
      icon: <MdSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];
  const bottomLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdHistory className="text-xl" />,
      name: "History",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <LuThumbsUp className="text-xl" />,
      name: "Liked Videos",
    },
  ];

  return (
    <div className="w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen">
      <ul className="flex flex-col border-b-2 border-gray-700">
        {topLinks.map((link) => {
          return (
            <li
              key={link.key}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                link.name === "Home" ? "bg-zinc-800" : ""
              } rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {link.icon}
                <span className="text-sm tracking-wider">{link.name}</span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* <hr /> */}
      <ul className="flex flex-col border-b-1 border-gray-800">
        {bottomLinks.map((link) => {
          return (
            <li
              key={link.key}
              className={`pl-6 py-3 hover:bg-zinc-600 ${
                link.name === "Home" ? "bg-slate-600" : ""
              } rounded-xl`}
            >
              <a href="#" className="flex items-center gap-5">
                {link.icon}
                <span className="text-sm tracking-wider">{link.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
