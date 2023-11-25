import { useState } from "react";

const Adduser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    district: "",
    state: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-4">Add User</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto border p-5 rounded-md"
      >
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">Name</label>
          <input
            onChange={handleChange}
            type="text"
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            name="name"
          />
        </div>
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">Email</label>
          <input
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            type="text"
            name="email"
          />
        </div>
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">
            District
          </label>
          <input
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            type="text"
            name="district"
          />
        </div>
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">state</label>
          <input
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            type="text"
            name="state"
          />
        </div>
        <button className="bg-gray-700 w-full px-4 py-2 text-white text-lg font-semibold rounded-md hover:bg-gray-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Adduser;
