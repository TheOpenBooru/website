import React, { useState } from "react";
import InfoPage from "components/InfoPage";
import HeadInfo from "components/HeadInfo";

export default function Info() {
    return (
        <>
            <HeadInfo title="Info" path="/info" />
            <InfoPage />
        </>
    )
}
