import React, { createElement } from "react";

const DataGridTopBar = ({productDataSource,onAdd,onEdit,onRemove,setPayload,selected}) => {

    const ds = productDataSource;
    const current  = productDataSource.offset;

    const edit = ()=>{
        if(selected){
            setPayload(selected);
            onEdit();
        }
    };
    const remove = ()=>{
        if(selected){
            setPayload(selected);
            onRemove();
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "5px",
                paddingBottom:"5px",
                paddingRight:"15PX",
                paddingLeft:"15px",
                backgroundColor:"white"
            }}
        >
            <div>
            <span role="button"
            style={{
                marginRight:"10px"
            }}
            className="glyphicon glyphicon-chevron-left"
            onClick={()=>current>=10 && ds.setOffset(current-10)}></span>
            <span role="button"
            style={{
                marginRight:"5px"
            }}
            className="glyphicon glyphicon-chevron-right"
            onClick={()=> ds.setOffset(current+10)}></span>
            </div>
            <div>
            <button className="btn btn-light btn-sm" onClick={onAdd}>Add</button>
            <button className="btn btn-light btn-sm" onClick={edit} style={{marginLeft:"5px"}}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={remove} style={{marginLeft:"5px"}}>Remove</button>
            </div>
        </div>
    );
};

export default DataGridTopBar;
