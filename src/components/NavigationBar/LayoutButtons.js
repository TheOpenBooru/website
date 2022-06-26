import React from "react";
import styled from "styled-components";
import titleCase from "ap-style-title-case";
import Redirects from "js/redirects";

const layouts = [
    {
        name: "grid",
        icon: "/images/grid.svg",
    },
    {
        name: "column",
        icon: "/images/columns.svg",
    },
    {
        name: "fullscreen",
        icon: "/images/fullscreen.svg",
    },
];

export default function LayoutSelector(props) {
    let icons = layouts.map((v) => {
        let { name, icon } = v;
        let id = "layout-" + name
        let alt = titleCase(name + " Layout");
        let href = Redirects.search(name);
        return (
            <LayoutButton id={id} href={href} title={alt} key={v.name}>
                <LayoutIcon alt={alt} src={icon} />
            </LayoutButton>
        );
    });

    return (
        <Contianer className="layoutSelector">
            {icons}
        </Contianer>
    );
}


const Contianer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`


const LayoutButton = styled.a`
    width: 1.6rem;
    height: 1.6rem;
    margin-left: .1rem;
    margin-right: .1rem;
    
    background-color: var(--COLOR-2);
    border: .15rem solid var(--COLOR-4);
    border-radius: .4rem;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover{
        background-color: var(--COLOR-3);
    }
`

const LayoutIcon = styled.img`
    transition: 0.2s ease-in-out;
    animation-fill-mode: forwards;
    
    width: 80%;
    height: 80%;
    filter: invert(0%);
    ${LayoutButton}:hover &{
        cursor: pointer;
        width: 90%;
        height: 90%;
        filter: invert(90%);
    }
`
