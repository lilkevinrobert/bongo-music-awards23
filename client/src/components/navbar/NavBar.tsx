import {Dropdown, Navbar} from "flowbite-react";
import {Button, Typography} from "@material-tailwind/react";
import {NavLink} from "react-router-dom";
// import Logo from "/logo.png";

const NavBar = () => {
    return (
        <Navbar fluid className="font-LatoBold">
            <Navbar.Brand href="../">
                <Typography variant="h3" className="self-center whitespace-nowrap font-LatoBold text-base md:text-lg lg:text-xl text-slate-900 dark:text-white">
                    Bongo <span className="text-yellow-300"> Music Awards</span>
                </Typography>
                {/* <img src={Logo} alt="bongo music awards logo" loading="lazy" className="text-xs self-center h-fit" /> */}
            </Navbar.Brand>
            <div className="flex md:order-2">
                <NavLink to="../../login">
                    <Button
                        type="button"
                        size="md"
                        className="font-LatoBold text-gray-950 hover:text-white bg-yellow-300 hover:bg-gray-950 uppercase transition ease-in-out rounded-3xl"
                    >
                        Log in
                    </Button>
                </NavLink>
                <Navbar.Toggle/>
            </div>
            <Navbar.Collapse className="z-20">
                <Navbar.Link>
                    <Dropdown label="Genres & Categories" inline>
                        <Dropdown.Item href="./">Bongo flavor</Dropdown.Item>
                        <Dropdown.Item href="./">R&B</Dropdown.Item>
                        <Dropdown.Item href="./">Taarabu</Dropdown.Item>
                        <Dropdown.Item href="./">Singeli</Dropdown.Item>
                        <Dropdown.Item href="./">Reggae/ Dance Hall </Dropdown.Item>
                        <Dropdown.Item href="./">Upcoming Artist </Dropdown.Item>
                        <Dropdown.Item href="./">Hip Hop & Rap </Dropdown.Item>
                        <Dropdown.Item href="./">Religious Songs</Dropdown.Item>
                        <Dropdown.Item href="./">Dancers Awards</Dropdown.Item>
                        <Dropdown.Item href="./">Best Performer of the year</Dropdown.Item>
                        <Dropdown.Item href="./">Honorary Awards</Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>
                <Navbar.Link>
                    <Dropdown label="Winners" inline>
                        <Dropdown.Item href="./">2022</Dropdown.Item>
                    </Dropdown>
                </Navbar.Link>

                <NavLink to="../../about">
                    <Navbar.Link href="#" className="hover:text-yellow-400">
                        About Us
                    </Navbar.Link>
                </NavLink>

                <NavLink to="../../contact">
                    <Navbar.Link href="#" className="hover:text-yellow-400">
                        Contact Us
                    </Navbar.Link>
                </NavLink>
                <Navbar.Link to="#">Donate</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
