import React from "react";
import { Team } from "../components";
import { OCT } from "../teams";

export const OnCallScreen = () => {
    return (
        <Team
            teamName={OCT.NAME}
            filePath={OCT.SAMPLE_EXCEL_URL}
            collection={OCT.COLLECTION_NAME}
            tableHeader={OCT.TABLE_HEADER}
        />
    );
} 