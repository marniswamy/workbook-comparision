import React from "react";

/**
 * TableView component is used to render the data in the table format
 *
 * @param {*} header and body contents as array
 * @returns
 */
export const TableView = ({ showRawData, header = [], bodyData = [] }) => {
  // If user enables JSOV view the it wont be displayed
  if (showRawData) {
    return null;
  }

  if (!header.length) {
    return <p>Please wait...</p>;
  }

  return (
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
  );
};
