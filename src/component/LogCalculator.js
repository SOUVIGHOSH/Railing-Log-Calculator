import React, { useState } from "react";

const LogCalculator = () => {
  const [logLength, setLogLength] = useState(0);
  const [logDiameter, setLogDiameter] = useState(0);
  const [logQuantity, setLogQuantity] = useState(0);
  const [lumberPrice, setLumberPrice] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [adminMode, setAdminMode] = useState(false);
  const [newLumberPrice, setNewLumberPrice] = useState(0);

  const calculateCost = () => {
    const length = parseFloat(logLength);
    const diameter = parseFloat(logDiameter);
    const quantity = parseInt(logQuantity);
    const price = parseFloat(lumberPrice);

    if (
      !isNaN(length) &&
      !isNaN(diameter) &&
      !isNaN(quantity) &&
      !isNaN(price) &&
      length > 0 &&
      diameter > 0 &&
      quantity > 0 &&
      price > 0
    ) {
      const logVolume = Math.PI * Math.pow(diameter / 2, 2) * length;
      const totalVolume = logVolume * quantity;
      const cost = totalVolume * price;

      setTotalCost(cost.toFixed(2));
    } else {
      setTotalCost(0);
    }
  };

  const saveLumberPrice = () => {
    const price = parseFloat(newLumberPrice);

    if (!isNaN(price) && price > 0) {
      setLumberPrice(price);
      setAdminMode(false);
    }
  };

  return (
    <div className="container">
      <h2 className="mt-3">Log Calculator</h2>
      <form className="mt-3">
        <div className="mb-3">
          <label className="form-label">Log Length (in feet):</label>
          <input
            type="number"
            className="form-control"
            value={logLength}
            onChange={(e) => setLogLength(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Log Diameter (in inches):</label>
          <input
            type="number"
            className="form-control"
            value={logDiameter}
            onChange={(e) => setLogDiameter(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Logs:</label>
          <input
            type="number"
            className="form-control"
            value={logQuantity}
            onChange={(e) => setLogQuantity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Lumber Price (per cubic foot):</label>
          <input
            type="number"
            className="form-control"
            readOnly={!adminMode}
            value={lumberPrice}
            onChange={(e) => setLumberPrice(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={calculateCost}
        >
          Calculate
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setAdminMode(true)}
        >
          Admin
        </button>
      </form>
      {totalCost > 0 && (
        <div className="mt-3">
          <p>Total Cost: ${totalCost}</p>
        </div>
      )}

      {adminMode && (
        <div className="mt-4">
          <h3>Admin Mode</h3>
          <div className="mb-3">
            <label className="form-label">
              New Lumber Price (per cubic foot):
            </label>
            <input
              type="number"
              className="form-control"
              value={newLumberPrice}
              onChange={(e) => setNewLumberPrice(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={saveLumberPrice}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default LogCalculator;
