import React from "react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <div className="ui form">
      <div className="field">
        <label>Distance</label>
        <input
          onChange={onChangeHandler}
          name="distance"
          id="distance"
        ></input>
      </div>
      <div className="field">
        <label>Gender</label>
        <select 
          onChange={onChangeHandler} 
          name="gender" 
          id="gender"
          className="ui fluid dropdown">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
      <div className="field">
        <label>Age</label>
        <input onChange={onChangeHandler} name="age" id="age"></input>
      </div>
    </div>
  );
};

export default InputFields;
