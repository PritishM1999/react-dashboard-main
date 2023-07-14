import React from "react";
import "./Search.css";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Search = () => {
  return (
    <>
      <form className="search w-50 " action="#">
        <div className="search-icon">
          <CiSearch />
        </div>
        <input type="text" placeholder="Search.." name="Search" />
        <div className="nav-search-filter">
          <HiOutlineAdjustmentsHorizontal />
        </div>
      </form>
    </>
  );
};

export default Search;
