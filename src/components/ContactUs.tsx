import Link from "next/link";
import React from "react";

export default function ContactUs() {
    return (
        <div>
            For any questions or inquites use our support email
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