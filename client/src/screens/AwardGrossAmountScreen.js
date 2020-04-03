import React from "react";
import { Team } from "../components";
import { AGAT } from "../teams";

export const AwardGrossAmountScreen = () => {
    return (
        <Team
            teamName={AGAT.NAME}
            filePath={AGAT.SAMPLE_EXCEL_URL}
            collection={AGAT.COLLECTION_NAME}
            tableHeader={AGAT.TABLE_HEADER}
        />
    );
} 