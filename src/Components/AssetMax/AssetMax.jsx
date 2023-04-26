import React, { useState }  from 'react'
import './AssetMax.css'

const AssetMax = () => {

  const Dashboard = () => {
  const [costCenter, setCostCenter] = useState();
  const [costError, setCostError] = useState(false);

  const handleCost = (e) => {
    let cost = e.target.value;
    if (cost.length < 3) {
      setCostError(true);
    } else {
      setCostCenter(cost);
      setCostError(false);
    }
  };

  const [activeDiv, setActiveDiv] = useState(1);

  const handleDivClick = (id) => {
    setActiveDiv(id);
  };

  const handleSubmit = () => {
    console.log("submitted");
  };


  return (
   


    <div className="sub_Heading">
        <h1>Asset Purchase</h1>
        <button>Back</button>
      </div>
      {/* ----------------form_container--------------- */}
      <form action="" className="formContainer">
        <div
          className={`inputBox ${activeDiv === 1 ? "active" : ""}`}
          onClick={() => handleDivClick(1)}
        >
          <label htmlFor="">Group Company</label>
          <div>
            <select name="GroupCompany" id="" required>
              <option value="">IT</option>
              <option value="">Sales</option>
              <option value="">Marketing</option>
            </select>
          </div>
        </div>
        <div
          className={`inputBox ${activeDiv === 2 ? "active" : ""}`}
          onClick={() => handleDivClick(2)}
        >
          <label htmlFor="">Company</label>
          <div>
            <select name="" id="" required>
              <option value="">IT</option>
              <option value="">Sales</option>
              <option value="">Marketing</option>
            </select>
          </div>
        </div>
        <div
          className={`inputBox ${activeDiv === 3 ? "active" : ""}`}
          onClick={() => handleDivClick(3)}
        >
          <label htmlFor="">Cost Center</label>
          <div>
            <input type="text" onChange={handleCost} value={costCenter} />
            {costError ? (
              <span style={{ color: "red" }}>
                Name should be more than 3 character
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className={`inputBox ${activeDiv === 4 ? "active" : ""}`}
          onClick={() => handleDivClick(4)}
        >
          <label htmlFor="">Location</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div
          className={`inputBox ${activeDiv === 5 ? "active" : ""}`}
          onClick={() => handleDivClick(5)}
        >
          <label htmlFor="">Voucher Type</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div
          className={`inputBox ${activeDiv === 6 ? "active" : ""}`}
          onClick={() => handleDivClick(6)}
        >
          <label htmlFor="">Voucher No</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div
          className={`inputBox ${activeDiv === 7 ? "active" : ""}`}
          onClick={() => handleDivClick(7)}
        ></div>
    
  )
}

export default AssetMax





