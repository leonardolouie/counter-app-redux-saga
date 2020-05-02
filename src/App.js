import React from "react";
import { connect } from "react-redux";
import { ageUp, ageDown } from "../src/actions";
import './App.css'


const App = ({ age, dispatch }) => {

  const handleOnAgeUp = () => {
    dispatch(ageUp(1));
  };

  const handleOnAgeDown = () => {
    dispatch(ageDown(5));
  };

  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{age}</span>
      </div>
      <button onClick={handleOnAgeUp}>Age Up</button>
      <button onClick={handleOnAgeDown}>Age Down</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    age: state.age,
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispachToProps)(App);
