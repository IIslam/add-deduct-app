import React from "react";
import { Team } from "../components";
import { SAT } from "../teams";

export const SalaryAdjustmentScreen = () => {
    return (
        <Team
            teamName={SAT.NAME}
            filePath={SAT.SAMPLE_EXCEL_URL}
            collection={SAT.COLLECTION_NAME}
            tableHeader={SAT.TABLE_HEADER}
        />
    );
} 