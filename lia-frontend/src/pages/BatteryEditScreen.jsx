import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailsBattery, updateBattery } from "../actions/batteryActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { BATTERY_UPDATE_RESET } from "../constants/batteryConstants";

function BatteryEditScreen() {
  const { id } = useParams();
  const batteryId = id; // props.match.params.id;
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [family, setFamily] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [supplier, setSupplier] = useState("");
  const [name, setName] = useState("");
  const [outdoor, setOutdoor] = useState("");
  const [capacity, setCapacity] = useState("");
  const [maxCurrent, setMaxCurrent] = useState("");
  const [model, setModel] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [diameter, setDiameter] = useState("");
  const [nominalVoltage, setNominalVoltage] = useState("");
  const [minTemperature, setMinTemperature] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");

  const batteryDetails = useSelector((state) => state.batteryDetails);
  const { loading, error, battery } = batteryDetails;

  const batteryUpdate = useSelector((state) => state.batteryUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = batteryUpdate;

  const dispatch = useDispatch();

  let navigate = useNavigate();
  useEffect(() => {
    if (successUpdate) {
      navigate("/product");
    }
    if (!battery || battery._id !== batteryId || successUpdate) {
      dispatch({ type: BATTERY_UPDATE_RESET });
      dispatch(detailsBattery(batteryId));
    } else {
      setImage(battery.image);
      setType(battery.type);
      setFamily(battery.family);
      setChemistry(battery.chemistry);
      setSupplier(battery.supplier);
      setName(battery.name);
      setOutdoor(battery.outdoor);
      setCapacity(battery.capacity);
      setMaxCurrent(battery.maxCurrent);
      setModel(battery.model);
      setWeight(battery.weight);
      setHeight(battery.height);
      setDiameter(battery.diameter);
      setNominalVoltage(battery.nominalVoltage);
      setMinTemperature(battery.minTemperature);
      setMaxTemperature(battery.maxTemperature);
    }
  }, [battery, dispatch, batteryId, successUpdate, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateBattery({
        _id: batteryId,
        image,
        type,
        family,
        chemistry,
        supplier,
        name,
        outdoor,
        capacity,
        maxCurrent,
        model,
        weight,
        height,
        diameter,
        nominalVoltage,
        minTemperature,
        maxTemperature,
      })
    );
  };

  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/uploads", bodyFormData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  return (
    <div>
      <form className="form-one" onSubmit={submitHandler}>
        <div>
          <h1>Edit Battery {batteryId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="image">Image</label>
              <input
                className="input-one"
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Image File</label>
              <input
                className="input-one"
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <input
                className="input-one"
                id="type"
                type="text"
                placeholder="Enter type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="family">Family</label>
              <input
                className="input-one"
                id="family"
                type="text"
                placeholder="Enter family"
                value={family}
                onChange={(e) => setFamily(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="chemistry">Chemistry</label>
              <input
                className="input-one"
                id="chemistry"
                type="text"
                placeholder="Enter chemistry"
                value={chemistry}
                onChange={(e) => setChemistry(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="supplier">Supplier</label>
              <input
                className="input-one"
                id="supplier"
                type="text"
                placeholder="Enter supplier"
                value={supplier}
                onChange={(e) => setSupplier(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                className="input-one"
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="outdoor">Outdoor</label>
              <input
                className="input-one"
                id="outdoor"
                type="text"
                placeholder="Enter outdoor"
                value={outdoor}
                onChange={(e) => setOutdoor(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="capacity">Capacity</label>
              <input
                className="input-one"
                id="capacity"
                type="text"
                placeholder="Enter capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="maxCurrent">Max Current</label>
              <input
                className="input-one"
                id="maxCurrent"
                type="text"
                placeholder="Enter current"
                value={maxCurrent}
                onChange={(e) => setMaxCurrent(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="model">Model</label>
              <input
                className="input-one"
                id="model"
                type="text"
                placeholder="Enter model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="weight">Weight</label>
              <input
                className="input-one"
                id="weight"
                type="text"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="height">Height</label>
              <input
                className="input-one"
                id="height"
                type="text"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="diameter">Diameter</label>
              <input
                className="input-one"
                id="diameter"
                type="text"
                placeholder="Enter diameter"
                value={diameter}
                onChange={(e) => setDiameter(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="nominalVoltagee">Nominal Voltage</label>
              <input
                className="input-one"
                id="nominalVoltage"
                type="text"
                placeholder="Enter nominalVoltage"
                value={nominalVoltage}
                onChange={(e) => setNominalVoltage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="minTemperature">Min Temperature</label>
              <input
                className="input-one"
                id="minTemperature"
                type="text"
                placeholder="Enter minTemperature"
                value={minTemperature}
                onChange={(e) => setMinTemperature(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="maxTemperature">Max Temperature</label>
              <input
                className="input-one"
                id="maxTemperature"
                type="text"
                placeholder="Enter maxTemperaturee"
                value={maxTemperature}
                onChange={(e) => setMaxTemperature(e.target.value)}
              ></input>
            </div>
            <div>
              <label></label>
              <button id="buttonnn" className="primaryy blockk" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default BatteryEditScreen;
