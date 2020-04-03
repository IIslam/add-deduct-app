import React from "react";
import { Team } from "../components";
import { IGT } from "../teams";

export const IncentivesGrossScreen = () => {
    return (
        <Team
            teamName={IGT.NAME}
            filePath={IGT.SAMPLE_EXCEL_URL}
            collection={IGT.COLLECTION_NAME}
            tableHeader={IGT.TABLE_HEADER}
        />
    );
} 