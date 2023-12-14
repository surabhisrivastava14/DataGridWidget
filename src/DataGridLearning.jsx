import React, { createElement,useState } from "react";
import "./ui/DataGridLearning.css";
import useGetProductData from "./hooks/useGetProductData";
import useGetGridAction from "./hooks/useGetGridAction";
import DatagridWidgetWrapper from "./components/DatagridWidgetWrapper";
import DatagridWrapper from "./components/DatagridWrapper";
import DataGridRow from "./components/DataGridRow";
import DataGridHeader from "./components/DataGridHeader";
import DataGridTopBar from "./components/DataGridTopBar";

const ValueStatus = {
    available: "available",
    unavailable: "unavailable"
};

export function DataGridLearning(props) {
    console.warn("props", props);

    const {
        productData: { status: productDataStatus }
    } = props;

    if (productDataStatus === ValueStatus.available) {

        const {myProductData,productDataSource} = useGetProductData(props);
        const {onAdd,onEdit,onRemove,payload,setPayload} = useGetGridAction(props);
        
        //use state
        const [selected,setSelected] = useState(null);

        console.warn("myProductData",myProductData);
        console.warn("selected", selected);

        return (
            <DatagridWidgetWrapper>
                <DatagridWrapper>
                <DataGridTopBar productDataSource={productDataSource} {...{onAdd,onEdit,onRemove,setPayload,selected}}></DataGridTopBar>
                <DataGridHeader product={myProductData[0]}></DataGridHeader>
                    {
                        myProductData.map(product =>{
                            return <DataGridRow product={product} selected={selected} setSelected={setSelected}> </DataGridRow>
                        })
                    }
                </DatagridWrapper>
            </DatagridWidgetWrapper>
        );
    } else {
       return (
            <div>Loading...</div>
       );
    }
};
