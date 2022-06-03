import "./App.css";
import React, { useState } from "react";
import Papa from "papaparse";

export const App = () => {
  const [headerRow, setHeaderRow] = useState([]);
  const [dataRows, setDataRows] = useState([]);

  const handleOnChange = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        const headerData = [];
        const tableData = [];

        results.data.map((item) => {
          headerData.push(Object.keys(item));
          tableData.push(Object.values(item));
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
          <input
            type="file"
            name="file"
            accept=".csv"
            placeholder="Please choose CSV file"
            onChange={handleOnChange}
          />
          <div>
            {!!headerRow.length && (
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
          </div>
        </div>
        <div>Section 2</div>
      </div>
    </div>
  );
};
