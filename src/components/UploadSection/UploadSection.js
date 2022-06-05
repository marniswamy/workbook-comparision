import React, { useState } from "react";
import { JSONView } from "../JSONView/JSONView";

/**
 * UploadSection component to renders the uploaded file data along
 * with the action
 * @param {*} param0
 * @returns
 */
export const UploadSection = ({ arrayData = [], handleSelect, type }) => {
  const [showRawData, setShowRawData] = useState(false);
  const header = arrayData.map((item) => Object.keys(item));
  const bodyData = arrayData.map((item) => Object.values(item));

  return (
    <React.Fragment>
      <div className="action-row">
        <span>Select {type} file: </span>
        <input
          type="file"
          name="file"
          accept={`.${type}`}
          onChange={handleSelect}
        />
      </div>
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
                    {value.map((item, i) => {
                      return <td key={i}>{item}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <JSONView showRawData={showRawData} arrayData={arrayData} />
      </div>
    </React.Fragment>
  );
};
