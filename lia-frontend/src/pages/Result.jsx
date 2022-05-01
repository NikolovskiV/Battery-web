import React, { useState, useEffect } from "react";
import Styles from "./BatteryTools.module.css";

function Result() {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getFilterData();
  }, []);

  const getFilterData = async (e) => {
    const bodyFormData = new FormData();
    setLoadingUpload(true);
    var objectData = {
      outdoor: "Y",
      family: "Li Primary",
    };
    try {
      const { data } = await Axios.post("/api/bateries/filter", objectData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response : ", data);

      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div className="mybox">
      <h2 className={Styles.sectionTitle}>Battery selection guide</h2> <h6 className={Styles.sectionTitle}>Our suggestion</h6>
      <div className="container-infor">
        <div className="res-info">
          <p>
            Down below are different suggestion reflecting the selection you have made. If you are unsure of any of the details, don't hesitate to
            contact us
          </p>
        </div>
        <div>
          <button className="big-button-contact">
            Contact us <br /> &rarr;
          </button>
        </div>
      </div>
      <div className="container-info">
        <div>
          <img className="imgresult" src="images/bateri.jpeg" alt="imgone" />
        </div>
        <div className="res-searc">
          <h3 className="new-title">Suggestion No. 1</h3>
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
