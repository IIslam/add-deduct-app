import React from "react";
import { Team } from "../components";
import { ORGT } from "../teams";

export const OvertimeRewardGrossScreen = () => {
    return (
        <Team
            teamName={ORGT.NAME}
            filePath={ORGT.SAMPLE_EXCEL_URL}
            collection={ORGT.COLLECTION_NAME}
            tableHeader={ORGT.TABLE_HEADER}
        />
    );
} 