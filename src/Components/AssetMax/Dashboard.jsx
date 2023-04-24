import React from "react";
import "./Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [costCenter, setCostCenter] = useState();
  const [costError, setCostError] = useState(false);
  const handleCost = (e) => {
    let cost = e.target.value;
    if(cost.lengt < 3){
        setCostError(true);
    }else{
      costError(false);
    }
  }
  const HandleSubmit =() =>{
    console.log("submmited")
  }
  return (
    <>
      <div className="sub_Heading">
        <h1>Asset Purchase</h1>
        <button>Back</button>
      </div>
              {/* ----------------form_container--------------- */}
      <form action="" className="formContainer">
        <div className="inputBox">
          <label htmlFor="">Group Company</label>
          <div>
            <select name="GroupCompany" id="" required>
              <option value="">IT</option>
              <option value="">Sales</option>
              <option value="">Marketing</option>
            </select>
          </div>
        </div>
        <div className="inputBox" >
          <label htmlFor="">Company</label>
          <div>
            <select name="" id="" required>
              <option value="">IT</option>
              <option value="">Sales</option>
              <option value="">Marketing</option>
            </select>
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Cost Center</label>
          <div>
            <input type="text" onChange={handleCost} value={costCenter}/>
            {costError ? <span style={{color:"red"}}>Name  should be more than 3 character</span> : "" }
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Location</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Voucher Type</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Voucher No</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Voucher Date</label>
          <div>
            <input type="date" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Sanction Note No.</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Supplier Name</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Supplier Inv. No</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Invoice Date</label>
          <div>
            <input type="date" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Custodian</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Pit-To-Use Date</label>
          <div> 
            <input type="date" />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="">Attach Document</label><input type="file" className="File"/>
          <div>
            
          </div>
        </div>
        <button onClick={HandleSubmit}>
          Submit
        </button>
      </form>
      <div className="bo"></div>
    </>
  );
};

export default Dashboard;
