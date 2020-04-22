import React from "react";
import { Team } from "../components";
import { NSDT } from "../teams";

export const NightShiftDaysScreen = () => {
    return (
        <Team
            teamName={NSDT.NAME}
            filePath={NSDT.SAMPLE_EXCEL_URL}
            collection={NSDT.COLLECTION_NAME}
            tableHeader={NSDT.TABLE_HEADER}
        />
    )
}