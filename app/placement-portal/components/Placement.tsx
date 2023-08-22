import React, { useEffect, useState } from "react";
import "./css/placement.css";
import { useMediaQuery } from "react-responsive";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Placement Statistics',
    },
  },
};


const labels = ['2014-2018', '2015-2019', '2016-2020', '2017-2021', '2018-2022', '2019-2023'];

const data = {
  labels,
  datasets: [
    {
      label: 'Highest Package in LPA',
      data: [10, 10, 17, 17, 15, 26.4],
      minBarLength: 10,
      backgroundColor: 'rgba(56,113,207, 1)',
    },
    {
      label: 'Average Package in LPA',
      data: [3, 3.4, 6.2, 8, 10.7, 12.7],
      minBarLength: 8,
      backgroundColor: 'rgba(219,68,55, 1)',
    },
  ],
};

const Placement = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 340px)" });

  return (
    <div id="placement-record" className="placement-record">
      <div className="why-head">
        <h2 style={{ textAlign: "center" }}>Placement Statistics</h2>
      </div>
      <div className="placement-box">
        <div className="placement-stats">
          <div className="placement-stats-card">
            <div className="stats-header">Placement Statistics - 2023</div>
            <div className="stats-item" style={{ backgroundColor: "#14AAA3" }}>
              <div>
                <span>No. of Students Registered</span>
                <span>58</span>
              </div>
            </div>
            <div className="stats-item" style={{ backgroundColor: "#008000" }}>
              <div>
                <span>No. of Students Selected</span>
                <span>52</span>
              </div>
            </div>
            <div className="stats-item" style={{ backgroundColor: "#FF8C00" }}>
              <div>
                <span>No. of Job Offers</span>
                <span>81</span>
              </div>
            </div>
            <div className="stats-item" style={{ backgroundColor: "#E05194" }}>
              <div>
                <span>% of Students Selected</span>
                <span>89.65%</span>
              </div>
            </div>
            <div className="stats-item" style={{ backgroundColor: "#A52A2A" }}>
              <div>
                <span>Highest Package</span>
                <span>26.41 LPA</span>
              </div>
            </div>
            <div className="stats-item" style={{ backgroundColor: "#F4D03F" }}>
              <div>
                <span>Mean CTC</span>
                <span>12.76 LPA</span>
              </div>
            </div>
            <div className="stats-item" style={{ backgroundColor: "#2AA1A5" }}>
              <div>
                <span>Median CTC</span>
                <span>12 LPA</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="charts"> */}
        {!isMobile ? <div className="charts"><Bar className="graph" data={data} /> </div> : <div className="charts"><img src="/img/graph.png" alt="" /></div>}
        {/* </div> */}
      </div>
      <div className="record-buttons">
        <a className="records" href="#">
          <div >Batch 2019-2023</div>
        </a>
        <a className="records" href="/placement_stats/Batch2018-2022.pdf">
          <div >Batch 2018-2022</div>
        </a>
        <a className="records" href="/placement_stats/Batch%202017-2021.pdf">
          <div >Batch 2017-2021</div>
        </a>
        <a className="records" href="/placement_stats/placement19-20.pdf">
          <div >Batch 2016-2020</div>
        </a>
        <a className="records" href="/placement_stats/placement18-19.pdf">
          <div >Batch 2015-2019</div>
        </a>
        <a className="records" href="/placement_stats/placement17-18.pdf">
          <div >Batch 2014-2018</div>
        </a>
      </div>
    </div>
  );
};

export default Placement;
