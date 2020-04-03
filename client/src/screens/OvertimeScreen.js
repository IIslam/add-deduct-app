import React from "react";
import { Team } from "../components";
import { OT } from "../teams";

export const OvertimeScreen = () => {
    return (
        <Team
            teamName={OT.NAME}
            filePath={OT.SAMPLE_EXCEL_URL}
            collection={OT.COLLECTION_NAME}
            tableHeader={OT.TABLE_HEADER}
        />
    )
}