import React from "react";
import { Team } from "../components";
import { SLCT } from "../teams";

export const SickLeaveConsScreen = () => {
    return (
        <Team
            teamName={SLCT.NAME}
            filePath={SLCT.SAMPLE_EXCEL_URL}
            collection={SLCT.COLLECTION_NAME}
            tableHeader={SLCT.TABLE_HEADER}
        />
    );
} 