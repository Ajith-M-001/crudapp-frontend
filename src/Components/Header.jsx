const Header = () => {
  return (
    <div className="bg-gray-700 text-gray-300 px-6 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">CRUD-APP</h1>
        <nav className="space-x-6 text-2xl font-semibold">
          <a className="hover:text-white" href="#">
            add User
          </a>
          <a className="hover:text-white" href="#">
            all User
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
