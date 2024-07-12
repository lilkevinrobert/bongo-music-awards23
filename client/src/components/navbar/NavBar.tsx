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
                <Typography className="p-3 lg:p-0 text-base lg:text-sm text-gray-600 hover:text-yellow-300 font-LatoBold transiton ease-linear">
                    <Dropdown label="Genres & Categories" inline>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Bongo flavor</Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">R&B</Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Taarabu</Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Singeli</Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Reggae/ Dance Hall </Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Upcoming Artist </Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Hip Hop & Rap </Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Religious Songs</Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Dancers Awards</Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Best Performer of the year</Dropdown.Item>
                        <Dropdown.Item href="./" className="font-LatoBold text-gray-900">Honorary Awards</Dropdown.Item>
                    </Dropdown>
                </Typography>
                <Typography className="p-3 lg:p-0 text-base lg:text-sm text-gray-600 hover:text-yellow-300 font-LatoBold transiton ease-linear">
                    <Dropdown label="Winners" inline>
                        <Dropdown.Item href="./">2022</Dropdown.Item>
                    </Dropdown>
                </Typography>

                <NavLink to="../../about">
                    <Typography className="p-3 lg:p-0 text-base lg:text-sm text-gray-600 hover:text-yellow-300 font-LatoBold transiton ease-linear">
                        About Us
                    </Typography>
                </NavLink>

                <NavLink to="../../contact">
                    <Typography className="p-3 lg:p-0 text-base lg:text-sm text-gray-600 hover:text-yellow-300 font-LatoBold transiton ease-linear">
                        Contact Us
                    </Typography>
                </NavLink>
                <NavLink to="#" className="p-3 lg:p-0 text-base lg:text-sm text-gray-600 hover:text-yellow-300 font-LatoBold transiton ease-linear">Donate</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
