import { useState, useEffect } from "react";


export default function useWidth() {
    const [width, setWidth] = useState(1);
    
    useEffect(() => {
        const getWidth = () => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        function updateWidth() {
            let width = getWidth()
            setWidth(width);
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);
    },[])
    
    return width;
}
