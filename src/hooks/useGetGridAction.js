import React, { createElement } from "react";

const useGetGridAction = props => {
    //destruct
    const { add, edit, remove, payload :{displayValue:data, setValue:setPayload} } = props;

    const onAdd = () => {
        if (add && add.canExecute) {
            add.execute();
        }
    };
    const onEdit = () => {
        if (edit && edit.canExecute) {
            edit.execute();
        }
    };
    const onRemove = () => {
        if (remove && remove.canExecute) {
            remove.execute();
        }
    };

    let payload = "";
    if(data.status === "available"){
        payload = data;
    }

    return {
        onAdd,
        onEdit,
        onRemove,
        payload,
        setPayload
    };
};

export default useGetGridAction;
