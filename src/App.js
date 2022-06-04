import "./App.css";
import React, { useState } from "react";
import Papa from "papaparse";
import { TableContant } from "./components/TableContent";

export const App = () => {
  const [csvData, setcsvData] = useState([]);
  const [headerRow, setHeaderRow] = useState([]);
  const [dataRows, setDataRows] = useState([]);

  const handleCsvSelect = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const headerData = [];
        const tableData = [];
        setcsvData(results.data);
        console.table(results.data);
        results.data.map((item) => {
          headerData.push(Object.keys(item));
          return tableData.push(Object.values(item));
        });

        setHeaderRow(headerData[0]);
        setDataRows(tableData);
      },
    });
  };

  const handlePnrSelect = (event) => {
    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);

    reader.onload = function () {
      console.table(reader.result);
      console.log(reader.result.split(" "));
    };
    reader.onerror = function () {
      console.log(reader.error);
    };
  };

  return (
    <div className="wrapper">
      <h1>File comparison and formatting</h1>
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
          <TableContant
            headerRow={headerRow}
            csvData={csvData}
            dataRows={dataRows}
          />
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
          <TableContant
            headerRow={headerRow}
            csvData={csvData}
            dataRows={dataRows}
          />
        </div>
      </div>
    </div>
  );
};
