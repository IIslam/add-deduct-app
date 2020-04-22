import React from "react";
import { Team } from "../components";
import { OVT } from "../teams";

export const OvertimeScreen = () => {
    return (
        <Team
            teamName={OVT.NAME}
            filePath={OVT.SAMPLE_EXCEL_URL}
            collection={OVT.COLLECTION_NAME}
            tableHeader={OVT.TABLE_HEADER}
        />
    )
}