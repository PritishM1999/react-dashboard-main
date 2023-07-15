// import { Route, Routes, NavLink } from "react-router-dom";
// import { useState } from "react";
// import { GiBugleCall } from "react-icons/gi";
// import { CgUserList } from "react-icons/cg";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { FiUsers } from "react-icons/fi";
// import { TbDashboard, TbCoins } from "react-icons/tb";
// import {
//   MdMiscellaneousServices,
//   MdOutlineInventory,
//   MdOutlineAdminPanelSettings,
// } from "react-icons/md";
// import { AnimatePresence, motion } from "framer-motion";
// import SidebarMenu from "./Sidebar/SidebarMenu";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import { Resizable } from "re-resizable";

// const routes = [
//   {
//     path: "/testDashboard",
//     name: "Dashboard",
//     icon: <TbDashboard />,
//   },
//   {
//     path: "/testDashboard/miscellaneous",
//     name: "Miscellaneous",
//     icon: <MdMiscellaneousServices />,
//     subRoutes: [
//       {
//         path: "/testDashboard/miscellaneous/notifications",
//         name: "Notifications",
//       },
//       {
//         path: "/testDashboard/miscellaneous/tasks",
//         name: "Tasks",
//       },
//       {
//         path: "/testDashboard/miscellaneous/blogs",
//         name: "Blogs",
//       },
//     ],
//   },
//   {
//     path: "/sales",
//     name: "Sales",
//     icon: <TbCoins />,
//     subRoutes: [
//       {
//         path: "/testDashboard/sales/pos",
//         name: "POS",
//       },
//       {
//         path: "/testDashboard/Sales/all-orders",
//         name: "All Orders",
//       },
//       {
//         path: "/testDashboard/Sales/subscription-orders",
//         name: "Subscription Orders",
//       },
//       {
//         path: "/testDashboard/Sales/pickup-orders",
//         name: "Pick up Point Orders",
//       },
//       {
//         path: "/testDashboard/Sales/pos-orders",
//         name: "POS Orders",
//       },
//       {
//         path: "/testDashboard/Sales/back-orders",
//         name: "Back Orders",
//       },
//       {
//         path: "/testDashboard/Sales/Invoice-list",
//         name: "Invoice List",
//       },
//     ],
//   },
//   {
//     name: "Product Manager",
//     icon: <MdOutlineInventory />,
//     subRoutes: [
//       {
//         name: "Inventory",
//         subRoutes: [
//           {
//             path: "/testDashboard/ProductManager/Inventory/product-inventory",
//             name: "Product Inventory",
//           },
//           {
//             path: "/testDashboard/ProductManager/Inventory/expiring-soon",
//             name: "Expiring Soon",
//           },
//           {
//             path: "/testDashboard/ProductManager/Inventory/expired-stocks",
//             name: "Expired Stock",
//           },
//           {
//             path: "/testDashboard/ProductManager/Inventory/stockout-products",
//             name: "Stockout Products",
//           },
//           {
//             path: "/testDashboard/ProductManager/Inventory/low-stock",
//             name: "Low Stock",
//           },
//         ],
//       },
//       {
//         name: "Products",
//         subRoutes: [
//           {
//             path: "/testDashboard/ProductManager/Products/add-products",
//             name: "Add Products",
//           },
//           {
//             path: "/testDashboard/ProductManager/Products/list-products",
//             name: "List of Products",
//           },
//           {
//             path: "/testDashboard/ProductManager/Products/categories",
//             name: "Categories",
//           },
//           {
//             path: "/testDashboard/ProductManager/Products/brands",
//             name: "Brands",
//           },
//           {
//             path: "/testDashboard/ProductManager/Products/units",
//             name: "Unit",
//           },
//           {
//             path: "/testDashboard/ProductManager/Products/suppliers-list",
//             name: "Suppliers List",
//           },
//           {
//             path: "/testDashboard/ProductManager/Products/show-reviews",
//             name: "Product Reviews",
//           },
//           {
//             path: "/testDashboard/ProductManager/Products/set-alerts",
//             name: "Set Quantity Alerts",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "People",
//     icon: <FiUsers />,
//     subRoutes: [
//       {
//         name: "General Customers",
//         subRoutes: [
//           {
//             path: "/testDashboard/People/GeneralCustomers/add-customers",
//             name: "Add Customer",
//           },
//           {
//             path: "/testDashboard/People/GeneralCustomers/all-customers",
//             name: "All Customers",
//           },
//           {
//             path: "/testDashboard/People/GeneralCustomers/deleted-customers",
//             name: "Deleted Customers",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Promotions",
//     icon: <GiBugleCall />,
//     exact: true,
//     subRoutes: [
//       {
//         path: "/testDashboard/Marketing-Promotions/product-wishlist",
//         name: "Product Wishlist",
//       },
//       {
//         path: "/testDashboard/Marketing-Promotions/all-subscribers",
//         name: "Subscribers",
//       },
//       {
//         path: "/testDashboard/Marketing-Promotions/periodic-discounts",
//         name: "Discounts",
//       },
//       {
//         path: "/testDashboard/marketing-promotions/coupons",
//         name: "Coupons",
//       },
//       {
//         path: "/testDashboard/Marketing-Promotions/subscription-discount",
//         name: "Subscription Discount",
//       },
//       {
//         name: "Marketing",
//         subRoutes: [
//           {
//             path: "/testDashboard/Marketing-Promotions/Marketing/user-searches",
//             name: "User Searches",
//           },
//           {
//             path: "/testDashboard/Marketing-Promotions/Marketing/fail-orders",
//             name: "Failed Orders",
//           },
//           {
//             path: "/testDashboard/Marketing-Promotions/Marketing/on-cart",
//             name: "On Cart",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Basic Hr",
//     icon: <CgUserList />,
//     subRoutes: [
//       {
//         name: "Employee",
//         subRoutes: [
//           {
//             path: "/testDashboard/Basic-HR/Employees/list-employees",
//             name: "List of Employees",
//           },
//           {
//             path: "/testDashboard/Basic-HR/Employees/add-employees",
//             name: "Add Employee",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Report",
//     icon: <HiOutlineDocumentReport />,
//     subRoutes: [
//       {
//         name: "Sales Report",
//         subRoutes: [
//           {
//             path: "/testDashboard/Report/Sales-Report/all-sales",
//             name: "All Sales",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/user-report",
//             name: "User Report",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/income-report",
//             name: "Income Report",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/pos-report",
//             name: "POS - sales",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/product-wise-report",
//             name: "Product wise sales",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/back-order-report",
//             name: "Back Order Report",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/subscription-report",
//             name: "Subscription Report",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/payment-report",
//             name: "Payment Report",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/Employee-sales-report",
//             name: "Employee Sales Report",
//           },
//           {
//             path: "/testDashboard/Report/Sales-Report/wishlist-report",
//             name: "Wishlist Report",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Administrative",
//     icon: <MdOutlineAdminPanelSettings />,
//     subRoutes: [
//       {
//         name: "Setup",
//         subRoutes: [
//           {
//             path: "/testDashboard/Administrative/Setup/pick-up-point",
//             name: "Pickup Point",
//           },
//           {
//             name: "Shipping",
//             hasSubRoutes: true,
//             subRoutes: [
//               {
//                 path: "/testDashboard/Administrative/Setup/Shipping/shipping-config",
//                 name: "Shipping Configuration",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Settings",
//         subRoutes: [
//           {
//             path: "/testDashboard/Administrative/Settings/roles-permission",
//             name: "Roles & Permission",
//           },
//           {
//             path: "/testDashboard/Administrative/Settings/prefixes",
//             name: "Prefixes",
//           },
//           {
//             name: "Account Settings",
//             hasSubRoutes: true,
//             subRoutes: [
//               {
//                 path: "/testDashboard/Administrative/Settings/account-settings/profile",
//                 name: "Profile",
//               },
//               {
//                 path: "/testDashboard/Administrative/Settings/account-settings/profile/change-profile",
//                 name: "Change Password",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Website Setup",
//         subRoutes: [
//           {
//             path: "/testDashboard/Administrative/Website-Setup/sliders",
//             name: "Sliders",
//           },
//           {
//             path: "/testDashboard/Administrative/Website-Setup/meta",
//             name: "Meta",
//           },
//         ],
//       },
//       {
//         name: "Trash",
//         subRoutes: [
//           {
//             path: "/testDashboard/Administrative/Trash/deleted-orders",
//             name: "Deleted Orders",
//           },
//           {
//             path: "/testDashboard/Administrative/Trash/deleted-products",
//             name: "Deleted Products",
//           },
//           {
//             path: "/testDashboard/Administrative/Trash/deleted-categories",
//             name: "Deleted Categories",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const ResizableSidebar = () => {
//   const [width, setWidth] = useState(260);
//   const [height, setHeight] = useState(window.innerHeight);

