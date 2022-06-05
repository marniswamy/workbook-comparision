import React, { useState } from "react";
import { JSONView } from "../JSONView/JSONView";
import { TableView } from "../TableView/TableView";

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
        <TableView
          showRawData={showRawData}
          header={header}
          bodyData={bodyData}
        />
        <JSONView showRawData={showRawData} arrayData={arrayData} />
      </div>
    </React.Fragment>
  );
};
