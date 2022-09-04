import Link from "next/link";
import React from "react";

export default function ContactUs() {
    return (
        <div>
            GDPR:&nbsp;
            <Link href={"mailto:gdpr@openbooru.org"}>
                gdpr@openbooru.org
            </Link>
            <br/>
            Support:&nbsp;
            <Link href={"mailto:support@openbooru.org"}>
                support@openbooru.org
            </Link>
            <br/>
            DMCA Contact:&nbsp;
            <Link href={"mailto:dmca@openbooru.org"}>
                dmca@openbooru.org
            </Link>
        </div>
    );
}