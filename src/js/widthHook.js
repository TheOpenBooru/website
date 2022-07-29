import { useState } from "react";

const getWidth = () => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

export default function useWidth() {
    const [width, setWidth] = useState(getWidth());
    window.addEventListener("resize", () => setWidth(getWidth()));
    return width;
}
