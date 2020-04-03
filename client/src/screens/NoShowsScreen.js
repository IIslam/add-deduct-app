import React from "react";
import { Team } from "../components";
import { NST } from "../teams";

export const NoShowsScreen = () => {
    return (
        <Team
            teamName={NST.NAME}
            filePath={NST.SAMPLE_EXCEL_URL}
            collection={NST.COLLECTION_NAME}
            tableHeader={NST.TABLE_HEADER}
        />
    );
} 