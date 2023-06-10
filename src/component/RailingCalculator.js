import React, { useState } from "react";

const RailingCalculator = () => {
  const [railingLength, setRailingLength] = useState(0);
  const [spacingBetweenSpindles, setSpacingBetweenSpindles] = useState(0);
  const [numberOfSpindles, setNumberOfSpindles] = useState(0);
  const [distanceBetweenSpindles, setDistanceBetweenSpindles] = useState(0);

  const calculate = () => {
    const length = parseFloat(railingLength);
    const spacing = parseFloat(spacingBetweenSpindles);

    if (!isNaN(length) && !isNaN(spacing) && length > 0 && spacing > 0) {
      const numSpindles = Math.floor(length / spacing) + 1;
      const distBetweenSpindles = length / (numSpindles - 1);

      setNumberOfSpindles(numSpindles);
      setDistanceBetweenSpindles(distBetweenSpindles.toFixed(2));
    } else {
      setNumberOfSpindles(0);
      setDistanceBetweenSpindles(0);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-3">Railing Calculator</h2>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Railing Length (in feet):</label>
          <input
            type="number"
            className="form-control"
            value={railingLength}
            onChange={(e) => setRailingLength(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Spacing Between Spindles (in inches):
          </label>
          <input
            type="number"
            className="form-control"
            value={spacingBetweenSpindles}
            onChange={(e) => setSpacingBetweenSpindles(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={calculate}>
          Calculate
        </button>
      </form>
      {numberOfSpindles > 0 && (
        <div className="mt-3">
          <p>Number of Spindles: {numberOfSpindles}</p>
          <p>Distance Between Spindles: {distanceBetweenSpindles} feet</p>
        </div>
      )}
    </div>
  );
};

export default RailingCalculator;
