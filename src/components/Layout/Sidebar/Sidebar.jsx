import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { GiBugleCall } from "react-icons/gi";
import { CgUserList } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { HiOutlineBars3 } from "react-icons/hi2";
import { TbDashboard, TbCoins } from "react-icons/tb";
import {
  MdMiscellaneousServices,
  MdOutlineInventory,
  MdOutlineAdminPanelSettings,
} from "react-icons/md";
import { FiUsers } from "react-icons/fi";

const routes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <TbDashboard />,
  },
  {
    path: "/admin/miscellaneous",
    name: "Miscellaneous",
    icon: <MdMiscellaneousServices />,
    subRoutes: [
      {
        path: "/admin/miscellaneous/notifications",
        name: "Notifications",
      },
      {
        path: "/admin/miscellaneous/tasks",
        name: "Tasks",
      },
      {
        path: "/admin/miscellaneous/blogs",
        name: "Blogs",
      },
    ],
  },

  {
    path: "/sales",
    name: "Sales",
    icon: <TbCoins />,
    subRoutes: [
      {
        path: "/admin/sales/pos",
        name: "POS",
      },
      {
        // path: "/admin/miscellaneous/sales",
        name: "Sales",
        subRoutes: [
          {
            path: "/admin/Sales/all-orders",
            name: "All Orders",
          },
          {
            path: "/admin/Sales/subscription-orders",
            name: "Subscription Orders",
          },
          {
            path: "/admin/Sales/pos-orders",
            name: "POS Orders",
          },

          {
            path: "/admin/Sales/pickup-orders",
            name: "Pick up Point Orders",
          },
          {
            path: "/admin/Sales/back-orders",
            name: "Back Orders",
          },
          {
            path: "/admin/Sales/Invoice-list",
            name: "Invoice List",
          },
        ],
      },
    ],
  },

  {
    name: "Product Manager",
    icon: <MdOutlineInventory />,
    subRoutes: [
      {
        name: "Inventory",
        subRoutes: [
          {
            path: "/admin/ProductManager/Inventory/product-inventory",
            name: "Product Inventory",
          },
          {
            path: "/admin/ProductManager/Inventory/expiring-soon",
            name: "Expiring Soon",
          },
          {
            path: "/admin/ProductManager/Inventory/expired-stocks",
            name: "Expired Stock",
          },
          {
            path: "/admin/ProductManager/Inventory/stockout-products",
            name: "Stockout Products",
          },

          {
            path: "/admin/ProductManager/Inventory/low-stock",
            name: "Low Stock",
          },
        ],
      },

      {
        // path: "/product-manager/products",
        name: "Products",
        subRoutes: [
          {
            path: "/admin/ProductManager/Products/add-products",
            name: "Add Products",
          },
          {
            path: "/admin/ProductManager/Products/list-products",
            name: "List of Products",
          },
          {
            path: "/admin/ProductManager/Products/categories",
            name: "Categories",
          },

          {
            path: "/admin/ProductManager/Products/brands",
            name: "Brands",
          },
          {
            path: "/admin/ProductManager/Products/units",
            name: "Unit",
          },
          {
            path: "/admin/ProductManager/Products/suppliers-list",
            name: "Suppliers List",
          },
          {
            path: "/admin/ProductManager/Products/show-reviews",
            name: "Product Reviews",
          },
          {
            path: "/admin/ProductManager/Products/set-alerts",
            name: "Set Quantity Alerts",
          },
        ],
      },
    ],
  },

  {
    // path: "/people",
    name: "People",
    icon: <FiUsers />,
    subRoutes: [
      {
        // path: "/people/general-customers",
        name: "General Customers",
        subRoutes: [
          {
            path: "/admin/People/GeneralCustomers/add-customers",
            name: "Add Customer",
          },
          {
            path: "/admin/People/GeneralCustomers/all-customers",
            name: "All Customers",
          },
          {
            path: "/admin/People/GeneralCustomers/deleted-customers",
            name: "Deleted Customers",
          },
        ],
      },
    ],
  },
  {
    // path: "/marketing-promotions",
    name: "Promotions",
    icon: <GiBugleCall />,
    exact: true,
    subRoutes: [
      {
        path: "/admin/Marketing-Promotions/product-wishlist",
        name: "Product Wishlist",
      },

      {
        path: "/admin/Marketing-Promotions/all-subscribers",
        name: "Subscribers",
      },

      {
        path: "/admin/Marketing-Promotions/periodic-discounts",
        name: "Discounts",
      },

      {
        path: "/admin/marketing-promotions/coupons",
        name: "Coupons",
      },

      {
        path: "/admin/Marketing-Promotions/subscription-discount",
        name: "Subscription Discount",
      },

      {
        name: "Marketing",
        subRoutes: [
          {
            path: "/admin/Marketing-Promotions/Marketing/user-searches",
            name: "User Searches",
          },
          {
            path: "/admin/Marketing-Promotions/Marketing/fail-orders",
            name: "Failed Orders",
          },
          {
            path: "/admin/Marketing-Promotions/Marketing/on-cart",
            name: "On Cart",
          },
        ],
      },
    ],
  },
  {
    // path: "/basic-hr",
    name: "Basic Hr",
    icon: <CgUserList />,
    subRoutes: [
      {
        // path: "/basic-hr/employee",
        name: "Employee",
        subRoutes: [
          {
            path: "/admin/Basic-HR/Employees/list-employees",
            name: "List of Employees",
          },
          {
            path: "/admin/Basic-HR/Employees/add-employees",
            name: "Add Employee",
          },
        ],
      },
    ],
  },
  {
    // path: "/basic-hr",
    name: "Reoprt",
    icon: <HiOutlineDocumentReport />,
    subRoutes: [
      {
        // path: "/basic-hr/employee",
        name: "Sales Report",
        subRoutes: [
          {
            path: "/admin/Report/Sales-Report/all-sales",
            name: "All Sales",
          },
          {
            path: "/admin/Report/Sales-Report/user-report",
            name: "User Report",
          },
          {
            path: "/admin/Report/Sales-Report/income-report",
            name: "Income Report",
          },
          {
            path: "/admin/Report/Sales-Report/pos-report",
            name: "POS - sales",
          },
          {
            path: "/admin/Report/Sales-Report/product-wise-report",
            name: "Product wise sales",
          },
          {
            path: "/admin/Report/Sales-Report/back-order-report",
            name: "Back Order Report",
          },
          {
            path: "/admin/Report/Sales-Report/subscription-report",
            name: "Subscription Report",
          },
          {
            path: "/admin/Report/Sales-Report/payment-report",
            name: "Payment Report",
          },
          {
            path: "/admin/Report/Sales-Report/Employee-sales-report",
            name: "Employee Sales Report",
          },
          {
            path: "/admin/Report/Sales-Report/wishlist-report",
            name: "Wishlist Report",
          },
        ],
      },
    ],
  },
  {
    name: "Administrative",
    icon: <MdOutlineAdminPanelSettings />,
    subRoutes: [
      {
        name: "Setup",
        subRoutes: [
          {
            path: "/admin/Administrative/Setup/pick-up-point",
            name: "Pickup Point",
          },
          {
            name: "Shipping",
            hasSubRoutes: true,
            subRoutes: [
              {
                path: "/admin/Administrative/Setup/Shipping/shipping-config",
                name: "Shipping Configuration",
              },
            ],
          },
        ],
      },
      {
        name: "Settings",
        subRoutes: [
          {
            path: "/admin/Administrative/Settings/roles-permission",
            name: "Roles & Permission",
          },
          {
            path: "/admin/Administrative/Settings/prefixes",
            name: "Prefixes",
          },
          {
            name: "Account Settings",
            hasSubRoutes: true,
            subRoutes: [
              {
                path: "/admin/Administrative/Settings/account-settings/profile",
                name: "Profile",
              },
              {
                path: "/admin/Administrative/Settings/account-settings/profile/change-profile",
                name: "Change Password",
              },
            ],
          },
        ],
      },
      {
        name: "Website Setup",
        subRoutes: [
          {
            path: "/admin/Administrative/Website-Setup/sliders",
            name: "Sliders",
          },
          {
            path: "/admin/Administrative/Website-Setup/meta",
            name: "Meta",
          },
        ],
      },
      {
        name: "Trash",
        subRoutes: [
          {
            path: "/admin/Administrative/Trash/deleted-orders",
            name: "Deleted Orders",
          },
          {
            path: "/admin/Administrative/Trash/deleted-products",
            name: "Deleted Products",
          },
          {
            path: "/admin/Administrative/Trash/deleted-categories",
            name: "Deleted Categories",
          },
        ],
      },
    ],
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("sidebar-closed");
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "260",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="top_section">
        <AnimatePresence />
        <div className="bars">
          <HiOutlineBars3 onClick={toggle} />
        </div>
      </div>

      <div className="main">
        <motion.div
          animate={{
            width: isOpen ? "260px" : "80px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar ${isOpen ? "" : "sidebar-closed"}`}
        >
          <section>
            <div className="routes">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      key={index}
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink to={route.path} key={index} className="menu-link">
                    <div className="icon">{route.icon}</div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={showAnimation}
                          initial="hidden"
                          animate="show"
                          exit="hidden"
                          className="link_text"
                        >
                          {route.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavLink>
                );
              })}
            </div>

            <hr />
            <div>
              <p className="help-text">
                <Link className="help-text" to="mailto:info@designdot.co">
                  Help
                </Link>
              </p>
              <span className="small-text">
                Copyright © 2023 <b>DesignDot</b>
              </span>
            </div>
          </section>
        </motion.div>

        <main className={`main-container ${isOpen ? "" : "sidebar-closed"}`}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Sidebar;
