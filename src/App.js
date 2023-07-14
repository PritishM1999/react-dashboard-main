import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/Layout/Header/Header"
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


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




function App() {
  return (
    <Router>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/testDashboard" element={<Dashboard />} />
          <Route path="/testDashboard/dashboard" element={<Dashboard />} />

          <Route path="/testDashboard/miscellaneous/tasks" element={<Tasks />} />
          <Route path="/testDashboard/miscellaneous/notifications" element={<Notifications />} />
          <Route path="/testDashboard/miscellaneous/blogs" element={<Blogs />} />
          <Route path="/testDashboard/miscellaneous/addBlogs" element={<AddBlog />} />

          <Route path="/testDashboard/Sales/PoS" element={<PoS />} />
          <Route path="/testDashboard/Sales/all-orders" element={<AllOrder />} />

          <Route path="/testDashboard/Sales/subscription-orders" element={<SubsOrder />} />
          <Route path="/testDashboard/Sales/pickup-orders" element={<PickupOrder />} />
          <Route path="/testDashboard/Sales/pos-orders" element={<PosOrder />} />
          <Route path="/testDashboard/Sales/back-orders" element={<BackOrder />} />
          <Route path="/testDashboard/Sales/Invoice-list" element={<InvoiceList />} />

          <Route path="/testDashboard/ProductManager/Inventory/product-inventory" element={<ProductInventory />} />

          <Route path="/testDashboard/ProductManager/Inventory/expired-stocks" element={<ExpiredStocks />} />
          <Route path="/testDashboard/ProductManager/Inventory/expiring-soon" element={<ExpiringSoon />} />
          <Route path="/testDashboard/ProductManager/Inventory/low-stock" element={<LowStock />} />
          <Route path="/testDashboard/ProductManager/Inventory/stockout-products" element={<StockoutProducts />} />

          <Route path="/testDashboard/ProductManager/Products/add-products" element={<AddProducts />} />
          <Route path="/testDashboard/ProductManager/Products/list-products" element={<ListOfProducts />} />

          <Route path="/testDashboard/ProductManager/Products/categories" element={<Categories />} />
          <Route path="/testDashboard/ProductManager/Products/add-categories" element={<AddCategories />} />

          <Route path="/testDashboard/ProductManager/Products/brands" element={<Brands />} />
          <Route path="/testDashboard/ProductManager/Products/add-brands" element={<AddBrand />} />

          <Route path="/testDashboard/ProductManager/Products/brands" element={<Brands />} />
          <Route path="/testDashboard/ProductManager/Products/units" element={<Units />} />
          <Route path="/testDashboard/ProductManager/Products/add-unit" element={<AddUnit />} />
          <Route path="/testDashboard/ProductManager/Products/suppliers-list" element={<Suppliers />} />
          <Route path="/testDashboard/ProductManager/Products/add-supplierslist" element={<AddSuppliers />} />
          <Route path="/testDashboard/ProductManager/Products/show-reviews" element={<ProductReiews />} />
          <Route path="/testDashboard/ProductManager/Products/set-alerts" element={<SetAlerts />} />

          <Route path="/testDashboard/People/GeneralCustomers/add-customers" element={<CustomerForm />} />
          <Route path="/testDashboard/People/GeneralCustomers/all-customers" element={<AllCustomers />} />
          <Route path="/testDashboard/People/GeneralCustomers/deleted-customers" element={<DeletedCustomers />} />
          <Route path="/testDashboard/People/GeneralCustomers/edit-customers" element={<EditCustomers />} />

          <Route path="/testDashboard/Marketing-Promotions/product-wishlist" element={<ProductWishlist />} />
          <Route path="/testDashboard/Marketing-Promotions/product-wishlist/add-to-products" element={<AddtoWislist />} />
          <Route path="/testDashboard/Marketing-Promotions/all-subscribers" element={<AllSubscribers />} />

          <Route path="/testDashboard/Marketing-Promotions/subscription-discount" element={<SubscriptionDiscount />} />
          <Route path="/testDashboard/Marketing-Promotions/add-subscription-discount" element={<AddSubscriptionDiscount />} />

          <Route path="/testDashboard/Marketing-Promotions/periodic-discounts" element={<Discount />} />
          <Route path="/testDashboard/Marketing-Promotions/add-periodic-discount" element={<AddPeriodicDiscount />} />

          <Route path="/testDashboard/Marketing-Promotions/coupons" element={<Coupons />} />
          <Route path="/testDashboard/Marketing-Promotions/add-coupons" element={<AddCoupons />} />

          <Route path="/testDashboard/Marketing-Promotions/Marketing/user-searches" element={<UserSearches />} />
          <Route path="/testDashboard/Marketing-Promotions/Marketing/fail-orders" element={<FailOrders />} />
          <Route path="/testDashboard/Marketing-Promotions/Marketing/on-cart" element={<OnCart />} />

          <Route path="/testDashboard/Basic-HR/Employees/list-employees" element={<ListEmployees />} />
          <Route path="/testDashboard/Basic-HR/Employees/add-employees" element={<AddEmployees />} />

          <Route path="/testDashboard/Report/Sales-Report/all-sales" element={<AllSales />} />
          <Route path="/testDashboard/Report/Sales-Report/user-report" element={<UserReport />} />
          <Route path="/testDashboard/Report/Sales-Report/income-report" element={<IncomeReport />} />
          <Route path="/testDashboard/Report/Sales-Report/pos-report" element={<PosReport />} />
          <Route path="/testDashboard/Report/Sales-Report/product-wise-report" element={<ProductWiseReport />} />
          <Route path="/testDashboard/Report/Sales-Report/back-order-report" element={<BackOrderReport />} />
          <Route path="/testDashboard/Report/Sales-Report/subscription-report" element={<SubscriptionReport />} />
          <Route path="/testDashboard/Report/Sales-Report/payment-report" element={<PaymentReport />} />
          <Route path="/testDashboard/Report/Sales-Report/Employee-sales-report" element={<EmployeeSalesReport />} />
          <Route path="/testDashboard/Report/Sales-Report/wishlist-report" element={<WishlistReport />} />

          <Route path="/testDashboard/Administrative/Setup/pick-up-point" element={<PickupPoint />} />
          <Route path="/testDashboard/Administrative/Setup/add-pick-up-point" element={<AddPickupPoint />} />
          <Route path="/testDashboard/Administrative/Setup/Shipping/shipping-config" element={<ShippingConfiguration />} />
          <Route path="/testDashboard/Administrative/Settings/roles-permission" element={<RolesPermissions />} />
          <Route path="/testDashboard/Administrative/Settings/add-roles" element={<AddRoleAndPremissions />} />
          <Route path="/testDashboard/Administrative/Settings/prefixes" element={<Prefixes />} />
          <Route path="/testDashboard/Administrative/Settings/account-settings/profile" element={<Profile />} />
          <Route path="/testDashboard/Administrative/Settings/account-settings/profile/change-profile" element={<ChangePassword />} />
          <Route path="/testDashboard/Administrative/Website-Setup/sliders" element={<Sliders />} />
          <Route path="/testDashboard/Administrative/Website-Setup/add-sliders" element={<AddSlider />} />
          <Route path="/testDashboard/Administrative/Website-Setup/meta" element={<Meta />} />
          <Route path="/testDashboard/Administrative/Website-Setup/add-meta" element={<AddMeta />} />

          <Route path="/testDashboard/Administrative/Trash/deleted-orders" element={<DeletedOrders />} />
          <Route path="/testDashboard/Administrative/Trash/deleted-products" element={<DeletedProducts />} />
          <Route path="/testDashboard/Administrative/Trash/deleted-categories" element={<DeletedCategories />} />

          <Route path="/testDashboard/Admin/view-order-details" element={<ViewOrderDetails />} />
          <Route path="/testDashboard/Admin/view-invoice-details" element={<ViewInvoiceDetails />} />
          <Route path="/testDashboard/Admin/view-and-update-status" element={<ViewAndUpdateStatus />} />






        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;
