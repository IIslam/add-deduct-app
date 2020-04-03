import React from "react";
import { Team } from "../components";
import { INT } from "../teams";

export const IncentivesNetScreen = () => {
    return (
        <Team
            teamName={INT.NAME}
            filePath={INT.SAMPLE_EXCEL_URL}
            collection={INT.COLLECTION_NAME}
            tableHeader={INT.TABLE_HEADER}
        />
    );
} 