import { RiDeleteBinLine } from "react-icons/ri";
import { LuPen } from "react-icons/lu";
import { useGetAllUsersQuery } from "../../redux/features/users/userSlice";
import { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import DeleteModal from "../../components/Users/DeleteModal";
import AddUserModal from "../../components/Users/AddUserModal";
import { FaMinus } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const Users = () => {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [userId, setUserId] = useState(0);
  const [allChecked, setAllChecked] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState<any[]>([]);

  const { data, isLoading, isSuccess } = useGetAllUsersQuery<any>(
    {
      page: page,
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  if (isLoading || !isSuccess) {
    return <h2>Loading...</h2>;
  }

  const handleAllChecked = () => {
    if (allChecked) {
      setAllChecked(false);
      setCheckedUsers([]);
    } else {
      setAllChecked(true);
      setCheckedUsers(data?.data?.map((user: any) => user.id));
    }
  };

  const handleCheckMark = (id: number) => {
    if (checkedUsers.includes(id)) {
      setCheckedUsers(checkedUsers.filter((user) => user !== id));

      if (checkedUsers.length === 1) {
        setAllChecked(false);
      }
    } else {
      setCheckedUsers([...checkedUsers, id]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between mt-10 mb-6 items-center">
        <h2 className="text-2xl font-semiBold">Users</h2>
        <div className="buttons flex items-center gap-4">
          <button className="text-gray-700 border border-gray-700 rounded-lg px-4 py-1 flex justify-center items-center gap-2">
            <LuUploadCloud />
            Import
          </button>
          <button
            onClick={() => {
              setShowAddUser(true);
            }}
            className="bg-[#6941C6] text-white rounded-lg px-4 py-1 flex justify-center items-center gap-2">
            <FiPlus />
            Add User
          </button>
        </div>
      </div>
      <div className="mb-5">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed">
                    <thead className="bg-gray-100">
                      <tr className="w-full">
                        <th scope="" className="p-4 w-[5%]">
                          <div className="flex items-center">
                            <div
                              onClick={() => handleAllChecked()}
                              className="w-5 h-5 rounded-md bg-[#F9FAFB] border-2 border-[#7F56D9] flex justify-center items-center select-none">
                              {allChecked ? (
                                <FaMinus className="text-[#7F56D9] text-xs" />
                              ) : null}
                            </div>
                          </div>
                        </th>
                        <th
                          scope=""
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-500 w-[35%]">
                          User Info
                        </th>
                        <th
                          scope=""
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-500 w-[35%]">
                          About
                        </th>
                        <th
                          scope=""
                          className="py-3 px-6 text-sm font-medium tracking-wider text-left text-gray-500 w-[15%]">
                          Status
                        </th>
                        <th scope="" className="p-4 w-[10%]">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                      {data?.data?.map((user: any, i: number) => (
                        <tr key={i} className="">
                          <td className="p-4 w-[5%]">
                            <div className="flex items-center">
                              <div
                                onClick={() => handleCheckMark(user.id)}
                                className="w-5 h-5 rounded-md bg-[#F9FAFB] border-2 border-[#7F56D9] flex justify-center items-center select-none">
                                {checkedUsers.includes(user.id) ? (
                                  <IoMdCheckmark className="text-[#7F56D9] text-lg" />
                                ) : null}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap w-[35%]">
                            <div className="flex items-center gap-2">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={user?.avatar}
                                alt="profile"
                              />
                              <div className="text-gray-500">
                                <h2 className="text-gray-900 font-semiBold">
                                  {user?.first_name + " " + user?.last_name}
                                </h2>
                                <p className="text-xs font-normal">
                                  {user?.email}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-500 w-[35%]">
                            <p className="text-gray-900 font-normal">
                              Lorem ipsum dolor sit amet.
                            </p>
                            <p className="text-xs font-normal">
                              Lorem ipsum dolor sit amet consectetur
                            </p>
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap w-[15%]">
                            <span className="px-2 inline-flex text-xs leading-5 font-normal rounded-full bg-green-100 text-green-800">
                              Random sticker level
                            </span>
                          </td>
                          <td className="">
                            <div className="flex gap-5 justify-center">
                              <RiDeleteBinLine
                                onClick={() => {
                                  setShow(true);
                                  setUserId(user?.id);
                                }}
                                className="text-gray-600 cursor-pointer text-lg"
                              />
                              <LuPen
                                onClick={() => {
                                  setShowAddUser(true);
                                }}
                                className="text-gray-600 cursor-pointer text-lg"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan={5}
                          className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap w-[35%]">
                          <div className="flex items-center gap-2 justify-between">
                            <button
                              onClick={() => {
                                if (page > 1) {
                                  setPage(page - 1);
                                }
                              }}
                              className={`font-normal border border-gray-200 px-3 py-1 rounded-lg ${
                                page === 1 && "opacity-50 cursor-not-allowed"
                              }`}>
                              Previous
                            </button>
                            <h2 className="font-normal">
                              page {data?.page} of {data?.total_pages}
                            </h2>
                            <button
                              onClick={() => {
                                if (page < data?.total_pages) {
                                  setPage(page + 1);
                                }
                              }}
                              className={`font-normal border border-gray-200 px-3 py-1 rounded-lg ${
                                page === data?.total_pages &&
                                "opacity-50 cursor-not-allowed"
                              }`}>
                              Next
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal show={show} setShow={setShow} userId={userId} />
      <AddUserModal showAddUser={showAddUser} setShowAddUser={setShowAddUser} />
    </div>
  );
};

export default Users;
