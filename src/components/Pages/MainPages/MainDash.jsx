import React, { useContext } from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import { SidebarContext } from "../Sidebar/SidebarContext";
import Table from "../Tables/Table";

const MainDash = () => {
  const { sidebarVisible, collapsedSidebarVisible } =
    useContext(SidebarContext);

  const mainCanvasStyle = {
    width: sidebarVisible
      ? collapsedSidebarVisible
        ? "calc(100% - 200px)"
        : "calc(100% - 260px)"
      : "calc(100% - 110px)",
  };

  return (
    <div className="main-canvas2 scroll-container" style={mainCanvasStyle}>
      <div className="Main-Dash">
        {/* <h1>Dashboard</h1> */}
        <Cards />
        <br />
        <br />
        {/* <h1>Table</h1> */}
        <Table />
        <br />
      </div>
    </div>
  );
};

export default MainDash;

// import React, { useContext } from "react";
// import "./MainDash.css";
// import Cards from "../Cards/Cards";
// import { SidebarContext } from "../Sidebar/SidebarContext";

// const MainDash = () => {
//   const { sidebarVisible, collapsedSidebarVisible } =
//     useContext(SidebarContext);

//   return (
//     <div
//       className={`main-canvas2 scroll-container ${
//         sidebarVisible ? "sidebar-visible" : ""
//       } ${collapsedSidebarVisible ? "collapsed-sidebar-visible" : ""}`}
//     >
//       <div className="Main-Dash">
//         <h1>Dashboard</h1>
//         <Cards />
//       </div>
//     </div>
//   );
// };

// export default MainDash;

// import React, { useContext } from "react";
// import "./MainDash.css";
// import Cards from "../Cards/Cards";
// import { SidebarContext } from "../Sidebar/SidebarContext";

// const MainDash = () => {
//   const { sidebarVisible } = useContext(SidebarContext);

//   return (
//     <div
//       className={`main-canvas2 scroll-container ${
//         sidebarVisible ? "sidebar-visible" : ""
//       }`}
//     >
//       <div className="Main-Dash">
//         <h1>Dashboard</h1>
//         <Cards />
//       </div>
//     </div>
//   );
// };

// export default MainDash;

// import React, { useContext } from "react";
// import "./MainDash.css";
// import Cards from "../Cards/Cards";
// import { SidebarContext } from "../Sidebar/SidebarContext";

// const MainDash = () => {
//   const { sidebarVisible } = useContext(SidebarContext);

//   const mainCanvasStyle = {
//     width: sidebarVisible ? "82%" : "92%",
//   };

//   return (
//     <div className="main-canvas2 scroll-container" style={mainCanvasStyle}>
//       <div className="Main-Dash">
//         <h1>Dashboard</h1>
//         <Cards />
//       </div>
//     </div>
//   );
// };

// export default MainDash;

// =================================================================

// import React, { useContext, useEffect, useState } from "react";
// import "./MainDash.css";
// import Cards from "../Cards/Cards";
// import { SidebarContext } from "../Sidebar/SidebarContext";

// const MainDash = () => {
//   const { sidebarVisible } = useContext(SidebarContext);
//   const [canvasWidth, setCanvasWidth] = useState("");

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       const widths = [
//         { threshold: 2650, width: sidebarVisible ? "90vw" : "96vw" },
//         { threshold: 1920, width: sidebarVisible ? "86vw" : "92vw" },
//         { threshold: 1440, width: sidebarVisible ? "82vw" : "92vw" },
//         { threshold: 768, width: sidebarVisible ? "74vw" : "84vw" },
//         { threshold: 425, width: sidebarVisible ? "68vw" : "102vw" },
//         { threshold: 375, width: sidebarVisible ? "68vw" : "116wh" },
//         { threshold: 320, width: sidebarVisible ? "68vw" : "116wh" },
//       ];

//       const matchedWidth = widths.find(
//         (item) =>
//           screenWidth >= item.threshold &&
//           (!item.maxWidth || screenWidth < item.maxWidth)
//       );

//       if (matchedWidth) {
//         setCanvasWidth(matchedWidth.width);
//       } else {
//         setCanvasWidth("");
//       }
//     };

//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [sidebarVisible]);

//   const mainCanvasStyle = {
//     width: canvasWidth,
//   };

//   return (
//     <div className="main-canvas2 scroll-container" style={mainCanvasStyle}>
//       <div className="Main-Dash scroll-container">
//         <h1>Dashboard</h1>
//         <Cards />
//       </div>
//     </div>
//   );
// };

// export default MainDash;

// =======================================================

// import React from "react";
// import "./MainDash.css";
// import Cards from "../Cards/Cards";

// const MainDash = () => {
//   return (
//     <div className="main-canvas2 scroll-container">
//       <div className="Main-Dash">
//         <h1>Dashboard</h1>
//         <Cards />
//         {/* <h1>Dashboard2</h1> */}
//       </div>
//     </div>
//   );
// };

// export default MainDash;
