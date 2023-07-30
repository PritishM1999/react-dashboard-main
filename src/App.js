import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/Layout/Header/Header"
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from "react-router-dom";


import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Tasks from "./components/Pages/MainPages/Miscelaneous/Tasks/Tasks";
import Notifications from "./components/Pages/MainPages/Miscelaneous/Notifications/Notifications.jsx";
import Blogs from "./components/Pages/MainPages/Miscelaneous/Blogs/Blogs";
import AddBlog from "./components/Pages/MainPages/Miscelaneous/Blogs/AddBlog";
import PoS from "./components/Pages/MainPages/Sales/POS/Pos";

import AllOrder from "./components/Pages/MainPages/Sales/Sale/Orders/Allorder"
import SubsOrder from "./components/Pages/MainPages/Sales/Sale/Orders/SubscriptionOrder";
import PickupOrder from "./components/Pages/MainPages/Sales/Sale/Orders/PickupOrders";
import PosOrder from "./components/Pages/MainPages/Sales/Sale/Orders/PosOrder";
import BackOrder from "./components/Pages/MainPages/Sales/Sale/Orders/BackOrders";
import InvoiceList from "./components/Pages/MainPages/Sales/Sale/Invoice/InvoiceList";

import ProductInventory from "./components/Pages/MainPages/ProductManager/Inventory/Inventores/ProductInventory";
import ExpiredStocks from "./components/Pages/MainPages/ProductManager/Inventory/Expired/ExpiredStock";
import ExpiringSoon from "./components/Pages/MainPages/ProductManager/Inventory/Expiring/ExpiringSoon";
import LowStock from "./components/Pages/MainPages//ProductManager/Inventory/Low/LowStock";
import StockoutProducts from "./components/Pages/MainPages/ProductManager/Inventory/Stockout/StockoutProducts";

import AddProducts from "./components/Pages/MainPages/ProductManager/Products/Add/AddProducts";
import ListOfProducts from "./components/Pages/MainPages/ProductManager/Products/List/ListProducts";
import Categories from "./components/Pages/MainPages/ProductManager/Products/Categories/Categories";
import AddCategories from "./components/Pages/MainPages/ProductManager/Products/Categories/AddCategories";

import Brands from "./components/Pages/MainPages/ProductManager/Products/Brand/Brands";
import AddBrand from "./components/Pages/MainPages/ProductManager/Products/Brand/AddBrands";
import Units from "./components/Pages/MainPages/ProductManager/Products/Unit/Unit";
import AddUnit from "./components/Pages/MainPages/ProductManager/Products/Unit/AddUnit";

import Suppliers from "./components/Pages/MainPages/ProductManager/Products/Supplier/SuppliersList";
import AddSuppliers from "./components/Pages/MainPages/ProductManager/Products/Supplier/AddSuppliers";
import ProductReiews from "./components/Pages/MainPages/ProductManager/Products/Reviews/ProductReviews";
import SetAlerts from "./components/Pages/MainPages/ProductManager/Products/Alerts/SetAlert"

import CustomerForm from "./components/Pages/MainPages/People/Customers/AddCustomers";

import AllCustomers from "./components/Pages/MainPages/People/Customers/AllCustomers";
import DeletedCustomers from "./components/Pages/MainPages/People/Customers/DeletedCustomers";
import EditCustomers from "./components/Pages/MainPages/People/Customers/EditCustomers";

import ProductWishlist from "./components/Pages/MainPages/MarketingPromotions/Wishlist/ProductWishlist";
import AddtoWislist from "./components/Pages/MainPages/MarketingPromotions/Wishlist/AddtoWishlist";
import AllSubscribers from "./components/Pages/MainPages/MarketingPromotions/Subscribers/AllSubscribers";
import SubscriptionDiscount from "./components/Pages/MainPages/MarketingPromotions/SubsDiscount/SubscriptionDiscount";
import AddSubscriptionDiscount from "./components/Pages/MainPages/MarketingPromotions/SubsDiscount/AddSubsDiscount";

import Discount from "./components/Pages/MainPages/MarketingPromotions/Discount/Discount";
import AddPeriodicDiscount from "./components/Pages/MainPages/MarketingPromotions/Discount/AddDiscount";

import Coupons from "./components/Pages/MainPages/MarketingPromotions/Coupon/Coupon";
import AddCoupons from "././components/Pages/MainPages/MarketingPromotions/Coupon/AddCoupon";

import UserSearches from "./components/Pages/MainPages/MarketingPromotions/Marketing/UserSearch/UserSearches";
import FailOrders from "./components/Pages/MainPages/MarketingPromotions/Marketing/FailOrder/FailedOrders";
import OnCart from "./components/Pages/MainPages/MarketingPromotions/Marketing/OnCart/OnCart";

import ListEmployees from "./components/Pages/MainPages/BasicHR/Employee/ListEmployees";
import AddEmployees from "./components/Pages/MainPages/BasicHR/Employee/AddEmployee";

