import React from "react";
import { Team } from "../components";
import { NSHT } from "../teams";

export const NoShowsScreen = () => {
    return (
        <Team
            teamName={NSHT.NAME}
            filePath={NSHT.SAMPLE_EXCEL_URL}
            collection={NSHT.COLLECTION_NAME}
            tableHeader={NSHT.TABLE_HEADER}
        />
    );
} 