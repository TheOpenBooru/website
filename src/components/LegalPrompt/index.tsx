import React from "react"
import AgePrompt from "./AgePrompt"
import CookiePrompt from "./CookiePrompt"

export default function LegalPrompt() {
    if (process.env.PROMPT_AGE) {
        return <AgePrompt/>
    } else {
        return <CookiePrompt/>
    }
}