import AllSales from "./components/Pages/MainPages/Reports/SalesReport/AllSales/AllSales";
import UserReport from "./components/Pages/MainPages/Reports/SalesReport/UserReport/UserReport";
import IncomeReport from "./components/Pages/MainPages/Reports/SalesReport/IncomeReport/IncomeReport";
import PosReport from "./components/Pages/MainPages/Reports/SalesReport/PosReport/PosReport";
import ProductWiseReport from "./components/Pages/MainPages/Reports/SalesReport/ProductWiseReport/ProductWiseReport";
import BackOrderReport from "./components/Pages/MainPages/Reports/SalesReport/BackOrderReport/BackOrderReport";
import SubscriptionReport from "./components/Pages/MainPages/Reports/SalesReport/SubscriptionReport/SubscriptionReport";
import PaymentReport from "./components/Pages/MainPages/Reports/SalesReport/PaymentReport/PaymentReport";
import EmployeeSalesReport from "./components/Pages/MainPages/Reports/SalesReport/EmpSalesReport/EmpSalesReport";
import WishlistReport from "./components/Pages/MainPages/Reports/SalesReport/WishlistReport/WishlistReport";
import PickupPoint from "./components/Pages/MainPages/Administrative/Setup/PickupPoint/PickupPoint";
import AddPickupPoint from "./components/Pages/MainPages/Administrative/Setup/PickupPoint/AddPickupPoint";
import ShippingConfiguration from "./components/Pages/MainPages/Administrative/Setup/Shipping/ShippingConfig";
import RolesPermissions from "./components/Pages/MainPages/Administrative/Settings/RolesPermissions/RolesPermissions";
import AddRoleAndPremissions from "./components/Pages/MainPages/Administrative/Settings/RolesPermissions/AddRolePermission";
import Prefixes from "./components/Pages/MainPages/Administrative/Settings/Prefixes/Prefixes";
import Profile from "./components/Pages/MainPages/Administrative/Settings/AccountSettings/Profile";
import ChangePassword from "./components/Pages/MainPages/Administrative/Settings/AccountSettings/ChangePassword";
import Sliders from "./components/Pages/MainPages/Administrative/WebsiteSetup/Sliders/Sliders";
import AddSlider from "./components/Pages/MainPages/Administrative/WebsiteSetup/Sliders/AddSlider";
import Meta from "./components/Pages/MainPages/Administrative/WebsiteSetup/Meta/Meta";
import AddMeta from "./components/Pages/MainPages/Administrative/WebsiteSetup/Meta/AddMeta";

import DeletedOrders from "./components/Pages/MainPages/Administrative/Trash/DeletedOrders";
import DeletedProducts from "./components/Pages/MainPages/Administrative/Trash/DeletedProducts";
import DeletedCategories from "./components/Pages/MainPages/Administrative/Trash/DeletedCategories";

import ViewOrderDetails from "./components/Pages/MainPages/ViewDetails/ViewOrderDetails";
import ViewInvoiceDetails from "./components/Pages/MainPages/ViewDetails/ViewInvoice";
import ViewAndUpdateStatus from "./components/Pages/MainPages/ViewDetails/ViewStatus";


import LoginForm from "./features/auth/LoginForm";
import ForgotPasswordForm from "./features/auth/ForgotPasswordForm";
import AuthLayout from "./components/Layout/AuthLayout/AuthLayout";

import useAuthentication from "./AuthHook/useAuthentication";

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Sidebar>{children}</Sidebar>
  </>
);

