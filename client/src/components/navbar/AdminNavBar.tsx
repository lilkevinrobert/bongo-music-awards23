import React from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';


const AdminNavBar = () => {
  return (
    <Navbar
    fluid
  >
    <Navbar.Brand href="https://flowbite-react.com">
      {/* <img
        alt="Flowbite React Logo"
        className="mr-3 h-6 sm:h-9"
        src="/favicon.svg"
      /> */}
      <h1 className='text-slate-900'>Bongo <span className='text-yellow-300'>Music </span>Awards</h1>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Flowbite React
      </span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
      >
        <Dropdown.Header>
          <span className="block text-sm">
            Bonnie Green
          </span>
          <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <p>
          Dashboard
        </p>
        <p>
          Settings
        </p>
        <p>
          Earnings
        </p>
        <Dropdown.Divider />
        <p>
          Sign out
        </p>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link
        active
        href="#"
        className='bg-yellow-300'
      >
        <p>
          Home
        </p>
      </Navbar.Link>
      <Navbar.Link href="#">
        About
      </Navbar.Link>
      <Navbar.Link href="#">
        Services
      </Navbar.Link>
      <Navbar.Link href="#">
        Pricing
      </Navbar.Link>
      <Navbar.Link href="#">
        Contact
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default AdminNavBar;