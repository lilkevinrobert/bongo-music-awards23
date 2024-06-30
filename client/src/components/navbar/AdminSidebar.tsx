import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { HiOutlineTicket } from "react-icons/hi2";
import {
  LuUsers2,
  LuAward,
  LuBox,
  LuMessageSquare,
  LuLogOut,
  LuMusic2,
} from "react-icons/lu";
import { MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const showSubMenuHandler = () => setShowSubMenu(!showSubMenu);
  return (
    <div className="w-auto lg:w-80 bg-transparent hidden lg:flex flex-col items-center justify-normal">
      <nav  
        id="sidenav-8"
        className="fixed left-0 top-0 z-[1035] bg-transparent h-full w-64 shadow-md data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
        data-te-sidenav-init
        data-te-sidenav-hidden="true"
        data-te-sidenav-position="absolute"
        data-te-sidenav-accordion="true"
      >
        <NavLink
          className="mb-3 flex items-center justify-start ml-6 border-b-2 border-solid border-gray-100 py-6 outline-none"
          to="/admin/dashboard"
          data-te-ripple-init
          data-te-ripple-color="primary"
        >
          <Typography
            id="te-logo"
            draggable="false"
            className="text-slate-900 capitalize flex items-center justify-center gap-1"
          >
            <LuMusic2 />
            bongo <span className="text-yellow-400">music awards</span>
          </Typography>
        </NavLink>
        <ul
          className="relative m-0 list-none px-[0.2rem] pb-12"
          data-te-sidenav-menu-ref
        >
          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-yellow-400 hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <MdOutlineHome className="text-lg text-gray-600 mr-2" />
              <NavLink
                to="../dashboard"
                className="hover:text-yellow-400 font-LatoBold"
              >
                Dashboard
              </NavLink>
            </a>
          </li>
          <li className="relative pt-4">
            <span className="px-6 py-4 text-[0.65rem] font-bold uppercase text-gray-600 dark:text-gray-400">
              Manage
            </span>
          </li>

          <li className="relative">
            <a
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear  active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
              onClick={showSubMenuHandler}
            >
              <LuUsers2 className="text-lg text-gray-600 mr-2" />
              <span
                className="font-LatoBold group-[&[data-te-sidenav-slim-collapsed='true']]:data-[te-sidenav-slim='false']:hidden"
                data-te-sidenav-slim="false"
              >
                Users{" "}
              </span>
              <span
                className={`absolute right-0 ml-auto mr-[0.5rem] ${
                  showSubMenu ? "rotate-180" : ""
                } transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300`}
                data-te-sidenav-rotate-icon-ref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <ul
              className={`!visible relative m-0 ${
                showSubMenu ? "data-[te-collapse-show]:block" : "hidden"
              } list-none p-0`}
              data-te-sidenav-collapse-ref
            >
              <li className="relative">
                <NavLink
                  to="../artists"
                  className="font-LatoRegular flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-yellow-400 group hover:text-white hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                >
                  Artists
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="../judges"
                  className="font-LatoRegular flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-yellow-400 group hover:text-white hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                >
                  Judges
                </NavLink>
              </li>

              <li className="relative">
                <NavLink
                  to="../nominators"
                  className="font-LatoRegular flex h-6 cursor-pointer items-center truncate rounded-[5px] py-4 pl-[3.4rem] pr-6 text-[0.78rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-yellow-400 group hover:text-white hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                >
                  Nominators
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Awards */}
          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-yellow-400 hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <LuAward className="text-lg text-gray-600 mr-2" />
              <NavLink
                to="../awards"
                className="hover:text-yellow-400 capitalize font-LatoBold"
              >
                awards
              </NavLink>
            </a>
          </li>

          {/*Voting*/}
          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-yellow-400 hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <LuBox className="text-lg text-gray-600 mr-2" />
              <NavLink
                to="#"
                className="hover:text-yellow-400 capitalize font-LatoBold"
              >
                voting
              </NavLink>
            </a>
          </li>

          {/* Admin */}
          <li className="relative pt-4">
            <span className="px-6 py-4 text-[0.6rem] font-bold uppercase text-gray-600 dark:text-gray-400">
              Admin
            </span>

            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-yellow-400 hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <HiOutlineTicket className="text-lg text-gray-600 mr-2" />
              <NavLink
                to="#"
                className="hover:text-yellow-400 capitalize font-LatoBold"
              >
                ticket
              </NavLink>
            </a>
          </li>

          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-yellow-400 hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <LuMessageSquare className="text-lg text-gray-600 mr-2" />
              <NavLink
                to="#"
                className="hover:text-yellow-400 uppercase font-LatoBold"
              >
                sms
              </NavLink>
            </a>
          </li>

          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] px-6 py-[0.45rem] text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-yellow-400 hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <LuLogOut className="text-lg text-gray-600 mr-2" />
              <NavLink to="../../login" className="font-LatoBold">
                Logout
              </NavLink>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
