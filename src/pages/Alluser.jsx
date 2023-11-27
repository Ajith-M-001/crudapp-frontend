import { IoMdEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Alluser = () => {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold my-3">All User</h1>
      <table className="table table-auto w-full">
        <thead>
          <tr className="bg-gray-300 text-center ">
            <th className="px-4 py-2 border">slno</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">District</th>
            <th className="px-4 py-2 border">state</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-lg text-center">
            <td className="px-4 py-2 border">1</td>
            <td className="px-4 py-2 border">ajith</td>
            <td className="px-4 py-2 border">ajith@gmail.com</td>
            <td className="px-4 py-2 border">bangalore</td>
            <td className="px-4 py-2 border">karnatka</td>
            <td className="px-4 py-2 border">
              <div className=" text-3xl space-x-4 flex justify-center items-center">
                <button>
                  <IoMdEye className="text-blue-700" />
                </button>
                <button>
                  <MdEdit className="text-green-700" />
                </button>
                <button>
                  <MdDelete className="text-red-700" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;
