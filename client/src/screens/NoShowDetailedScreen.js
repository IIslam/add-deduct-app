import React from "react";
import { Team } from "../components";
import { NSHDT } from "../teams";

export const NoShowDetailedScreen = () => {
    return (
        <Team
            teamName={NSHDT.NAME}
            filePath={NSHDT.SAMPLE_EXCEL_URL}
            collection={NSHDT.COLLECTION_NAME}
            tableHeader={NSHDT.TABLE_HEADER}
        />
    );
} 