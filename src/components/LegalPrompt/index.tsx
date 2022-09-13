import React from "react"
import AgePrompt from "./AgePrompt"
import CookiePrompt from "./CookiePrompt"
import NoSSR from "react-no-ssr";

export default function LegalPrompt() {
    return (
        <NoSSR>
            {
                process.env.PROMPT_AGE
                    ? <AgePrompt />
                    : <CookiePrompt/>
            }
        </NoSSR>
    )
}