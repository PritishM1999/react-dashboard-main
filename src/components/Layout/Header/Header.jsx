import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="header-bg">
        <div className="container-fluid plr-24">
          <Navbar />
        </div>
      </header>
    </>
  );
};

export default Header;
