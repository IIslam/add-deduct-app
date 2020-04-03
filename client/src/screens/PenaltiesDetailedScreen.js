import React from "react";
import { Team } from "../components";
import { PDT } from "../teams";

export const PenaltiesDetailedScreen = () => {
    return (
        <Team
            teamName={PDT.NAME}
            filePath={PDT.SAMPLE_EXCEL_URL}
            collection={PDT.COLLECTION_NAME}
            tableHeader={PDT.TABLE_HEADER}
        />
    );
} 