import { useEffect, useState } from "react";
import { getSinlgeUser } from "../services/handleApi";
import { Oval } from "react-loader-spinner";
import { useParams } from "react-router-dom";
const SingleUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const loadSingleUserData = async () => {
      try {
        const response = await getSinlgeUser(id);
        setUsers(response);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    loadSingleUserData();
  }, [id]);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold my-3">Single User</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Oval
            height={80}
            width={80}
            color="#000000"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#808080"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          <table className="table table-auto w-full">
            <thead>
              <tr className="bg-gray-300 text-center ">
                <th className="px-4 py-2 border">slno</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">District</th>
                <th className="px-4 py-2 border">state</th>
              </tr>
            </thead>
            <tbody>
              <tr key={users._id} className="text-lg text-center">
                <td className="px-4 py-2 border">{1}</td>
                <td className="px-4 py-2 border">{users.name}</td>
                <td className="px-4 py-2 border">{users.email}</td>
                <td className="px-4 py-2 border">{users.district}</td>
                <td className="px-4 py-2 border">{users.state}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SingleUser;