function App() {
  const isAuthenticated = useAuthentication();

  // ProtectedRoute component to handle conditional rendering based on authentication
  // eslint-disable-next-line no-unused-vars
  const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = useAuthentication();

    if (isAuthenticated) {
      return <Route {...rest} element={element} />;
    } else {
      return <Navigate to="/admin" replace />;
    }
  };
  // ProtectedRoute()

  return (
    <Router>
      <Routes>
        <Route path="/admin/" element={<AuthLayout> <LoginForm /> </AuthLayout>} />
        <Route path="/admin/forgot" element={<AuthLayout> <ForgotPasswordForm /></AuthLayout>} />
        {/* <Route path="/admin" element={<Dashboard />} /> */}

        {/* Main Layout */}
        {isAuthenticated && (
          <Route path="/admin/*" element={<MainLayout> {/* Note the <Outlet> component here */}
            <Outlet />

            {/* Main Pages */}
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="miscellaneous/tasks" element={<Tasks />} />
              <Route path="miscellaneous/notifications" element={<Notifications />} />
              <Route path="miscellaneous/blogs" element={<Blogs />} />
              <Route path="miscellaneous/addBlogs" element={<AddBlog />} />
            </Routes>

            {/* Sales */}
            <Routes>
              <Route path="Sales/PoS" element={<PoS />} />
              <Route path="Sales/all-orders" element={<AllOrder />} />
              <Route path="Sales/subscription-orders" element={<SubsOrder />} />
              <Route path="Sales/pickup-orders" element={<PickupOrder />} />
              <Route path="Sales/pos-orders" element={<PosOrder />} />
              <Route path="Sales/back-orders" element={<BackOrder />} />
              <Route path="Sales/Invoice-list" element={<InvoiceList />} />
            </Routes>

            {/* Product Manager */}
            <Routes>
              <Route path="ProductManager/Inventory/product-inventory" element={<ProductInventory />} />
              <Route path="ProductManager/Inventory/expired-stocks" element={<ExpiredStocks />} />
              <Route path="ProductManager/Inventory/expiring-soon" element={<ExpiringSoon />} />
              <Route path="ProductManager/Inventory/low-stock" element={<LowStock />} />
              <Route path="ProductManager/Inventory/stockout-products" element={<StockoutProducts />} />
              <Route path="ProductManager/Products/add-products" element={<AddProducts />} />
              <Route path="ProductManager/Products/list-products" element={<ListOfProducts />} />
              <Route path="ProductManager/Products/categories" element={<Categories />} />
              <Route path="ProductManager/Products/add-categories" element={<AddCategories />} />
              <Route path="ProductManager/Products/brands" element={<Brands />} />
              <Route path="ProductManager/Products/add-brands" element={<AddBrand />} />
              <Route path="ProductManager/Products/units" element={<Units />} />
              <Route path="ProductManager/Products/add-unit" element={<AddUnit />} />
              <Route path="ProductManager/Products/suppliers-list" element={<Suppliers />} />
              <Route path="ProductManager/Products/add-supplierslist" element={<AddSuppliers />} />
              <Route path="ProductManager/Products/show-reviews" element={<ProductReiews />} />
              <Route path="ProductManager/Products/set-alerts" element={<SetAlerts />} />
            </Routes>

            {/* People */}
            <Routes>
              <Route path="People/GeneralCustomers/add-customers" element={<CustomerForm />} />
              <Route path="People/GeneralCustomers/all-customers" element={<AllCustomers />} />
              <Route path="People/GeneralCustomers/deleted-customers" element={<DeletedCustomers />} />
              <Route path="People/GeneralCustomers/edit-customers" element={<EditCustomers />} />
            </Routes>

            {/* Marketing Promotions */}
            <Routes>
              <Route path="Marketing-Promotions/product-wishlist" element={<ProductWishlist />} />
              <Route path="Marketing-Promotions/product-wishlist/add-to-products" element={<AddtoWislist />} />
              <Route path="Marketing-Promotions/all-subscribers" element={<AllSubscribers />} />
              <Route path="Marketing-Promotions/subscription-discount" element={<SubscriptionDiscount />} />
              <Route path="Marketing-Promotions/add-subscription-discount" element={<AddSubscriptionDiscount />} />
              <Route path="Marketing-Promotions/periodic-discounts" element={<Discount />} />
              <Route path="Marketing-Promotions/add-periodic-discount" element={<AddPeriodicDiscount />} />
              <Route path="Marketing-Promotions/coupons" element={<Coupons />} />
              <Route path="Marketing-Promotions/add-coupons" element={<AddCoupons />} />
              <Route path="Marketing-Promotions/Marketing/user-searches" element={<UserSearches />} />
              <Route path="Marketing-Promotions/Marketing/fail-orders" element={<FailOrders />} />
              <Route path="Marketing-Promotions/Marketing/on-cart" element={<OnCart />} />
            </Routes>

            {/* Basic HR */}
            <Routes>
              <Route path="Basic-HR/Employees/list-employees" element={<ListEmployees />} />
              <Route path="Basic-HR/Employees/add-employees" element={<AddEmployees />} />
            </Routes>

            {/* Reports */}
            <Routes>
              <Route path="Report/Sales-Report/all-sales" element={<AllSales />} />
              <Route path="Report/Sales-Report/user-report" element={<UserReport />} />
              <Route path="Report/Sales-Report/income-report" element={<IncomeReport />} />
              <Route path="Report/Sales-Report/pos-report" element={<PosReport />} />
              <Route path="Report/Sales-Report/product-wise-report" element={<ProductWiseReport />} />
              <Route path="Report/Sales-Report/back-order-report" element={<BackOrderReport />} />
              <Route path="Report/Sales-Report/subscription-report" element={<SubscriptionReport />} />
              <Route path="Report/Sales-Report/payment-report" element={<PaymentReport />} />
              <Route path="Report/Sales-Report/Employee-sales-report" element={<EmployeeSalesReport />} />
              <Route path="Report/Sales-Report/wishlist-report" element={<WishlistReport />} />
            </Routes>

            {/* Administrative */}
            <Routes>
              <Route path="Administrative/Setup/pick-up-point" element={<PickupPoint />} />
              <Route path="Administrative/Setup/add-pick-up-point" element={<AddPickupPoint />} />
              <Route path="Administrative/Setup/Shipping/shipping-config" element={<ShippingConfiguration />} />
              <Route path="Administrative/Settings/roles-permission" element={<RolesPermissions />} />
              <Route path="Administrative/Settings/add-roles" element={<AddRoleAndPremissions />} />
              <Route path="Administrative/Settings/prefixes" element={<Prefixes />} />
              <Route path="Administrative/Settings/account-settings/profile" element={<Profile />} />
              <Route path="Administrative/Settings/account-settings/profile/change-profile" element={<ChangePassword />} />
              <Route path="Administrative/Website-Setup/sliders" element={<Sliders />} />
              <Route path="Administrative/Website-Setup/add-sliders" element={<AddSlider />} />
              <Route path="Administrative/Website-Setup/meta" element={<Meta />} />
              <Route path="Administrative/Website-Setup/add-meta" element={<AddMeta />} />
            </Routes>

            {/* Trash */}
            <Routes>
              <Route path="Administrative/Trash/deleted-orders" element={<DeletedOrders />} />
              <Route path="Administrative/Trash/deleted-products" element={<DeletedProducts />} />
              <Route path="Administrative/Trash/deleted-categories" element={<DeletedCategories />} />
            </Routes>

            {/* Admin */}
            <Routes>
              <Route path="Admin/view-order-details" element={<ViewOrderDetails />} />
              <Route path="Admin/view-invoice-details" element={<ViewInvoiceDetails />} />
              <Route path="Admin/view-and-update-status" element={<ViewAndUpdateStatus />} />
            </Routes>

            {/* Catch-all for 404 routes */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </MainLayout>} />

        )}


      </Routes>
    </Router>
  );
}

export default App;


// import React from "react";

// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Header from "./components/Layout/Header/Header"
// import Sidebar from "./components/Layout/Sidebar/Sidebar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import Dashboard from "./components/Pages/Dashboard/Dashboard";
// import Tasks from "./components/Pages/MainPages/Miscelaneous/Tasks/Tasks";
// import Notifications from "./components/Pages/MainPages/Miscelaneous/Notifications/Notifications.jsx";
// import Blogs from "./components/Pages/MainPages/Miscelaneous/Blogs/Blogs";
// import AddBlog from "./components/Pages/MainPages/Miscelaneous/Blogs/AddBlog";
// import PoS from "./components/Pages/MainPages/Sales/POS/Pos";

// import AllOrder from "./components/Pages/MainPages/Sales/Sale/Orders/Allorder"
// import SubsOrder from "./components/Pages/MainPages/Sales/Sale/Orders/SubscriptionOrder";
// import PickupOrder from "./components/Pages/MainPages/Sales/Sale/Orders/PickupOrders";
// import PosOrder from "./components/Pages/MainPages/Sales/Sale/Orders/PosOrder";
// import BackOrder from "./components/Pages/MainPages/Sales/Sale/Orders/BackOrders";
// import InvoiceList from "./components/Pages/MainPages/Sales/Sale/Invoice/InvoiceList";

// import ProductInventory from "./components/Pages/MainPages/ProductManager/Inventory/Inventores/ProductInventory";
// import ExpiredStocks from "./components/Pages/MainPages/ProductManager/Inventory/Expired/ExpiredStock";
// import ExpiringSoon from "./components/Pages/MainPages/ProductManager/Inventory/Expiring/ExpiringSoon";
// import LowStock from "./components/Pages/MainPages//ProductManager/Inventory/Low/LowStock";
// import StockoutProducts from "./components/Pages/MainPages/ProductManager/Inventory/Stockout/StockoutProducts";

// import AddProducts from "./components/Pages/MainPages/ProductManager/Products/Add/AddProducts";
// import ListOfProducts from "./components/Pages/MainPages/ProductManager/Products/List/ListProducts";
// import Categories from "./components/Pages/MainPages/ProductManager/Products/Categories/Categories";
// import AddCategories from "./components/Pages/MainPages/ProductManager/Products/Categories/AddCategories";

