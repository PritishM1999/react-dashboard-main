import React from 'react';
import Table from "../../Table/Table";
//import UserImg from "../../../../assets/user.jpg";

const TopClients = () => {
  const columns = ['Client', 'Sales', 'Total'];
  const data = [
    {
    //   image: UserImg,
      Client: 'Kyjuan Broqn',
      Sales: '7 Sales',
      Total: '$60.05',
    },
    {
        //image: UserImg,
        Client: 'john Broqn',
        Sales: '2 Sales',
        Total: '$25.05',
      },
    // Add more data rows here
  ];

  return (
    <>
      <Table
        title="Top 5 Clients(2023)"
        columns={columns}
        data={data}
        renderCell={(row, column) => {
          if (column === columns[0]) {
            return (
              <td>
                <div className="">
                  <img
                    className="rounded-circle"
                    src={row.image}
                    alt="user"
                  />
                </div>
              </td>
            );
          } else {
            return <td>{row[column]}</td>;
          }
        }}
      />
    </>
  );
};

export default TopClients;
