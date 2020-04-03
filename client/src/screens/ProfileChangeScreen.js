import React from "react";
import { Team } from "../components";
import { PCT } from "../teams";

export const ProfileChangeScreen = () => {
    return (
        <Team
            teamName={PCT.NAME}
            filePath={PCT.SAMPLE_EXCEL_URL}
            collection={PCT.COLLECTION_NAME}
            tableHeader={PCT.TABLE_HEADER}
        />
    );
} 