// import Brands from "./components/Pages/MainPages/ProductManager/Products/Brand/Brands";
// import AddBrand from "./components/Pages/MainPages/ProductManager/Products/Brand/AddBrands";
// import Units from "./components/Pages/MainPages/ProductManager/Products/Unit/Unit";
// import AddUnit from "./components/Pages/MainPages/ProductManager/Products/Unit/AddUnit";

// import Suppliers from "./components/Pages/MainPages/ProductManager/Products/Supplier/SuppliersList";
// import AddSuppliers from "./components/Pages/MainPages/ProductManager/Products/Supplier/AddSuppliers";
// import ProductReiews from "./components/Pages/MainPages/ProductManager/Products/Reviews/ProductReviews";
// import SetAlerts from "./components/Pages/MainPages/ProductManager/Products/Alerts/SetAlert"

// import CustomerForm from "./components/Pages/MainPages/People/Customers/AddCustomers";

// import AllCustomers from "./components/Pages/MainPages/People/Customers/AllCustomers";
// import DeletedCustomers from "./components/Pages/MainPages/People/Customers/DeletedCustomers";
// import EditCustomers from "./components/Pages/MainPages/People/Customers/EditCustomers";

// import ProductWishlist from "./components/Pages/MainPages/MarketingPromotions/Wishlist/ProductWishlist";
// import AddtoWislist from "./components/Pages/MainPages/MarketingPromotions/Wishlist/AddtoWishlist";
// import AllSubscribers from "./components/Pages/MainPages/MarketingPromotions/Subscribers/AllSubscribers";
// import SubscriptionDiscount from "./components/Pages/MainPages/MarketingPromotions/SubsDiscount/SubscriptionDiscount";
// import AddSubscriptionDiscount from "./components/Pages/MainPages/MarketingPromotions/SubsDiscount/AddSubsDiscount";

// import Discount from "./components/Pages/MainPages/MarketingPromotions/Discount/Discount";
// import AddPeriodicDiscount from "./components/Pages/MainPages/MarketingPromotions/Discount/AddDiscount";

// import Coupons from "./components/Pages/MainPages/MarketingPromotions/Coupon/Coupon";
// import AddCoupons from "././components/Pages/MainPages/MarketingPromotions/Coupon/AddCoupon";

// import UserSearches from "./components/Pages/MainPages/MarketingPromotions/Marketing/UserSearch/UserSearches";
// import FailOrders from "./components/Pages/MainPages/MarketingPromotions/Marketing/FailOrder/FailedOrders";
// import OnCart from "./components/Pages/MainPages/MarketingPromotions/Marketing/OnCart/OnCart";

// import ListEmployees from "./components/Pages/MainPages/BasicHR/Employee/ListEmployees";
// import AddEmployees from "./components/Pages/MainPages/BasicHR/Employee/AddEmployee";

// import AllSales from "./components/Pages/MainPages/Reports/SalesReport/AllSales/AllSales";
// import UserReport from "./components/Pages/MainPages/Reports/SalesReport/UserReport/UserReport";
// import IncomeReport from "./components/Pages/MainPages/Reports/SalesReport/IncomeReport/IncomeReport";
// import PosReport from "./components/Pages/MainPages/Reports/SalesReport/PosReport/PosReport";
// import ProductWiseReport from "./components/Pages/MainPages/Reports/SalesReport/ProductWiseReport/ProductWiseReport";
// import BackOrderReport from "./components/Pages/MainPages/Reports/SalesReport/BackOrderReport/BackOrderReport";
// import SubscriptionReport from "./components/Pages/MainPages/Reports/SalesReport/SubscriptionReport/SubscriptionReport";
// import PaymentReport from "./components/Pages/MainPages/Reports/SalesReport/PaymentReport/PaymentReport";
// import EmployeeSalesReport from "./components/Pages/MainPages/Reports/SalesReport/EmpSalesReport/EmpSalesReport";
// import WishlistReport from "./components/Pages/MainPages/Reports/SalesReport/WishlistReport/WishlistReport";
// import PickupPoint from "./components/Pages/MainPages/Administrative/Setup/PickupPoint/PickupPoint";
// import AddPickupPoint from "./components/Pages/MainPages/Administrative/Setup/PickupPoint/AddPickupPoint";
// import ShippingConfiguration from "./components/Pages/MainPages/Administrative/Setup/Shipping/ShippingConfig";
// import RolesPermissions from "./components/Pages/MainPages/Administrative/Settings/RolesPermissions/RolesPermissions";
// import AddRoleAndPremissions from "./components/Pages/MainPages/Administrative/Settings/RolesPermissions/AddRolePermission";
// import Prefixes from "./components/Pages/MainPages/Administrative/Settings/Prefixes/Prefixes";
// import Profile from "./components/Pages/MainPages/Administrative/Settings/AccountSettings/Profile";
// import ChangePassword from "./components/Pages/MainPages/Administrative/Settings/AccountSettings/ChangePassword";
// import Sliders from "./components/Pages/MainPages/Administrative/WebsiteSetup/Sliders/Sliders";
// import AddSlider from "./components/Pages/MainPages/Administrative/WebsiteSetup/Sliders/AddSlider";
// import Meta from "./components/Pages/MainPages/Administrative/WebsiteSetup/Meta/Meta";
// import AddMeta from "./components/Pages/MainPages/Administrative/WebsiteSetup/Meta/AddMeta";

// import DeletedOrders from "./components/Pages/MainPages/Administrative/Trash/DeletedOrders";
// import DeletedProducts from "./components/Pages/MainPages/Administrative/Trash/DeletedProducts";
// import DeletedCategories from "./components/Pages/MainPages/Administrative/Trash/DeletedCategories";

// import ViewOrderDetails from "./components/Pages/MainPages/ViewDetails/ViewOrderDetails";
// import ViewInvoiceDetails from "./components/Pages/MainPages/ViewDetails/ViewInvoice";
// import ViewAndUpdateStatus from "./components/Pages/MainPages/ViewDetails/ViewStatus";


