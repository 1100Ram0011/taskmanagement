// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// // import { fetchUsers, deleteUser } from "./redux/slice/userSlice"; // ✅ Ensure these actions exist
// import { FaTrash, FaUser } from "react-icons/fa";

// const User = () => {
//   const dispatch = useDispatch();
//   const { users, loading, error } = useSelector((state) => state.user);

//   useEffect(() => {
//     dispatch(fetchUsers()); // ✅ Fetch users from API
//   }, [dispatch]);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Users</h1>

//       {loading && <p>Loading users...</p>}
//       {error && <p className="text-red-500">Error: {error}</p>}

//       <div className="bg-white shadow-md rounded-lg p-4">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Email</th>
//               <th className="border p-2">Role</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="hover:bg-gray-50">
//                 <td className="border p-2">{user.id}</td>
//                 <td className="border p-2 flex items-center gap-2">
//                   <FaUser className="text-blue-500" />
//                   {user.name}
//                 </td>
//                 <td className="border p-2">{user.email}</td>
//                 <td className="border p-2">{user.role}</td>
//                 <td className="border p-2">
//                   <button
//                     onClick={() => dispatch(deleteUser(user.id))}
//                     className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}  
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default User;
import React, { useState, useEffect } from "react";
// import Title from "./Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
// import { getInitials } from "../utils";
import clsx from "clsx";
// import ConfirmatioDialog, { UserAction } from "../components/Dialogs";
import AddUser from "../components/AddUser";

// Dummy Data
const dummyUsers = [
  { id: 1, name: "John Doe", title: "Manager", email: "john@example.com", role: "Admin", isActive: true },
  { id: 2, name: "Alice Smith", title: "Developer", email: "alice@example.com", role: "Editor", isActive: true },
  { id: 3, name: "Bob Johnson", title: "Designer", email: "bob@example.com", role: "Viewer", isActive: false }
];

const Users = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [selected, setSelected] = useState(null);

  // Fetch Users (Dummy Data for Now)
  useEffect(() => {
    setUsers(dummyUsers); // Replace with API call when backend is ready
  }, []);

  const userActionHandler = () => {};
  const deleteHandler = () => {
    setUsers(users.filter(user => user.id !== selected));
    setOpenDialog(false);
  };

  const deleteClick = (id) => {
    setSelected(id);
    setOpenDialog(true);
  };

  const editClick = (el) => {
    setSelected(el);
    setOpen(true);
  };

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
  };

  const TableHeader = () => (
    <thead className='border-b border-gray-300'>
      <tr className='text-black text-left'>
        <th className='py-2'>Full Name</th>
        <th className='py-2'>Title</th>
        <th className='py-2'>Email</th>
        <th className='py-2'>Role</th>
        <th className='py-2'>Active</th>
        <th className='py-2'>Actions</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className='border-b border-gray-200 text-gray-600 hover:bg-gray-400/10'>
      <td className='p-2'>
        <div className='flex items-center gap-3'>
          <div className='w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-blue-700'>
            {/* <span className='text-xs md:text-sm text-center'>{getInitials(user.name)}</span> */}
          </div>
          {user.name}
        </div>
      </td>
      <td className='p-2'>{user.title}</td>
      <td className='p-2'>{user.email || "user.email.com"}</td>
      <td className='p-2'>{user.role}</td>
      <td>
        <button
          className={clsx(
            "w-fit px-4 py-1 rounded-full",
            user?.isActive ? "bg-blue-200" : "bg-yellow-100"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </button>
      </td>
      <td className='p-2 flex gap-4 justify-end'>
        <Button
          className='text-blue-600 hover:text-blue-500 font-semibold sm:px-0'
          label='Edit'
          type='button'
          onClick={() => editClick(user)}
        />
        <Button
          className='text-red-700 hover:text-red-500 font-semibold sm:px-0'
          label='Delete'
          type='button'
          onClick={() => deleteClick(user.id)}
        />
      </td>
    </tr>
  );

  return (
    <>
      <div className='w-full md:px-1 px-0 mb-6'>
        <div className='flex items-center justify-between mb-8'>
          {/* <Title title='Team Members' /> */}
          <Button
            label='Add New User'
            icon={<IoMdAdd className='text-lg' />}
            className='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md 2xl:py-2.5'
            onClick={() => setOpen(true)}
          />
        </div>

        <div className='bg-white px-2 md:px-4 py-4 shadow-md rounded'>
          <div className='overflow-x-auto'>
            <table className='w-full mb-5'>
              <TableHeader />
              <tbody>
                {users.map((user) => (
                  <TableRow key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddUser open={open} setOpen={setOpen} addUser={addUser} />
{/* 
      <ConfirmatioDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={deleteHandler}
      /> */}

      {/* <UserAction open={openAction} setOpen={setOpenAction} onClick={userActionHandler} /> */}
    </>
  );
};

export default Users;
