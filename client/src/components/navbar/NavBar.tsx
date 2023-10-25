import { Navbar } from "flowbite-react";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar fluid className="font-LatoBold">
      <Navbar.Brand href="../">
        <h3 className="self-center whitespace-nowrap text-xl text-slate-900 dark:text-white">
          Bongo <span className="text-yellow-400"> Music Awards</span>
        </h3>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <NavLink to="../../login">
        <Button
          type="button"
          className="bg-yellow-400 hover:bg-slate-900 transition ease-in-out rounded-3xl"
        >
          Login
        </Button>
        </NavLink>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="./" className="text-yellow-400">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="./about" className="hover:text-yellow-400">
          About
        </Navbar.Link>
        {/* <Navbar.Link href="#">Events</Navbar.Link>
        <Navbar.Link href="#">Nominees</Navbar.Link> */}
        <Navbar.Link href="./contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
