import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Credits() {
    return (
        <div>
            
            Inspiration:
             <ul>
                <li>
                    <Link href="https://gelbooru.com">
                        Gelbooru
                    </Link>
                </li>
                <li>
                    <Link href="https://e621.net">
                        e621
                    </Link>
                </li>
                <li>
                    <Link href="https://booru.io">
                        booru.io
                    </Link>
                </li>
                <li>
                    <Link href="https://r34.app">
                        R34 app
                    </Link>
                </li>
                <li>
                    <Link href="https://danbooru.donmai.us/">
                        Danbooru
                    </Link>
                </li>
            </ul> 
        </div>
    );
}
