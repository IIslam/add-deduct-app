import React from "react";
import { Team } from "../components";
import { NightShiftAmountDaysTeam } from "../teams";

export const NightShiftAmountDaysScreen = () => {
    return (
        <Team
            teamName={NightShiftAmountDaysTeam.NAME}
            filePath={NightShiftAmountDaysTeam.SAMPLE_EXCEL_URL}
            collection={NightShiftAmountDaysTeam.COLLECTION_NAME}
            tableHeader={NightShiftAmountDaysTeam.TABLE_HEADER}
        />
    )
}