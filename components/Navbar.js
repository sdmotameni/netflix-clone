import { useRouter } from "next/router";

import navBarItems from "../utils/navbarItems";

export default function Navbar({ currentPage }) {
  const router = useRouter();

  return (
    <>
      {/* Mobile Nav */}
      <nav className="absolute z-10 justify-between w-full py-4 lg:hidden">
        {/* Fade Gradient */}
        {/* <div className="z-10 absolute w-screen h-5 bg-gradient-to-b from-[#141414]" /> */}
        <div className="z-20 flex items-center justify-between w-full px-5">
          <img
            className="object-contain w-14 h-14"
            src="/netflix-logo-mobile.svg"
            alt=""
          />
          {/*          <ul className="flex items-center space-x-8 text-lg font-light text-white">
            <img
              className="object-contain w-14 h-14"
              src="/netflix-logo-mobile.svg"
              alt=""
            />
            {Object.keys(navBarItems).map((key) => (
              <li
                className={
                  "cursor-pointer " + (currentPage === key && " font-extrabold")
                }
                key={key}
                onClick={() => router.push(navBarItems[key].path)}
              >
                {navBarItems[key].title}
              </li>
            ))}
          </ul> */}
          <div className="text-white">
            <p>Account Details</p>
          </div>
        </div>
      </nav>
      {/* Desktop Navg */}
      <nav className="absolute z-10 justify-between hidden w-full lg:flex">
        {/* Fade Gradient */}
        <div className="z-10 absolute w-screen h-20 bg-gradient-to-b from-[#141414]" />
        <div className="z-20 flex items-center justify-between w-full px-20">
          <ul className="flex items-center space-x-8 text-lg font-light text-white">
            <img
              className="object-contain w-32 h-20"
              src="/netflix-logo.svg"
              alt=""
            />
            {Object.keys(navBarItems).map((key) => (
              <li
                className={
                  "cursor-pointer " + (currentPage === key && " font-extrabold")
                }
                key={key}
                onClick={() => router.push(navBarItems[key].path)}
              >
                {navBarItems[key].title}
              </li>
            ))}
          </ul>
          <div className="text-white">
            <p>Account Details</p>
          </div>
        </div>
      </nav>
    </>
  );
}
