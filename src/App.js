import "./App.css";
import React, { useState } from "react";
import Papa from "papaparse";
import { TableContant } from "./components/TableContent";
import dataToJson from "data-to-json";

export const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [prnData, setPrnData] = useState([]);
  const [headerRow, setHeaderRow] = useState([]);
  const [dataRows, setDataRows] = useState([]);

  const [headerRowPrn, setHeaderRowPrn] = useState([]);
  const [dataRowsPrn, setDataRowsPrn] = useState([]);

  const handleCsvSelect = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(results) {
        const headerData = [];
        const tableData = [];
        setCsvData(results.data);
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
    reader.onload = function() {
      const dataInJSON = dataToJson.txt({ data: reader.result }).toJson();
      console.table(dataInJSON);
      setPrnData(dataInJSON);

      const headerData = [];
      const tableData = [];

      dataInJSON.map((item) => {
        headerData.push(Object.keys(item));
        return tableData.push(Object.values(item));
      });

      setHeaderRowPrn(headerData[0]);
      setDataRowsPrn(tableData);
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
            headerRow={headerRowPrn}
            csvData={prnData}
            dataRows={dataRowsPrn}
          />
        </div>
      </div>
    </div>
  );
};
