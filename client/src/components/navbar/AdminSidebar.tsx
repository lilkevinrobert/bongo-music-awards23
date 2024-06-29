import TextLogo from "../Logo/TextLogo";

const AdminSidebar = () => {
  return (
    <div className="w-auto lg:w-2/12 bg-red-500 hidden lg:flex flex-col items-center justify-normal">
      <div className="hidden lg:block w-full h-full bg-white">
        <div className="mt-1 bg-red-500">
          <TextLogo textSize="text-base" />
        </div>
        <div>
          <a href="#" className="capitalize text-black">dashboard</a>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
