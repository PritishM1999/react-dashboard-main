import React from "react";
import "./Table.css";

function Table({ title, columns, data }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-lg-12 col-md-12 d-flex align-items-center">
              <h4 className="card-title">{title}</h4>
            </div>
          </div>
        </div>
        <div className="card-content collapse show">
          <div className="main-body2">
            <div className="table-responsive">
              <table className="table table-sm border-1">
                <thead>
                  <tr className="text-white bg-dark-secondary">
                    <th>#</th>
                    {columns.map((column, index) => (
                      <th key={index}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      {columns.map((column, columnIndex) => (
                        <td key={columnIndex}>{row[column]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Table;
