import React from 'react';
import Table from "../../Table/Table";
import { Link } from "react-router-dom";

const RecentActivitiesTable = () => {

const columns = ['Invoice No', 'Date', 'Client', 'Subtotal', 'Net Total'];
const data = [
  {'Invoice No': <Link className="ancher-text" to="" target="_blank" rel="noopener noreferrer">INV-57292747</Link>, Date: 'Jun 16 2023', Client: 'Kyjuan Broqn	' , Subtotal: '$20.05	' , 'Net Total': '$20.05'},
  {'Invoice No': <Link className="ancher-text" to="" target="_blank" rel="noopener noreferrer">INV-57292747</Link>, Date: 'Jun 16 2023', Client: 'Kyjuan Broqn	' , Subtotal: '$20.05	' , 'Net Total': '$20.05'},
  
];

  return (
    <>
      <Table title="Recent Activities" columns={columns} data={data} />
    </>
  )
}

export default RecentActivitiesTable;
