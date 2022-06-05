import React from "react";
import ReactJson from "react-json-view";

/**
 * JSONView component used to display the array data in the
 * form of JSON tree for this I am using the react-json-view
 * npm pCKgw to use the advance features like formatting
 * and themeing
 *
 * @param {*} param - props as a param
 * @returns the component
 */
export const JSONView = ({ showRawData, arrayData }) => {
  if (!showRawData) {
    return null;
  }

  return <ReactJson src={arrayData} />;
};
