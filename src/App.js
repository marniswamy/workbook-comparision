import "./App.css";
import React, { useState } from "react";
import Papa from "papaparse";
import { TableContant } from "./components/TableContent";
import dataToJson from "data-to-json";

export const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [prnData, setPrnData] = useState([]);
  const [message, setMessage] = useState(null);

  const handleFileSelect = ({ target }) => {
    const file = target.files[0];
    const fileType = target.files[0].name.split(".").pop();

    if (fileType.includes("csv")) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function(results) {
          setCsvData(results.data);
        },
      });
    }

    if (fileType.includes("prn")) {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function() {
        const dataInJSON = dataToJson.txt({ data: reader.result }).toJson();
        setPrnData(dataInJSON);
      };

      reader.onerror = function() {
        console.error(reader.error);
      };
    }
  };

  const handleCompare = () => {
    const parseCsvData = JSON.stringify(csvData);
    const parsePrnData = JSON.stringify(prnData);

    if (parseCsvData === parsePrnData) {
      return setMessage("Both the file data is same");
    }
    return setMessage("Both the files are different");
  };

  return (
    <div className="wrapper">
      <h1>File comparison and formatting</h1>
      <div className="compare-text">
        <button
          className="compare-button"
          disabled={!csvData.length || !prnData.length}
          onClick={handleCompare}
        >
          Compare both files
        </button>
        {message && (
          <div className="message">
            {message} <span onClick={() => setMessage(null)}>X</span>
          </div>
        )}
      </div>
      <div className="app-container">
        <div>
          <TableContant
            arrayData={csvData}
            type="csv"
            handleSelect={handleFileSelect}
          />
        </div>
        <div>
          <TableContant
            arrayData={prnData}
            type="prn"
            handleSelect={handleFileSelect}
          />
        </div>
      </div>
    </div>
  );
};