// import LoginForm from "./features/auth/LoginForm";
// import ForgotPasswordForm from "./features/auth/ForgotPasswordForm";
// import AuthLayout from "./components/Layout/AuthLayout/AuthLayout";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* First Router for login and forgot password */}
//         <Route path="/admin/login" element={<AuthLayout><LoginForm /></AuthLayout>} />
//         <Route path="/admin/forgot" element={<AuthLayout><ForgotPasswordForm /></AuthLayout>} />

//         {/* Second Router for the main application */}
//         <Route path="/admin/*" element={<AuthLayout> <DashboardRouter /></AuthLayout>} />


//         {/* Other public routes */}
//         {/* Add any public routes here */}
//       </Routes>
//     </Router>
//   );
// }

// // Define the Router for the main application
// function DashboardRouter() {
//   return (
//     <>
//       <Sidebar />
//       <Header />
//       <Routes>
//         <Route index element={<Dashboard />} />
//         {/* Other routes for the admin */}
//         <Route path="/admin/" element={<Dashboard />} />
//         <Route path="/admin/dashboard" element={<Dashboard />} />

//         <Route path="/admin/miscellaneous/tasks" element={<Tasks />} />
//         <Route path="/admin/miscellaneous/notifications" element={<Notifications />} />
//         <Route path="/admin/miscellaneous/blogs" element={<Blogs />} />
//         <Route path="/admin/miscellaneous/addBlogs" element={<AddBlog />} />

//         <Route path="/admin/Sales/PoS" element={<PoS />} />
//         <Route path="/admin/Sales/all-orders" element={<AllOrder />} />

//         <Route path="/admin/Sales/subscription-orders" element={<SubsOrder />} />
//         <Route path="/admin/Sales/pickup-orders" element={<PickupOrder />} />
//         <Route path="/admin/Sales/pos-orders" element={<PosOrder />} />
//         <Route path="/admin/Sales/back-orders" element={<BackOrder />} />
//         <Route path="/admin/Sales/Invoice-list" element={<InvoiceList />} />

//         <Route path="/admin/ProductManager/Inventory/product-inventory" element={<ProductInventory />} />

//         <Route path="/admin/ProductManager/Inventory/expired-stocks" element={<ExpiredStocks />} />
//         <Route path="/admin/ProductManager/Inventory/expiring-soon" element={<ExpiringSoon />} />
//         <Route path="/admin/ProductManager/Inventory/low-stock" element={<LowStock />} />
//         <Route path="/admin/ProductManager/Inventory/stockout-products" element={<StockoutProducts />} />

//         <Route path="/admin/ProductManager/Products/add-products" element={<AddProducts />} />
//         <Route path="/admin/ProductManager/Products/list-products" element={<ListOfProducts />} />

//         <Route path="/admin/ProductManager/Products/categories" element={<Categories />} />
//         <Route path="/admin/ProductManager/Products/add-categories" element={<AddCategories />} />

//         <Route path="/admin/ProductManager/Products/brands" element={<Brands />} />
//         <Route path="/admin/ProductManager/Products/add-brands" element={<AddBrand />} />

//         <Route path="/admin/ProductManager/Products/brands" element={<Brands />} />
//         <Route path="/admin/ProductManager/Products/units" element={<Units />} />
//         <Route path="/admin/ProductManager/Products/add-unit" element={<AddUnit />} />
//         <Route path="/admin/ProductManager/Products/suppliers-list" element={<Suppliers />} />
//         <Route path="/admin/ProductManager/Products/add-supplierslist" element={<AddSuppliers />} />
//         <Route path="/admin/ProductManager/Products/show-reviews" element={<ProductReiews />} />
//         <Route path="/admin/ProductManager/Products/set-alerts" element={<SetAlerts />} />

//         <Route path="/admin/People/GeneralCustomers/add-customers" element={<CustomerForm />} />
//         <Route path="/admin/People/GeneralCustomers/all-customers" element={<AllCustomers />} />
//         <Route path="/admin/People/GeneralCustomers/deleted-customers" element={<DeletedCustomers />} />
//         <Route path="/admin/People/GeneralCustomers/edit-customers" element={<EditCustomers />} />

//         <Route path="/admin/Marketing-Promotions/product-wishlist" element={<ProductWishlist />} />
//         <Route path="/admin/Marketing-Promotions/product-wishlist/add-to-products" element={<AddtoWislist />} />
//         <Route path="/admin/Marketing-Promotions/all-subscribers" element={<AllSubscribers />} />

//         <Route path="/admin/Marketing-Promotions/subscription-discount" element={<SubscriptionDiscount />} />
//         <Route path="/admin/Marketing-Promotions/add-subscription-discount" element={<AddSubscriptionDiscount />} />

//         <Route path="/admin/Marketing-Promotions/periodic-discounts" element={<Discount />} />
//         <Route path="/admin/Marketing-Promotions/add-periodic-discount" element={<AddPeriodicDiscount />} />

//         <Route path="/admin/Marketing-Promotions/coupons" element={<Coupons />} />
//         <Route path="/admin/Marketing-Promotions/add-coupons" element={<AddCoupons />} />

//         <Route path="/admin/Marketing-Promotions/Marketing/user-searches" element={<UserSearches />} />
//         <Route path="/admin/Marketing-Promotions/Marketing/fail-orders" element={<FailOrders />} />
//         <Route path="/admin/Marketing-Promotions/Marketing/on-cart" element={<OnCart />} />

//         <Route path="/admin/Basic-HR/Employees/list-employees" element={<ListEmployees />} />
//         <Route path="/admin/Basic-HR/Employees/add-employees" element={<AddEmployees />} />

//         <Route path="/admin/Report/Sales-Report/all-sales" element={<AllSales />} />
//         <Route path="/admin/Report/Sales-Report/user-report" element={<UserReport />} />
//         <Route path="/admin/Report/Sales-Report/income-report" element={<IncomeReport />} />
//         <Route path="/admin/Report/Sales-Report/pos-report" element={<PosReport />} />
//         <Route path="/admin/Report/Sales-Report/product-wise-report" element={<ProductWiseReport />} />
//         <Route path="/admin/Report/Sales-Report/back-order-report" element={<BackOrderReport />} />
//         <Route path="/admin/Report/Sales-Report/subscription-report" element={<SubscriptionReport />} />
//         <Route path="/admin/Report/Sales-Report/payment-report" element={<PaymentReport />} />
//         <Route path="/admin/Report/Sales-Report/Employee-sales-report" element={<EmployeeSalesReport />} />
//         <Route path="/admin/Report/Sales-Report/wishlist-report" element={<WishlistReport />} />

