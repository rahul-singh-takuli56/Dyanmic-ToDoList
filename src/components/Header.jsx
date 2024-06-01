const Header = () => {
  return (
    <div className=" sticky top-0 z-50 bg-white  flex items-center py-2">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/003/529/153/small/business-to-do-list-flat-icon-modern-style-free-vector.jpg"
        alt="logo"
        className="h-[50px] pl-24 px-2"
      />
      <p className="text-2xl font-bold text-orange-500">ToDoList</p>
      <div className="pl-[200px] ">
        <ul className="flex  items-center  gap-24 text-xl font-semibold">
          <li className="cursor-pointer hover:text-orange-500 hover:font-semibold">
            Home
          </li>
          <li className="cursor-pointer hover:text-orange-500 hover:font-semibold">
            About
          </li>
          <li className="cursor-pointer hover:text-orange-500 hover:font-semibold">
            Contact
          </li>
          <li className="cursor-pointer hover:text-orange-500 hover:font-semibold">
            Login/Register
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
