import { Doughnut } from "react-chartjs-2";
import { React } from "react";

function ApplicationChart({ applications }) {
  let applicationsTable = [];
  let occTable = [];

  function renderData() {
    let arr = applications;
    let key = "application";
    function findOcc(arr, key) {
      let arr2 = [];

      arr.forEach((x) => {
        if (
          arr2.some((val) => {
            return val[key] === x[key];
          })
        ) {
          arr2.forEach((k) => {
            if (k[key] === x[key]) {
              k["occurrence"]++;
            }
          });
        } else {
          let a = {};
          a[key] = x[key];
          a["occurrence"] = 1;
          arr2.push(a);
        }
      });
      return arr2;
    }

    const mydata = findOcc(arr, key);

    applicationsTable = mydata.map(({ application }) => application);

    occTable = mydata.map(({ occurrence }) => occurrence);
  }

  renderData();

  const data = {
    labels: applicationsTable,
    datasets: [
      {
        label: "Market",
        data: occTable,
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(245, 40, 192, 0.8)",
          "rgba(245, 58, 33, 0.8)",
          "rgba(87, 58, 33, 0.8)",
          "rgba(87, 58, 153, 0.8)",
          "rgba(220, 58, 153, 0.8)",
          "rgba(49, 58, 55, 0.8)",
        ],

        cutout: "10%",
        borderRadius: 50,
      },
    ],
  };

  return (
    <div style={{ width: "1000px", margin: "10px auto" }}>
      <Doughnut data={data} />
    </div>
  );
}

export default ApplicationChart;
