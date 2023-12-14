import React, { createElement } from "react";

const DatagridWidgetWrapper = ({ children }) => {
    return (
        <div
            style={{
                border: "1px solid",
                height: "75%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start"
            }}
        >
            {children}
        </div>
    );
};

export default DatagridWidgetWrapper;
