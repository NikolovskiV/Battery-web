import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBattery, detailsBattery } from "../actions/batteryActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { BATTERY_DELETE_RESET } from "../constants/batteryConstants";

function BatteryScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const batteryId = id;     // props.match.params.id;
  const batteryDetails = useSelector((state) => state.batteryDetails);
  const { loading, error, battery } = batteryDetails;

  const batteryDelete = useSelector((state) => state.batteryDelete);
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = batteryDelete;

  let navigate = useNavigate();
  function handleClick() {
    navigate(`/battery/${battery._id}/edit`)
  }

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: BATTERY_DELETE_RESET })
      navigate("/product");
    }
    dispatch(detailsBattery(batteryId));
  }, [dispatch, batteryId, navigate, successDelete])

  const deleteHandler = (battery) => {
    dispatch(deleteBattery(battery._id));
  };

  return (
    <div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="batteryset">
          <Link to="/product">&larr; Back to the product</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={battery.image} alt={battery.name} />
            </div>
            <div key={battery._id} className="col-1">
              <ul className="ull">
                <li className="lii">
                  <h1>{battery.name}</h1>
                </li>
                <li className="lii"><p><b>ID: </b>
                  {battery._id}</p></li>
                <li className="lii"><p><b>Type: </b>
                  {battery.type}</p></li>
                <li className="lii"><p><b>Family: </b>
                  {battery.family}</p></li>
                <li className="lii"><p> <b>Chemistry: </b>
                  {battery.chemistry}</p></li>
                <li className="lii"><p> <b>Supplier: </b>
                  {battery.supplier}</p></li>
                <li className="lii"><p> <b>Outdoor: </b>
                  {battery.outdoor}</p></li>
                <li className="lii"><p> <b>Capacity: </b>
                  {battery.capacity}</p></li>
                <li className="lii"><p><b>Max Current: </b>
                  {battery.maxCurrent} V</p></li>
                <li className="lii"><p><b>Model: </b>
                  {battery.model} V</p></li>
                <li className="lii"><p> <b>Weight: </b>
                  {battery.weight}</p></li>
                <li className="lii"><p><b>Height: </b>
                  {battery.height}</p></li>
                <li className="lii"><p><b>Diameter: </b>
                  {battery.diameter}</p></li>
                <li className="lii"><p><b>Nominal Voltage: </b>
                  {battery.nominalVoltage}</p></li>
                <li className="lii"><p><b>Min Temperature: </b>
                  {battery.minTemperature}</p></li>
                <li className="lii"><p><b>Max Temperature: </b>
                  {battery.maxTemperature}</p></li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      {/* <div className="status">Status</div>
                      <div>
                        {battery.countInStock > 0 ? (<span className="success">In Stock</span>) : (<span className="danger">Unavailable</span>)}
                      </div> */}
                    </div>
                  </li>
                  <li>
                    <button id="button" className="primary block" onClick={handleClick}>Edit</button>
                  </li>
                  <li>
                    <button id="button-one" className="dangerr block" onClick={() => deleteHandler(battery)}>Delete</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default BatteryScreen;

