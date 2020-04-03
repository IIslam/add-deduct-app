import React from "react";
import { Team } from "../components";
import { MBT } from "../teams";

export const MobileBillScreen = () => {
    return (
        <Team
            teamName={MBT.NAME}
            filePath={MBT.SAMPLE_EXCEL_URL}
            collection={MBT.COLLECTION_NAME}
            tableHeader={MBT.TABLE_HEADER}
        />
    );
} 