//         <Route path="/admin/Administrative/Setup/pick-up-point" element={<PickupPoint />} />
//         <Route path="/admin/Administrative/Setup/add-pick-up-point" element={<AddPickupPoint />} />
//         <Route path="/admin/Administrative/Setup/Shipping/shipping-config" element={<ShippingConfiguration />} />
//         <Route path="/admin/Administrative/Settings/roles-permission" element={<RolesPermissions />} />
//         <Route path="/admin/Administrative/Settings/add-roles" element={<AddRoleAndPremissions />} />
//         <Route path="/admin/Administrative/Settings/prefixes" element={<Prefixes />} />
//         <Route path="/admin/Administrative/Settings/account-settings/profile" element={<Profile />} />
//         <Route path="/admin/Administrative/Settings/account-settings/profile/change-profile" element={<ChangePassword />} />
//         <Route path="/admin/Administrative/Website-Setup/sliders" element={<Sliders />} />
//         <Route path="/admin/Administrative/Website-Setup/add-sliders" element={<AddSlider />} />
//         <Route path="/admin/Administrative/Website-Setup/meta" element={<Meta />} />
//         <Route path="/admin/Administrative/Website-Setup/add-meta" element={<AddMeta />} />

//         <Route path="/admin/Administrative/Trash/deleted-orders" element={<DeletedOrders />} />
//         <Route path="/admin/Administrative/Trash/deleted-products" element={<DeletedProducts />} />
//         <Route path="/admin/Administrative/Trash/deleted-categories" element={<DeletedCategories />} />

//         <Route path="/admin/Admin/view-order-details" element={<ViewOrderDetails />} />
//         <Route path="/admin/Admin/view-invoice-details" element={<ViewInvoiceDetails />} />
//         <Route path="/admin/Admin/view-and-update-status" element={<ViewAndUpdateStatus />} />
//       </Routes>
//     </>
//   );
// }

// export default App;



// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Header from "./components/Layout/Header/Header"
// import Sidebar from "./components/Layout/Sidebar/Sidebar";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import Dashboard from "./components/Pages/Dashboard/Dashboard";
// import Tasks from "./components/Pages/MainPages/Miscelaneous/Tasks/Tasks";
// import Notifications from "./components/Pages/MainPages/Miscelaneous/Notifications/Notifications.jsx";
// import Blogs from "./components/Pages/MainPages/Miscelaneous/Blogs/Blogs";
// import AddBlog from "./components/Pages/MainPages/Miscelaneous/Blogs/AddBlog";
// import PoS from "./components/Pages/MainPages/Sales/POS/Pos";

// import AllOrder from "./components/Pages/MainPages/Sales/Sale/Orders/Allorder"
// import SubsOrder from "./components/Pages/MainPages/Sales/Sale/Orders/SubscriptionOrder";
// import PickupOrder from "./components/Pages/MainPages/Sales/Sale/Orders/PickupOrders";
// import PosOrder from "./components/Pages/MainPages/Sales/Sale/Orders/PosOrder";
// import BackOrder from "./components/Pages/MainPages/Sales/Sale/Orders/BackOrders";
// import InvoiceList from "./components/Pages/MainPages/Sales/Sale/Invoice/InvoiceList";

// import ProductInventory from "./components/Pages/MainPages/ProductManager/Inventory/Inventores/ProductInventory";
// import ExpiredStocks from "./components/Pages/MainPages/ProductManager/Inventory/Expired/ExpiredStock";
// import ExpiringSoon from "./components/Pages/MainPages/ProductManager/Inventory/Expiring/ExpiringSoon";
// import LowStock from "./components/Pages/MainPages//ProductManager/Inventory/Low/LowStock";
// import StockoutProducts from "./components/Pages/MainPages/ProductManager/Inventory/Stockout/StockoutProducts";

// import AddProducts from "./components/Pages/MainPages/ProductManager/Products/Add/AddProducts";
// import ListOfProducts from "./components/Pages/MainPages/ProductManager/Products/List/ListProducts";
// import Categories from "./components/Pages/MainPages/ProductManager/Products/Categories/Categories";
// import AddCategories from "./components/Pages/MainPages/ProductManager/Products/Categories/AddCategories";

// import Brands from "./components/Pages/MainPages/ProductManager/Products/Brand/Brands";
// import AddBrand from "./components/Pages/MainPages/ProductManager/Products/Brand/AddBrands";
// import Units from "./components/Pages/MainPages/ProductManager/Products/Unit/Unit";
// import AddUnit from "./components/Pages/MainPages/ProductManager/Products/Unit/AddUnit";

// import Suppliers from "./components/Pages/MainPages/ProductManager/Products/Supplier/SuppliersList";
// import AddSuppliers from "./components/Pages/MainPages/ProductManager/Products/Supplier/AddSuppliers";
// import ProductReiews from "./components/Pages/MainPages/ProductManager/Products/Reviews/ProductReviews";
// import SetAlerts from "./components/Pages/MainPages/ProductManager/Products/Alerts/SetAlert"

// import CustomerForm from "./components/Pages/MainPages/People/Customers/AddCustomers";

// import AllCustomers from "./components/Pages/MainPages/People/Customers/AllCustomers";
// import DeletedCustomers from "./components/Pages/MainPages/People/Customers/DeletedCustomers";
// import EditCustomers from "./components/Pages/MainPages/People/Customers/EditCustomers";

// import ProductWishlist from "./components/Pages/MainPages/MarketingPromotions/Wishlist/ProductWishlist";
// import AddtoWislist from "./components/Pages/MainPages/MarketingPromotions/Wishlist/AddtoWishlist";
// import AllSubscribers from "./components/Pages/MainPages/MarketingPromotions/Subscribers/AllSubscribers";
// import SubscriptionDiscount from "./components/Pages/MainPages/MarketingPromotions/SubsDiscount/SubscriptionDiscount";
// import AddSubscriptionDiscount from "./components/Pages/MainPages/MarketingPromotions/SubsDiscount/AddSubsDiscount";

