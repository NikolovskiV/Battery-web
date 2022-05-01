import { React, useEffect, useState } from "react";
import MarketChart from "../components/statistics/MarketChart";
import axios from "axios";
import ApplicationChart from "../components/statistics/ApplicationChart";
import Styles from "./Statistics.module.css";
import "table2excel";

function Statistics() {
  const Table2Excel = window.Table2Excel;
  const [markets, setMarket] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function getStatistics() {
      const statisticsRes = await axios.get(
        "http://localhost:3000/statistics/"
      );
      setMarket(statisticsRes.data);
      setApplications(statisticsRes.data);
      buildSimulation(statisticsRes.data);
    }

    function buildSimulation(statistics) {
      var table = document.getElementById("table-body");

      for (var i = 0; i < statistics.length; i++) {
        var row = `<tr>
                  <td>${statistics[i].market}</td>
                  <td>${statistics[i].application}</td>
                  <td>${statistics[i].items}</td>
                  <td>${statistics[i].current}</td>
                  <td>${statistics[i].serviceLife}</td>
                  <td>${statistics[i].time}</td>
                </tr>`;
        table.innerHTML += row;
      }
    }
    getStatistics();
  }, []);

  async function exportExcel(e) {
    e.preventDefault();

    var table2excel = new Table2Excel();
    table2excel.export(document.querySelectorAll("#excel-table"));
  }

  return (
    <div>
      <h1 className="titleSta">Statistics Page</h1>
      <div className="charts">
        <MarketChart markets={markets} />
        <ApplicationChart applications={applications} />
      </div>
      <div className={Styles.statbody}>
        <button className="log-btn-thr" onClick={exportExcel}>
          <i className="fas fa-download"> Export to Excel</i>
        </button>
        <table className={Styles.tableS} id="excel-table">
          <thead>
            <tr>
              <th>Market</th>
              <th>Application</th>
              <th>Items</th>
              <th>Current</th>
              <th>Service Life</th>
              <th>Time Stamp</th>
            </tr>
          </thead>
          <tbody id="table-body"></tbody>
        </table>
      </div>
    </div>
  );
}

export default Statistics;
