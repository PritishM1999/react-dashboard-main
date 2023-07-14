import React from "react";
import "./Cards.css";

const Cards = ({ className, value, title, backgroundColor, icon:Icon, color , iconColor }) => {
  return (
    <>
    <div className="card-component flex-fill">
      <div className="card-component-inner" style={{ backgroundColor: backgroundColor }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="card-details">
            <h3 style={{ color: color }}>{value}</h3>
            <p style={{ color: color }}>{title}</p>
           
          </div>
          <div className={`card-icon ${className}`} style={{ color: iconColor }}>
            <Icon />
          </div>
        </div>
      </div>
    </div>

    
    </>
  );
};

export default Cards;
