import React from "react";
import { Team } from "../components";
import { GYMT } from "../teams";

export const GYMScreen = () => {
    return (
        <Team
            teamName={GYMT.NAME}
            filePath={GYMT.SAMPLE_EXCEL_URL}
            collection={GYMT.COLLECTION_NAME}
            tableHeader={GYMT.TABLE_HEADER}
        />
    );
} 