import React from "react";

export default function OrderButton(props) {
    let { decending, setDecending } = props;
    let callback = () => setDecending(!decending)
    let alt = decending ? "Sort Descending" : "Sort Ascending";
    return (
        <div onClick={callback} className="center" title={alt}>
            <img
                id="searchbox-order"
                className="bordered"
                src={decending ? "/images/arrow-down.svg" : "/images/arrow-up.svg"}
                alt={alt}
            />
        </div>
    )
}