//   const handleResize = (event, { size }) => {
//     setWidth(size.width);
//     setHeight(size.height);
//   };

//   const Sidebar = ({ children }) => {
//     const [isOpen, setIsOpen] = useState(true);

//     const toggle = () => {
//       setIsOpen(!isOpen);
//       document.body.classList.toggle("sidebar-closed");
//     };

//     return (
//       <motion.div
//         initial={false}
//         animate={{ width: isOpen ? 260 : 80 }}
//         className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}
//       >
//         <button className="sidebar-toggle" onClick={toggle}>
//           <HiOutlineBars3 />
//         </button>
//         <SidebarMenu />
//         {children}
//       </motion.div>
//     );
//   };

//   return (
//     <Resizable
//       width={width}
//       height={height}
//       onResize={handleResize}
//       className="resizable-sidebar"
//     >
//       <Sidebar>
//         <AnimatePresence exitBeforeEnter>
//           <Routes>
//             {routes.map((route, index) => (
//               <Route
//                 key={index}
//                 path={route.path}
//                 element={
//                   <NavLink to={route.path} className="menu-link">
//                     <div className="icon">{route.icon}</div>
//                     <div className="link_text">{route.name}</div>
//                   </NavLink>
//                 }
//               />
//             ))}
//           </Routes>
//         </AnimatePresence>
//       </Sidebar>
//     </Resizable>
//   );
// };

// export default ResizableSidebar;
