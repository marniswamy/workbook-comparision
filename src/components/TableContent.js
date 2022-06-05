import React, { useState } from "react";
import ReactJson from "react-json-view";

export const TableContant = ({ headerRow, dataRows, csvData }) => {
  const [showRawData, setShowRawData] = useState(false);

  return (
    <div>
      <section>
        <button
          className="show-button"
          onClick={() => {
            setShowRawData(!showRawData);
          }}
          disabled={!headerRow.length}
        >
          {showRawData ? "Show table format" : "Show Raw Data"}
        </button>
      </section>
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
  );
};
