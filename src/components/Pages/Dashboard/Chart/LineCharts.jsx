import React from 'react';
import './LineCharts.css';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 200, earn: 200,},
  { name: 'Feb', sales: 300, earn: 400,},
  { name: 'Mar', sales: 700, earn: 800,},
  { name: 'Apr', sales: 400, earn: 600,},
  { name: 'May', sales: 600, earn: 300,},
  { name: 'Jun', sales: 350, earn: 700,},
  { name: 'Jul', sales: 900, earn: 500,},
  { name: 'Aug', sales: 400, earn: 500,},
  { name: 'Sep', sales: 350, earn: 350,},
  { name: 'Oct', sales: 500, earn: 450,},
  { name: 'Nov', sales: 750, earn: 300,},
  { name: 'Dec', sales: 650, earn: 900,},

];

const LineCharts = () => {
  return (
    <>
      <div className="chart-bg p-3">
          <h3 className='card-title'>Sale & Earn Monthly</h3>
          <hr/>
          <ResponsiveContainer  height={350}>
            <LineChart width={100} height={100} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#008000" strokeWidth={2} />
              <Line type="monotone" dataKey="earn" stroke="#ff1b1b" strokeWidth={2}/>
            </LineChart>
          </ResponsiveContainer>
        </div>
    </>
  );
}

export default LineCharts;
