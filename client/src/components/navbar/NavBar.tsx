import React from "react";
import { Button, Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid className="font-LatoBold">
      <Navbar.Brand href="../">
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <h3 className="self-center whitespace-nowrap text-xl text-slate-900 dark:text-white">
          Bongo <span className="text-yellow-400"> Music Awards</span>
        </h3>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button type="button" className="bg-yellow-400 hover:bg-slate-900 rounded-3xl">Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#" className="bg-yellow-400">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Events</Navbar.Link>
        <Navbar.Link href="#">Nominees</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
