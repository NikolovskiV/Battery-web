import Axios from "axios";
import React, { useState, useEffect } from "react";
import Styles from "./BatteryTools.module.css";

function Result() {
  const [dataList, setDataList] = useState([]);

  const getFilterData = async (e) => {
    // const bodyFormData = new FormData();
    const objectData = {
      outdoor: "N",
      family: "Li Secondary",
    };
    try {
      const { data } = await Axios.post("/api/bateries/filter", objectData, {
        headers: { "Content-Type": "application/json" },
      });
      for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
      }
      console.log("Response : ", data);
      console.log(data.data.length);
      setDataList(data.data);
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    console.log("callback");
    getFilterData();
    return () => {
      setDataList({});
    };
  }, []);

  return (
    <div className="mybox">
      <h2 className={Styles.sectionTitle}>Battery selection guide</h2>
      <h6 className={Styles.sectionTitle}>Our suggestion</h6>
      <div className="container-infor">
        <div className="res-info">
          <p>
            Down below are different suggestion reflecting the selection you
            have made. If you are unsure of any of the details, don't hesitate
            to contact us
          </p>
        </div>
        <div>
          <button className="big-button-contact">
            Contact us <br /> &rarr;
          </button>
        </div>
      </div>
      {dataList.map((dataListe) => (
        <div className="container-info">
          <div>
            <img className="imgresult" src={dataListe.image} alt="imgone" />
          </div>
          <div className="res-searc">
            <h3 className="new-title">Suggestion No. 1</h3>
            <div>
              <div key={dataList._id} className="result-searc-one">
                <p>
                  <b>Battery name</b>
                  <br />
                  {dataListe.name}
                </p>
                <p className="special">
                  <b>Family</b>
                  <br />
                  {dataListe.family}
                </p>
                <p className="special-two">
                  <b>Supplier</b>
                  <br />
                  {dataListe.supplier}
                </p>
              </div>
              <div className="result-searc">
                <p>
                  <b>Type</b>
                  <br />
                  {dataListe.type}
                </p>
                <p className="special-one">
                  <b>Capacity</b>
                  <br />
                  {dataListe.capacity}
                </p>
              </div>
            </div>
            <button className="big-button-enq">Send enquiry &#9993;</button>
          </div>
        </div>
      ))}
      {/* <div className="container-info">
        <div>
          <img className="imgresult" src="images/battery.jpeg" alt="imgtwo" />
        </div>
        <div className="res-searc">
          <h3 className="new-title">Suggestion No. 2</h3>
          <div>
            <div className="result-searc-one">
              <p>
                <b>Battery solution</b>
                <br />
                CR17450 1S1P with BMS
              </p>
              <p className="special">
                <b>Chemistry</b>
                <br />
                Lithium manganese dioxide
              </p>
              <p className="special-two">
                <b>Expected life time</b>
                <br />
                6-8 years
              </p>
            </div>
            <div className="result-searc">
              <p>
                <b>Working temperature range</b>
                <br />
                22-38 °C
              </p>
              <p className="special-one">
                <b>Maximum discharge current</b>
                <br />
                1500mAh
              </p>
            </div>
          </div>
          <button className="big-button-enq">Send enquiry &#9993;</button>
        </div>
      </div>
      <div className="container-info">
        <div>
          <img className="imgresult" src="images/vector.jpeg" alt="imgtree" />
        </div>
        <div className="res-searc">
          <h3 className="new-title">Suggestion No. 3</h3>
          <div>
            <div className="result-searc-one">
              <p>
                <b>Battery solution</b>
                <br />
                CR17450 1S1P with BMS
              </p>
              <p className="special">
                <b>Chemistry</b>
                <br />
                Lithium manganese dioxide
              </p>
              <p className="special-two">
                <b>Expected life time</b>
                <br />
                10 years
              </p>
            </div>
            <div className="result-searc">
              <p>
                <b>Working temperature range</b>
                <br />
                22-38 °C
              </p>
              <p className="special-one">
                <b>Maximum discharge current</b>
                <br />
                1500mAh
              </p>
            </div>
          </div>
          <button className="big-button-enq">Send enquiry &#9993;</button>
        </div>
      </div> */}
    </div>
  );
}

export default Result;
