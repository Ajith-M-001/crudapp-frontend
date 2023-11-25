const Adduser = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-4">Add User</h1>
      <form className="max-w-lg mx-auto border p-5 rounded-md">
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">Name</label>
          <input
            type="text"
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
          />
        </div>
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">Email</label>
          <input
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            type="text"
          />
        </div>
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">
            District
          </label>
          <input
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            type="text"
          />
        </div>
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">state</label>
          <input
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            type="text"
          />
        </div>
        <button className="bg-gray-700 w-full px-4 py-2 text-white text-lg font-semibold rounded-md hover:bg-gray-800">Submit</button>
      </form>
    </div>
  );
};

export default Adduser;
