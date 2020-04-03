import React from "react";
import { Team } from "../components";
import { UKDET } from "../teams";

export const UKDEReferralProgNetAmountScreen = () => {
    return (
        <Team
            teamName={UKDET.NAME}
            filePath={UKDET.SAMPLE_EXCEL_URL}
            collection={UKDET.COLLECTION_NAME}
            tableHeader={UKDET.TABLE_HEADER}
        />
    );
} 