// import Discount from "./components/Pages/MainPages/MarketingPromotions/Discount/Discount";
// import AddPeriodicDiscount from "./components/Pages/MainPages/MarketingPromotions/Discount/AddDiscount";

// import Coupons from "./components/Pages/MainPages/MarketingPromotions/Coupon/Coupon";
// import AddCoupons from "././components/Pages/MainPages/MarketingPromotions/Coupon/AddCoupon";

// import UserSearches from "./components/Pages/MainPages/MarketingPromotions/Marketing/UserSearch/UserSearches";
// import FailOrders from "./components/Pages/MainPages/MarketingPromotions/Marketing/FailOrder/FailedOrders";
// import OnCart from "./components/Pages/MainPages/MarketingPromotions/Marketing/OnCart/OnCart";

// import ListEmployees from "./components/Pages/MainPages/BasicHR/Employee/ListEmployees";
// import AddEmployees from "./components/Pages/MainPages/BasicHR/Employee/AddEmployee";

// import AllSales from "./components/Pages/MainPages/Reports/SalesReport/AllSales/AllSales";
// import UserReport from "./components/Pages/MainPages/Reports/SalesReport/UserReport/UserReport";
// import IncomeReport from "./components/Pages/MainPages/Reports/SalesReport/IncomeReport/IncomeReport";
// import PosReport from "./components/Pages/MainPages/Reports/SalesReport/PosReport/PosReport";
// import ProductWiseReport from "./components/Pages/MainPages/Reports/SalesReport/ProductWiseReport/ProductWiseReport";
// import BackOrderReport from "./components/Pages/MainPages/Reports/SalesReport/BackOrderReport/BackOrderReport";
// import SubscriptionReport from "./components/Pages/MainPages/Reports/SalesReport/SubscriptionReport/SubscriptionReport";
// import PaymentReport from "./components/Pages/MainPages/Reports/SalesReport/PaymentReport/PaymentReport";
// import EmployeeSalesReport from "./components/Pages/MainPages/Reports/SalesReport/EmpSalesReport/EmpSalesReport";
// import WishlistReport from "./components/Pages/MainPages/Reports/SalesReport/WishlistReport/WishlistReport";
// import PickupPoint from "./components/Pages/MainPages/Administrative/Setup/PickupPoint/PickupPoint";
// import AddPickupPoint from "./components/Pages/MainPages/Administrative/Setup/PickupPoint/AddPickupPoint";
// import ShippingConfiguration from "./components/Pages/MainPages/Administrative/Setup/Shipping/ShippingConfig";
// import RolesPermissions from "./components/Pages/MainPages/Administrative/Settings/RolesPermissions/RolesPermissions";
// import AddRoleAndPremissions from "./components/Pages/MainPages/Administrative/Settings/RolesPermissions/AddRolePermission";
// import Prefixes from "./components/Pages/MainPages/Administrative/Settings/Prefixes/Prefixes";
// import Profile from "./components/Pages/MainPages/Administrative/Settings/AccountSettings/Profile";
// import ChangePassword from "./components/Pages/MainPages/Administrative/Settings/AccountSettings/ChangePassword";
// import Sliders from "./components/Pages/MainPages/Administrative/WebsiteSetup/Sliders/Sliders";
// import AddSlider from "./components/Pages/MainPages/Administrative/WebsiteSetup/Sliders/AddSlider";
// import Meta from "./components/Pages/MainPages/Administrative/WebsiteSetup/Meta/Meta";
// import AddMeta from "./components/Pages/MainPages/Administrative/WebsiteSetup/Meta/AddMeta";

// import DeletedOrders from "./components/Pages/MainPages/Administrative/Trash/DeletedOrders";
// import DeletedProducts from "./components/Pages/MainPages/Administrative/Trash/DeletedProducts";
// import DeletedCategories from "./components/Pages/MainPages/Administrative/Trash/DeletedCategories";

// import ViewOrderDetails from "./components/Pages/MainPages/ViewDetails/ViewOrderDetails";
// import ViewInvoiceDetails from "./components/Pages/MainPages/ViewDetails/ViewInvoice";
// import ViewAndUpdateStatus from "./components/Pages/MainPages/ViewDetails/ViewStatus";


// import LoginForm from "./features/auth/LoginForm";
// import ForgotPasswordForm from "./features/auth/ForgotPasswordForm";
// import AuthLayout from "./components/Layout/AuthLayout/AuthLayout";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Sidebar>
//         <Routes>
//           {/* AuthLayout for login and forgot password routes */}
//           {/* <Route path="/admin" element={<AuthLayout />}>
//             <Route path="/login" element={<LoginForm />} />
//             <Route path="/forgot" element={<ForgotPasswordForm />} />
//           </Route> */}

//           <Route path="/admin" element={<AuthLayout />}>
//             <Route path="login" element={<LoginForm />} />
//             <Route path="forgot" element={<ForgotPasswordForm />} />
//           </Route>

//           {/* <Route path="/admin" element={<Dashboard />} /> */}
//           {/* <Route path="/admin/login" element={<LoginForm />} />
//           <Route path="/admin/forgot" element={<ForgotPasswordForm />} /> */}

//           <Route path="/admin" element={<Sidebar />}>
//             <Route path="/dashboard" element={<Dashboard />} />

//             <Route path="/miscellaneous/tasks" element={<Tasks />} />
//             <Route path="/miscellaneous/notifications" element={<Notifications />} />
//             <Route path="/miscellaneous/blogs" element={<Blogs />} />
//             <Route path="miscellaneous/addBlogs" element={<AddBlog />} />

//             <Route path="/Sales/PoS" element={<PoS />} />
//             <Route path="/Sales/all-orders" element={<AllOrder />} />

//             <Route path="/Sales/subscription-orders" element={<SubsOrder />} />
//             <Route path="/Sales/pickup-orders" element={<PickupOrder />} />
//             <Route path="/Sales/pos-orders" element={<PosOrder />} />
//             <Route path="/Sales/back-orders" element={<BackOrder />} />
//             <Route path="/Sales/Invoice-list" element={<InvoiceList />} />

