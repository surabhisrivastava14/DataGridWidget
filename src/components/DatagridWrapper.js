import React, { createElement } from "react";
import "../ui/DataGridLearning.css";

const DatagridWrapper = ({ children }) => {
    return (
        <div
            className="data-grid-wrapper"
            style={{
                marginTop: "3%",
                width: "700px",
                height: "75%",
                overflowY:"scroll"
            }}
        >
            {children}
        </div>
    );
};

export default DatagridWrapper;
