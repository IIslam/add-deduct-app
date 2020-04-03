import React from "react";
import { Team } from "../components";
import { SLDT } from "../teams";

export const SickLeaveDetailedScreen = () => {
    return (
        <Team
            teamName={SLDT.NAME}
            filePath={SLDT.SAMPLE_EXCEL_URL}
            collection={SLDT.COLLECTION_NAME}
            tableHeader={SLDT.TABLE_HEADER}
        />
    );
} 