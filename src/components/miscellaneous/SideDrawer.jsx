// import {
//   Box,
//   Text,
//   Input,
//   Button,
//   useDisclosure,
//   useToast,
//   Menu,
//   MenuButton,
//   MenuDivider,
//   MenuItem,
//   MenuList,
//   Drawer,
//   DrawerBody,
//   DrawerContent,
//   DrawerHeader,
//   DrawerOverlay,
//   Tooltip,
//   Avatar,
//   Spinner,
// } from "@chakra-ui/react";
// import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import ChatLoading from "../ChatLoading";
// import ProfileModal from "./ProfileModal";
// // import NotificationBadge from "react-notification-badge";
// // import { Effect } from "react-notification-badge";
// import { getSender } from "../../config/ChatLogics";
// import UserListItem from "../userAvatar/UserListItem";
// import { ChatState } from "../../Context/ChatProvider";

// function SideDrawer() {
//   const [search, setSearch] = useState("");
//   const [searchResult, setSearchResult] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [loadingChat, setLoadingChat] = useState(false);

//   const {
//     setSelectedChat,
//     user,
//     notification,
//     setNotification,
//     chats,
//     setChats,
//   } = ChatState();

//   const toast = useToast();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const history = useHistory();

//   const logoutHandler = () => {
//     localStorage.removeItem("userInfo");
//     history.push("/");
//   };

//   const handleSearch = async () => {
//     if (!search) {
//       toast({
//         title: "Please Enter something in search",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "top-left",
//       });
//       return;
//     }

//     try {
//       setLoading(true);
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.get(`/api/user?search=${search}`, config);
//       setLoading(false);
//       setSearchResult(data);
//     } catch (error) {
//       toast({
//         title: "Error Occured!",
//         description: "Failed to Load the Search Results",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom-left",
//       });
//     }
//   };

//   const accessChat = async (userId) => {
//     try {
//       setLoadingChat(true);
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.post(`/api/chat`, { userId }, config);
//       if (!chats.find((c) => c._id === data._id)) {
//         setChats([data, ...chats]);
//       }
//       setSelectedChat(data);
//       setLoadingChat(false);
//       onClose();
//     } catch (error) {
//       toast({
//         title: "Error fetching the chat",
//         description: error.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom-left",
//       });
//     }
//   };

//   return (
//     <>
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         alignItems="center"
//         bg="white"
//         w="100%"
//         p="5px 10px"
//         borderWidth="5px"
//       >
//         <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
//           <Button variant="ghost" onClick={onOpen}>
//             <i className="fas fa-search" />
//             <Text display={{ base: "none", md: "flex" }} px={4}>
//               Search User
//             </Text>
//           </Button>
//         </Tooltip>

//         <Text fontSize="2xl" fontFamily="Work sans">
//           Talk-A-Tive
//         </Text>

//         <Box display="flex" alignItems="center" gap={2}>
//           <Menu>
//             <MenuButton p={1}>
//               <NotificationBadge count={notification.length} effect={Effect.SCALE} />
//               <BellIcon fontSize="2xl" m={1} />
//             </MenuButton>
//             <MenuList pl={2}>
//               {!notification.length && "No New Messages"}
//               {notification.map((notif) => (
//                 <MenuItem
//                   key={notif._id}
//                   onClick={() => {
//                     setSelectedChat(notif.chat);
//                     setNotification(notification.filter((n) => n !== notif));
//                   }}
//                 >
//                   {notif.chat.isGroupChat
//                     ? `New Message in ${notif.chat.chatName}`
//                     : `New Message from ${getSender(user, notif.chat.users)}`}
//                 </MenuItem>
//               ))}
//             </MenuList>
//           </Menu>

//           <Menu>
//             <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
//               <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
//             </MenuButton>
//             <MenuList>
//               <ProfileModal user={user}>
//                 <MenuItem>My Profile</MenuItem>
//               </ProfileModal>
//               <MenuDivider />
//               <MenuItem onClick={logoutHandler}>Logout</MenuItem>
//             </MenuList>
//           </Menu>
//         </Box>
//       </Box>

//       <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
//           <DrawerBody>
//             <Box display="flex" pb={2}>
//               <Input
//                 placeholder="Search by name or email"
//                 mr={2}
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//               />
//               <Button onClick={handleSearch}>Go</Button>
//             </Box>
//             {loading ? (
//               <ChatLoading />
//             ) : (
//               searchResult.map((user) => (
//                 <UserListItem
//                   key={user._id}
//                   user={user}
//                   handleFunction={() => accessChat(user._id)}
//                 />
//               ))
//             )}
//             {loadingChat && <Spinner ml="auto" display="flex" />}
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

// export default SideDrawer;
import React, {useState} from "react";
import GroupChatModal from "../GroupChatModal";

const SideDrawer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-between bg-[#b0d2de] p-4 mb-2">
      <h1 className="text-xl flex items-center font-bold">Chat Panel</h1>
      <div className="flex justify-end">
        <button
          className="bg-emerald-600/80 text-white hover:text-blue-800 px-4 py-2 rounded-xl"
          onClick={() => setShowModal(true)}
        >
          + New Group
        </button>
      </div>
      
      {/* ✅ Render GroupChatModal when showModal is true */}
      {showModal && <GroupChatModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default SideDrawer;