//             <Route path="/ProductManager/Inventory/product-inventory" element={<ProductInventory />} />

//             <Route path="/ProductManager/Inventory/expired-stocks" element={<ExpiredStocks />} />
//             <Route path="/ProductManager/Inventory/expiring-soon" element={<ExpiringSoon />} />
//             <Route path="/ProductManager/Inventory/low-stock" element={<LowStock />} />
//             <Route path="/ProductManager/Inventory/stockout-products" element={<StockoutProducts />} />

//             <Route path="/ProductManager/Products/add-products" element={<AddProducts />} />
//             <Route path="/ProductManager/Products/list-products" element={<ListOfProducts />} />

//             <Route path="/ProductManager/Products/categories" element={<Categories />} />
//             <Route path="/ProductManager/Products/add-categories" element={<AddCategories />} />

//             <Route path="/ProductManager/Products/brands" element={<Brands />} />
//             <Route path="/ProductManager/Products/add-brands" element={<AddBrand />} />

//             <Route path="/ProductManager/Products/brands" element={<Brands />} />
//             <Route path="/ProductManager/Products/units" element={<Units />} />
//             <Route path="/ProductManager/Products/add-unit" element={<AddUnit />} />
//             <Route path="/ProductManager/Products/suppliers-list" element={<Suppliers />} />
//             <Route path="/ProductManager/Products/add-supplierslist" element={<AddSuppliers />} />
//             <Route path="/ProductManager/Products/show-reviews" element={<ProductReiews />} />
//             <Route path="/ProductManager/Products/set-alerts" element={<SetAlerts />} />

//             <Route path="/People/GeneralCustomers/add-customers" element={<CustomerForm />} />
//             <Route path="/People/GeneralCustomers/all-customers" element={<AllCustomers />} />
//             <Route path="/People/GeneralCustomers/deleted-customers" element={<DeletedCustomers />} />
//             <Route path="/People/GeneralCustomers/edit-customers" element={<EditCustomers />} />

//             <Route path="/Marketing-Promotions/product-wishlist" element={<ProductWishlist />} />
//             <Route path="/Marketing-Promotions/product-wishlist/add-to-products" element={<AddtoWislist />} />
//             <Route path="/Marketing-Promotions/all-subscribers" element={<AllSubscribers />} />

//             <Route path="/Marketing-Promotions/subscription-discount" element={<SubscriptionDiscount />} />
//             <Route path="/Marketing-Promotions/add-subscription-discount" element={<AddSubscriptionDiscount />} />

//             <Route path="/Marketing-Promotions/periodic-discounts" element={<Discount />} />
//             <Route path="/Marketing-Promotions/add-periodic-discount" element={<AddPeriodicDiscount />} />

//             <Route path="/Marketing-Promotions/coupons" element={<Coupons />} />
//             <Route path="/Marketing-Promotions/add-coupons" element={<AddCoupons />} />

//             <Route path="/Marketing-Promotions/Marketing/user-searches" element={<UserSearches />} />
//             <Route path="/Marketing-Promotions/Marketing/fail-orders" element={<FailOrders />} />
//             <Route path="/Marketing-Promotions/Marketing/on-cart" element={<OnCart />} />

//             <Route path="/Basic-HR/Employees/list-employees" element={<ListEmployees />} />
//             <Route path="/Basic-HR/Employees/add-employees" element={<AddEmployees />} />

//             <Route path="/Report/Sales-Report/all-sales" element={<AllSales />} />
//             <Route path="/Report/Sales-Report/user-report" element={<UserReport />} />
//             <Route path="/Report/Sales-Report/income-report" element={<IncomeReport />} />
//             <Route path="/Report/Sales-Report/pos-report" element={<PosReport />} />
//             <Route path="/Report/Sales-Report/product-wise-report" element={<ProductWiseReport />} />
//             <Route path="/Report/Sales-Report/back-order-report" element={<BackOrderReport />} />
//             <Route path="/Report/Sales-Report/subscription-report" element={<SubscriptionReport />} />
//             <Route path="/Report/Sales-Report/payment-report" element={<PaymentReport />} />
//             <Route path="/Report/Sales-Report/Employee-sales-report" element={<EmployeeSalesReport />} />
//             <Route path="/Report/Sales-Report/wishlist-report" element={<WishlistReport />} />

//             <Route path="/Administrative/Setup/pick-up-point" element={<PickupPoint />} />
//             <Route path="/Administrative/Setup/add-pick-up-point" element={<AddPickupPoint />} />
//             <Route path="/Administrative/Setup/Shipping/shipping-config" element={<ShippingConfiguration />} />
//             <Route path="/Administrative/Settings/roles-permission" element={<RolesPermissions />} />
//             <Route path="/Administrative/Settings/add-roles" element={<AddRoleAndPremissions />} />
//             <Route path="/Administrative/Settings/prefixes" element={<Prefixes />} />
//             <Route path="/Administrative/Settings/account-settings/profile" element={<Profile />} />
//             <Route path="/Administrative/Settings/account-settings/profile/change-profile" element={<ChangePassword />} />
//             <Route path="/Administrative/Website-Setup/sliders" element={<Sliders />} />
//             <Route path="/Administrative/Website-Setup/add-sliders" element={<AddSlider />} />
//             <Route path="/Administrative/Website-Setup/meta" element={<Meta />} />
//             <Route path="/Administrative/Website-Setup/add-meta" element={<AddMeta />} />

//             <Route path="/Administrative/Trash/deleted-orders" element={<DeletedOrders />} />
//             <Route path="/Administrative/Trash/deleted-products" element={<DeletedProducts />} />
//             <Route path="/Administrative/Trash/deleted-categories" element={<DeletedCategories />} />

//             <Route path="/Admin/view-order-details" element={<ViewOrderDetails />} />
//             <Route path="/Admin/view-invoice-details" element={<ViewInvoiceDetails />} />
//             <Route path="/Admin/view-and-update-status" element={<ViewAndUpdateStatus />} />

//           </Route>

//         </Routes>
//       </Sidebar>
//     </Router>
//   );
// }

// export default App;
