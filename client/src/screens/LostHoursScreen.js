import React from "react";
import { Team } from "../components";
import { LHT } from "../teams";

export const LostHoursScreen = () => {
    return (
        <Team
            teamName={LHT.NAME}
            filePath={LHT.SAMPLE_EXCEL_URL}
            collection={LHT.COLLECTION_NAME}
            tableHeader={LHT.TABLE_HEADER}
        />
    )
}