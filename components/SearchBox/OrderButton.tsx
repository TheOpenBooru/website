import React from "react"
import Image from "next/image";
import styled from "styled-components";

export default function OrderButton({ decending, setDecending }) {
    let callback = () => setDecending(!decending)
    let alt = decending ? "Sort Descending" : "Sort Ascending";
    return (
        <Order onClick={callback} className="center" title={alt}>
            <Image
                width={128}
                height={128}
                src={decending ? "/images/arrow-down.svg" : "/images/arrow-up.svg"}
                alt={alt}
            />
        </Order>
    )
}

const Order = styled.div`
    background-color: var(--BACKGROUND-4);
    border: 3px solid var(--BORDER-1) ;
    min-height: 1rem;
    min-width: 1rem;
    height: 1rem;
    width: 1rem;

    
    transition: 0.15s ease-out;
    &:hover {
        transition: 0.3s ease-out;
        background-color:var(--BACKGROUND-3);
        border-radius: .4rem;
    }
`
