import React from "react";

function Battery(props) {
  const { battery } = props;
  return (
    <div key={battery._id} className="card">
      <a href={`/battery/${battery._id}`}>
        {/* <!-- image size: 680px by 830px --> */}
        <img className="medium" src={battery.image} alt={battery.name} />
      </a>
      <div className="card-body">
        <a href={`/battery/${battery._id}`}>
          <h4>{battery.name}</h4>
        </a>
        {/* <div className="span">
          {battery.countInStock > 0 ? (
            <span className="success">In Stock</span>
          ) : (
            <span className="danger">Unavailable</span>
          )}
        </div> */}
      </div>
    </div>
  );
}

export default Battery;
