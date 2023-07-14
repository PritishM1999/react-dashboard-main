import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/shopnmac-logo.png";
import User from "../../../assets/user.jpg";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";
import Search from "../Header/Search";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiTodoLine } from "react-icons/ri";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between align-itmes-center">
      <div className="left-part d-flex align-items-center w-50 position-relative">
        <Link className="navbar-brand" to="#">
          <img src={Logo} alt="shopnmac logo" className="img-fluid" />
        </Link>

        <Search />
      </div>
      <div className="right-part w-50">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          align-item="center"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "><ExpandCircleDownOutlinedIcon /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item dropdown ml-3">
              <Link
                className="nav-link dropdown-toggle text-pruple pruple-bg"
                to="#"
                id="navbarDropdownMenuLink"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <RiTodoLine className="icon-size" />
              </Link>
              <div
                className="dropdown-menu mt-2"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <p className="p-4">Notifaction design</p>
              </div>
            </li>
            <li className="nav-item dropdown ml-3">
              <Link
                className="nav-link dropdown-toggle text-pruple pruple-bg"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <IoNotificationsOutline className="icon-size" />
              </Link>
              <div
                className="dropdown-menu p-0"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div className="notification">
                  <h3>
                    All Notification <span className="badge badge-danger ml-3">02</span>
                  </h3>
                  <hr className="mb-0" />
                  <div className="notification-list">
                    <ul>
                      <li>
                        <div className="multilist-item d-flex justify-content-between align-items-center">
                          <div className="multilist-user">
                            <img
                              src={User} alt="user"
                              className="user-profile"
                            />
                            <span className="multilist-text ml-3">
                              John Doe
                            </span>
                          </div>

                          <div className="">
                            <span className="small-text">
                              2 min ago
                            </span>

                          </div>

                        </div>
                        <p className="small-text ml-5 mt-1">It is a long established fact that a reader will be distracted</p>
                        <div className="ml-5">
                          <span className="badge badge-danger-light">Unread</span>
                          <span className="badge badge-warning-light ml-2">New</span>
                        </div>
                      </li>
                      <li>
                        <div className="multilist-item d-flex justify-content-between align-items-center">
                          <div className="multilist-user">
                            <img
                              src={User} alt="user"
                              className="user-profile"
                            />
                            <span className="multilist-text ml-3">
                              John Doe
                            </span>
                          </div>

                          <div className="">
                            <span className="small-text">
                              2 min ago
                            </span>

                          </div>

                        </div>
                        <p className="small-text ml-5 mt-1">It is a long established fact that a reader will be distracted</p>
                        <div className="ml-5">
                          <span className="badge badge-danger-light">Unread</span>
                          <span className="badge badge-warning-light ml-2">New</span>
                        </div>
                      </li>
                    </ul>

                    <div className="viewall text-center d-flex align-items-center justify-content-center">
                      <Link className="ancher-text pt-3">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown  ml-3">
              <Link
                className="nav-link dropdown-toggle text-skyblue user-bg rounded-26"
                to="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={User} alt="user" className="user-profile mr-3" />{" "}
                <AiOutlineSetting className="icon-size" />
              </Link>
              <div
                className="dropdown-menu mt-2"
                aria-labelledby="navbarDropdownMenuLink"
                id="settings-dropdown"
              >
                <Link className="dropdown-item" to="#">
                  {" "}
                  <AiOutlineSetting className="mr-2" /> Account Setting
                </Link>
                <Link className="dropdown-item" to="#">
                  <BiUser className="mr-2" /> Profile
                </Link>
                <Link className="dropdown-item" to="#">
                  <IoLogOutOutline className="mr-2" /> Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
