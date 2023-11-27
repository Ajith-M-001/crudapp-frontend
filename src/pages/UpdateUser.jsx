import { useEffect, useState } from "react";
import { getSinlgeUser, updateUser } from "../services/handleApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    district: "",
    state: "",
  });

  useEffect(() => {
    const loadSingleUserData = async () => {
      try {
        const response = await getSinlgeUser(id);
        setFormData(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    loadSingleUserData();
  }, [id]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUser(id, formData);
      toast.success(response.message);
      setFormData({
        name: "",
        email: "",
        district: "",
        state: "",
      });
      setTimeout(() => {
        navigate("/all");
      }, 6000);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-4">Update User</h1>
      <ToastContainer position="bottom-left" />
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
            required
            value={formData.name}
          />
        </div>
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">Email</label>
          <input
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            type="text"
            name="email"
            required
            value={formData.email}
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
            required
            value={formData.district}
          />
        </div>
        <div className="my-2">
          <label className="text-gray-500 text-lg font-semibold">state</label>
          <input
            onChange={handleChange}
            className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
            type="text"
            name="state"
            required
            value={formData.state}
          />
        </div>
        <button className="bg-gray-700 w-full px-4 py-2 text-white text-lg font-semibold rounded-md hover:bg-gray-800">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
