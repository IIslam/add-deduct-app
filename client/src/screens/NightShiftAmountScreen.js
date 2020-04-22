import React from "react";
import { Team } from "../components";
import { NSAT } from "../teams";

export const NightShiftAmountScreen = () => {
    return (
        <Team
            teamName={NSAT.NAME}
            filePath={NSAT.SAMPLE_EXCEL_URL}
            collection={NSAT.COLLECTION_NAME}
            tableHeader={NSAT.TABLE_HEADER}
        />
    )
}