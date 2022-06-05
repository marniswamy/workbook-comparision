import React, { useState } from "react";
import ReactJson from "react-json-view";

export const TableContant = ({ arrayData = [] }) => {
  const [showRawData, setShowRawData] = useState(false);
  const header = arrayData.map((item) => Object.keys(item));
  const bodyData = arrayData.map((item) => Object.values(item));

  return (
    <div>
      <section>
        <button
          className="show-button"
          onClick={() => {
            setShowRawData(!showRawData);
          }}
          disabled={!header.length}
        >
          {showRawData ? "Show table format" : "Show Raw Data"}
        </button>
      </section>
      {!showRawData && !!header.length && (
        <table>
          <thead>
            <tr>
              {header[0].map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData.map((value, index) => {
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
      {showRawData && <ReactJson src={arrayData} />}
    </div>
  );
};
