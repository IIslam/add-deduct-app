import React from "react";
import { Team } from "../components";
import { NSADT } from "../teams";

export const NightShiftAmountDaysScreen = () => {
    return (
        <Team
            teamName={NSADT.NAME}
            filePath={NSADT.SAMPLE_EXCEL_URL}
            collection={NSADT.COLLECTION_NAME}
            tableHeader={NSADT.TABLE_HEADER}
        />
    )
}