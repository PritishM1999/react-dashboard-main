import React from 'react';
import Cards  from "./Cards/Cards";
import "./Dashboard.css";
import {BiBarChartSquare} from "react-icons/bi";
import {AiOutlineDollarCircle} from "react-icons/ai";
import RecentActivitiesTable from './TableData/RecentActivitiesTable';
import LineCharts from './Chart/LineCharts';
import TopClients from './TableData/TopClients';

const Dashboard = () => {
  return (
    <>
     <div className='main-content'>
      <section className="card-section">
            <div className="row-conatiner mb-4">
             
              <Cards color="#333"  backgroundColor="#fff" title="Total Earning" value="$12,514.00" icon={BiBarChartSquare} iconColor="#673AB7"/>
              <Cards color="#333"  backgroundColor="#fff" title="Total Earning" value="$12,514.00" icon={BiBarChartSquare} iconColor="#FF5722"/>
              <Cards color="#333"  backgroundColor="#fff" title="Total Earning" value="$12,514.00" icon={BiBarChartSquare} iconColor="#118803"/>
              <Cards color="#333"  backgroundColor="#fff" title="Total Earning" value="$12,514.00" icon={BiBarChartSquare} iconColor="#2196f3"/>
            </div>

            <div className="row-conatiner">
              <Cards  backgroundColor="#673ab7" title="Orders Received" className="iconsize" value="$12,514.00" icon={AiOutlineDollarCircle} color="#fff" iconColor="#ffffff80"/>
              <Cards  backgroundColor="#1e88e5" title="Orders Received" className="iconsize" value="$2,562" icon={AiOutlineDollarCircle} color="#fff" iconColor="#ffffff80"/>
              <Cards  backgroundColor="#ff5e52" title="Orders Received" className="iconsize" value="$12,514.00" icon={AiOutlineDollarCircle} color="#fff" iconColor="#ffffff80"/>
            </div>
        </section>
        <section className='mt-4 mb-4'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-12'>
              <RecentActivitiesTable/>
            </div>

            <div className='col-xl-6 col-lg-6 col-md-12'>
              <TopClients/>
            </div>
          </div>
        </section>

        <section className='mt-4 mb-4'>
          <div className='row'>
            <div className='col-xl-12 col-lg-12 col-md-12'>
              <LineCharts/>
            </div>
          </div>
        </section>

     </div>
    </>
  )
}

export default Dashboard;
