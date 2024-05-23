// import React, { useState } from "react";
// import {
//   FaChartBar,
//   FaInbox,
//   FaUser,
//   FaCalendarAlt,
//   FaSearch,
//   FaChartLine,
//   FaFolder,
//   FaCog,
// } from "react-icons/fa";
// import { TfiArrowCircleLeft } from "react-icons/tfi";

// const SidebarReal = () => {
//   const [open, setOpen] = useState(true);
//   const [activeMenu, setActiveMenu] = useState("Dashboard");

//   const handleMenuClick = (menu) => {
//     setActiveMenu(menu);
//   };

//   return (
//     <div className="flex">
//       <div
//         className={`${
//           open ? "w-62" : "w-20"
//         } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
//       >
//         <div
//           className={`absolute cursor-pointer -right-3 top-9 w-7
//             border-2 rounded-full ${!open && "rotate-180"}`}
//           onClick={() => setOpen(!open)}
//         >
//           <TfiArrowCircleLeft className="w-full h-full bg-slate-100" />
//         </div>
//         <div className="flex gap-x-4 items-center">
//           <img
//             src="./src/assets/react.svg"
//             className={`cursor-pointer duration-500 ${
//               open && "rotate-[360deg]"
//             }`}
//           />
//           <h1
//             className={`text-white origin-left font-medium text-xl duration-200 ${
//               !open && "scale-0"
//             }`}
//           >
//             Percetakan Aliza
//           </h1>
//         </div>
//         <ul className="pt-6">
//           <li
//             className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 mt-2 ${
//               activeMenu === "Dashboard"
//                 ? "bg-light-white"
//                 : "hover:bg-light-white"
//             }`}
//             onClick={() => handleMenuClick("Dashboard")}
//           >
//             <FaChartBar />
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               Dashboard
//             </span>
//           </li>
//           <li
//             className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 mt-9 ${
//               activeMenu === "Inbox" ? "bg-light-white" : "hover:bg-light-white"
//             }`}
//             onClick={() => handleMenuClick("Inbox")}
//           >
//             <FaInbox />
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               Data Pemesanan
//             </span>
//           </li>
//           <li
//             className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 mt-9 ${
//               activeMenu === "Accounts"
//                 ? "bg-light-white"
//                 : "hover:bg-light-white"
//             }`}
//             onClick={() => handleMenuClick("Accounts")}
//           >
//             <FaUser />
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               Data Masuk Barang Produksi
//             </span>
//           </li>
//           <li
//             className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 mt-2 ${
//               activeMenu === "Schedule"
//                 ? "bg-light-white"
//                 : "hover:bg-light-white"
//             }`}
//             onClick={() => handleMenuClick("Schedule")}
//           >
//             <FaCalendarAlt />
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               Data Keluar Barang Produksi
//             </span>
//           </li>
//           <li
//             className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 mt-2 ${
//               activeMenu === "Search"
//                 ? "bg-light-white"
//                 : "hover:bg-light-white"
//             }`}
//             onClick={() => handleMenuClick("Search")}
//           >
//             <FaSearch />
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               Proses Produksi
//             </span>
//           </li>

//           <li
//             className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 mt-9 ${
//               activeMenu === "Files" ? "bg-light-white" : "hover:bg-light-white"
//             }`}
//             onClick={() => handleMenuClick("Files")}
//           >
//             <FaFolder />
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               Profil
//             </span>
//           </li>
//           <li
//             className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 mt-2 ${
//               activeMenu === "Setting"
//                 ? "bg-light-white"
//                 : "hover:bg-light-white"
//             }`}
//             onClick={() => handleMenuClick("Setting")}
//           >
//             <FaCog />
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               Logout
//             </span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SidebarReal;
