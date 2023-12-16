import { RiDeleteBinLine } from "react-icons/ri";
import { LuPen } from "react-icons/lu";

const Users = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2>Users</h2>
      <div className="">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 table-fixed w-[900px]">
                    <thead className="bg-gray-100">
                      <tr className="w-full">
                        <th scope="" className="p-4 w-[5%]">
                          <div className="flex items-center">
                            <input
                              id="checkbox-all"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label htmlFor="checkbox-all" className="sr-only">
                              checkbox
                            </label>
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
                      <tr className="">
                        <td className="p-4 w-[5%]">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="checkbox-table-1"
                              className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap w-[35%]">
                          <div className="flex items-center gap-2">
                            <img
                              className="w-10 h-10 rounded-full"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajVijyoJgMl3Gpyve3xw1osi4bljAFkRVaQ&usqp=CAU"
                              alt="profile"
                            />
                            <div className="text-gray-500">
                              <h2 className="text-gray-900 font-semiBold">
                                Md Nayem Hossain
                              </h2>
                              <p className="text-xs font-normal">
                                nayemhossainmd1@gmail.com
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
                            <RiDeleteBinLine className="text-gray-600 cursor-pointer text-lg" />
                            <LuPen className="text-gray-600 cursor-pointer text-lg" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td
                          colSpan={5}
                          className="py-4 px-4 text-sm font-medium text-gray-900 whitespace-nowrap w-[35%]">
                          <div className="flex items-center gap-2 justify-between">
                            <button className="font-normal border border-gray-200 px-3 py-1 rounded-lg">
                              Previous
                            </button>
                            <h2 className="font-normal">page 1 of 10</h2>
                            <button className="font-normal border border-gray-200 px-3 py-1 rounded-lg">
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
    </div>
  );
};

export default Users;
