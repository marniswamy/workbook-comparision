import "./App.css";
import React, { useState } from "react";
import Papa from "papaparse";
import ReactJson from "react-json-view";

export const App = () => {
  const [csvData, setcsvData] = useState([]);
  const [headerRow, setHeaderRow] = useState([]);
  const [dataRows, setDataRows] = useState([]);
  const [showRawData, setShowRawData] = useState(false);

  const handleOnChange = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const headerData = [];
        const tableData = [];
        setcsvData(results.data);
        results.data.map((item) => {
          headerData.push(Object.keys(item));
          return tableData.push(Object.values(item));
        });

        setHeaderRow(headerData[0]);
        setDataRows(tableData);
      },
    });
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
              onChange={handleOnChange}
            />
            <button
              className="show-button"
              onClick={() => {
                setShowRawData(!showRawData);
              }}
            >
              {showRawData ? "Show table format" : "Show Raw Data"}
            </button>
          </div>
          <div>
            {!showRawData && !!headerRow.length && (
              <table>
                <thead>
                  <tr>
                    {headerRow.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dataRows.map((value, index) => {
                    return (
                      <tr key={index}>
                        {value.map((val, i) => {
                          return <td key={i}>{val}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}

            {showRawData && <ReactJson src={csvData} />}
          </div>
        </div>
        <div>Section 2</div>
      </div>
    </div>
  );
};
