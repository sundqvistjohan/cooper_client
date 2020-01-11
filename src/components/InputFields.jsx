import React from "react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <div className="ui inverted form">
      <p>The Cooper physical fitness test is performed by running as far as you can in 12 minutes. After performing the test enter your achieved distance, your gender and your age below to receive your fitness rating.</p>
      <div className="three fields">
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
            className="ui fluid dropdown"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="field">
          <label>Age</label>
          <input onChange={onChangeHandler} name="age" id="age"></input>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
