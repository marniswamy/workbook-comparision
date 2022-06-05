import "./App.css";
import React, { useState } from "react";
import Papa from "papaparse";
import { TableContant } from "./components/TableContent";
import dataToJson from "data-to-json";

export const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [prnData, setPrnData] = useState([]);

  const handleCsvSelect = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        setCsvData(results.data);
      },
    });
  };

  const handlePnrSelect = (event) => {
    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);
    reader.onload = function() {
      const dataInJSON = dataToJson.txt({ data: reader.result }).toJson();
      setPrnData(dataInJSON);
    };

    reader.onerror = function() {
      console.log(reader.error);
    };
  };

  return (
    <div className="wrapper">
      <h1>File comparison and formatting</h1>
      <div className="compare-text">
        <button>Compare both files</button>
        <p>Both the files are same</p>
      </div>

      <div className="app-container">
        <div>
          <div className="action-row">
            <span>Select csv file: </span>
            <input
              type="file"
              name="file"
              accept=".csv"
              placeholder="Please choose CSV file"
              onChange={handleCsvSelect}
            />
          </div>
          <TableContant arrayData={csvData} />
        </div>
        <div>
          <div className="action-row">
            <span>Select prn file: </span>
            <input
              type="file"
              name="file"
              accept=".prn"
              onChange={handlePnrSelect}
            />
          </div>
          <TableContant arrayData={prnData} />
        </div>
      </div>
    </div>
  );
};
