import React from "react";
import { Button, Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid className="font-montserratRegular">
      <Navbar.Brand href="../">
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <h3 className="self-center whitespace-nowrap text-xl text-slate-900 font-semibold dark:text-white">
          Bongo <span className="text-yellow-300"> Music </span>Awards
        </h3>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-yellow-300 rounded-lg">Login</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
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
