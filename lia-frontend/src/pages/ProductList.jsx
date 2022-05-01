import React, { useEffect } from "react";
import Battery from "../components/Battery";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { createBattery, listBattery } from "../actions/batteryActions";
import { BATTERY_CREATE_RESET } from "../constants/batteryConstants";
import { useNavigate } from "react-router-dom";

function ProductList(props) {
  const batteryList = useSelector((state) => state.batteryList);
  const { loading, error, batterys } = batteryList;
  let navigate = useNavigate();
  const batteryCreate = useSelector((state) => state.batteryCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    battery: createdBattery,
  } = batteryCreate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: BATTERY_CREATE_RESET });
      navigate(`/battery/${createdBattery._id}/edit`);
    }
    dispatch(listBattery());
  }, [createdBattery, dispatch, navigate, successCreate]);

  const createHandler = () => {
    dispatch(createBattery());
  };
  return (
    <div>
      <h1 className="title">Batteries</h1>
      <div className="roww">
        <button
          type="button"
          id="buttonn"
          className="primaryy blockk"
          onClick={createHandler}
        >
          Create Battery
        </button>
      </div>
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {batterys.map((battery) => (
            <Battery key={battery._id} battery={battery} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
