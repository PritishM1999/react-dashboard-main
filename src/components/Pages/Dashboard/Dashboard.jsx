import React, { useState } from "react";
import Cards from "./Cards/Cards";
import "./Dashboard.css";
// import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import RecentActivitiesTable from "./TableData/RecentActivitiesTable";
import LineCharts from "./Chart/LineCharts";
import TopClients from "./TableData/TopClients";
import MainPopup from "./MainPopup/MainPopup";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
// import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import TopLowStocks from "./TableData/LowStockProducts";
import TopNotifications from "./TableData/TopNotificatons";
import RecentSalesOrderExpected from "./TableData/RecentSalesOrderExpected";

import NewOrder from "./TableData/NewOrders";
import LastDeliverd from "./TableData/LastDeliverd";

const Dashboard = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {/* <MainPopup /> */}
      {isPopupVisible && (
        <MainPopup onSave={handleClosePopup} onCancel={handleClosePopup} />
      )}
      {/* Rest of the component code */}

      {/* Dashboard */}
      <div className="main-content">
        <div style={{ display: "flex" }}>
          <i>
            <HomeIcon /> {"-"}{" "}
          </i>
          <h6 style={{ margin: "5px" }}> Shop Nmac Dashboard</h6>
        </div>
        <hr />
        <section className="card-section">
          <div className="row-conatiner mb-4 mt-4">
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total  Sales / Orders"
              value="$12,514.00"
              icon={ShoppingBagOutlinedIcon}
              iconColor="#673AB7"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total Sales Amount"
              value="$12,514.00"
              icon={ShoppingBagOutlinedIcon}
              iconColor="#FF5722"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total Sales of This Month"
              value="$12,514.00"
              icon={ShoppingBagOutlinedIcon}
              iconColor="#118803"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Earning of this month"
              value="$12,514.00"
              icon={AttachMoneyOutlinedIcon}
              iconColor="#2196f3"
            />
          </div>

          {/* secon row */}
          <div className="row-conatiner mb-4">
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total Customers"
              value="$12,514.00"
              icon={PeopleAltOutlinedIcon}
              iconColor="#673AB7"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total Employees"
              value="$12,514.00"
              icon={PeopleAltOutlinedIcon}
              iconColor="#FF5722"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total Subscribers"
              value="$12,514.00"
              icon={ShoppingCartOutlinedIcon}
              iconColor="#118803"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Available Products"
              value="$12,514.00"
              icon={ShoppingCartOutlinedIcon}
              iconColor="#2196f3"
            />
          </div>
          {/* third row */}
          <div className="row-conatiner mb-4">
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total Low Stock"
              value="$12,514.00"
              icon={ShoppingBagOutlinedIcon}
              iconColor="#673AB7"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total Expired Product"
              value="$12,514.00"
              icon={ShoppingBagOutlinedIcon}
              iconColor="#FF5722"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Out of Stock"
              value="$12,514.00"
              icon={ShoppingBagOutlinedIcon}
              iconColor="#118803"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Total Delivered Order"
              value="$12,514.00"
              icon={ShoppingBagOutlinedIcon}
              iconColor="#2196f3"
            />
          </div>

          {/* coloured cards */}
          <div className="row-conatiner">
            <Cards
              backgroundColor="#673ab7"
              title="Orders Received"
              className="iconsize"
              value="$12,514.00"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
            <Cards
              backgroundColor="#1e88e5"
              title="Orders Cancelled"
              className="iconsize"
              value="$2,562"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
            <Cards
              backgroundColor="#ff5e52"
              title="Orders Deliverd"
              className="iconsize"
              value="$12,514.00"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
          </div>
        </section>

        <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <RecentActivitiesTable />
            </div>
          </div>
        </section>
        {/* <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <RecentActivitiesTable />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <TopClients />
            </div>
          </div>
        </section> */}

        <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <LineCharts />
            </div>
          </div>
        </section>

        <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12">
              <LastDeliverd />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12">
              <NewOrder />
            </div>
          </div>
        </section>

        <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <TopClients />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <TopLowStocks />
            </div>
          </div>
        </section>

        <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <TopNotifications />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <RecentSalesOrderExpected />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
