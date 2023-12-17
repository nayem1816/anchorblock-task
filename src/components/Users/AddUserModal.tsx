import React from "react";

const AddUserModal = ({
  showAddUser,
  setShowAddUser,
}: {
  showAddUser: boolean;
  setShowAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={showAddUser ? "block" : "hidden"}>
      <div className="font-sans antialiased fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex  sm:justify-center h-[500px] items-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-transparent opacity-75 backdrop-blur-[1px]"></div>
        </div>

        <div
          x-show="open"
          x-transition:enter="ease-out duration-300"
          x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
          x-transition:leave="ease-in duration-200"
          x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
          x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <div className="p-5">
            <div className="header flex justify-between items-center">
              <h2 className="text-lg font-semibold">Add User</h2>
              <div className="">
                <button
                  onClick={() => setShowAddUser(false)}
                  className="bg-gray-50 rounded-full">
                  <span className="text-2xl" aria-hidden="true">
                    &times;
                  </span>
                </button>
              </div>
            </div>
            <div className="body mt-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}>
                <div className="grid grid-cols-1 gap-4">
                  <div className="">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter first name"
                      id="firstName"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter last name"
                      id="lastName"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="submit flex justify-end">
                  <button
                    type="submit"
                    className="bg-purple-600 text-white rounded-md px-3 py-2 mt-4">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
