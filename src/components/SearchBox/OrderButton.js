import React from "react";

export default function OrderButton(props) {
    let { decending, setDecending } = props;
    let callback = () => setDecending(!decending)
    return (
        <div onClick={callback} className="center"> 
            <img
                id="searchbox-order"
                className="bordered"
                src={decending ? "/images/arrow-down.svg" : "/images/arrow-up.svg"}
                alt="Decending/Ascending"
            />
        </div>
    )
}
