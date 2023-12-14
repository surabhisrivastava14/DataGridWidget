import React, { createElement } from "react";
import "../ui/DataGridLearning.css";

const DataGridHeader = ({ product }) => {
    return (
        <div
            className="data-grid-header"
            style={{
                display: "flex",
                justifyContent: "space-around",
                padding: "3px",
                fontWeight: "bold",
            }}
        >
            {Object.keys(product).map(key => {
                return (
                    <div
                        style={{
                            flex: "1 1 0px",
                            textAlign: "center"
                        }}
                    >
                        {key}
                    </div>
                );
            })}
        </div>
    );
};

export default DataGridHeader;
