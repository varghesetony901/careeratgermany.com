import React, { useState } from "react";
import "./GradeCalculator.scss";

function GradeCalculator() {
  const [maxForeignGrade, setMaxForeignGrade] = useState();
  const [minPassingGrade, setMinPassingGrade] = useState();
  const [foreignGrade, setForeignGrade] = useState();
  const [germanGrade, setGermanGrade] = useState();

  const calculateGermanGrade = () => {
    const result =
      ((maxForeignGrade - foreignGrade) / (maxForeignGrade - minPassingGrade)) *
        3 +
      1;
    setGermanGrade(result.toFixed(2));
  };

  return (
    <div className="grade_calc-container">
      <h2>German Grade Calculator</h2>
      <div className="grade_calc_contents">
        <label className="calc-input_fields">
          <p>Maximum Grade in your Grading System :</p>
          <input
            type="number"
            placeholder="Enter a valid number"
            value={maxForeignGrade}
            onChange={(event) => setMaxForeignGrade(event.target.value)}
          />
        </label>

        <label className="calc-input_fields">
          <p>Minimum Grade in your Grading System :</p>
          <input
            type="number"
            placeholder="Enter a valid number"
            value={minPassingGrade}
            onChange={(event) => setMinPassingGrade(event.target.value)}
          />
        </label>

        <label className="calc-input_fields">
          <p>Grade Achieved by you :</p>
          <input
            type="number"
            placeholder="Enter a valid number"
            value={foreignGrade}
            onChange={(event) => setForeignGrade(event.target.value)}
          />
        </label>
        <button className="grade_btn" onClick={calculateGermanGrade}>
          Calculate German Grade
        </button>

        <label className="calc-input_fields">
          <p>German Grade :</p>
          <input
            type="text"
            placeholder="Your grade."
            value={germanGrade}
            readOnly
          />
        </label>
      </div>
    </div>
  );
}

export default GradeCalculator;
