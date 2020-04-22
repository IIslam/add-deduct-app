import React from "react";
import { Team } from "../components";
import { NHT } from "../teams";

export const NewHiresScreen = () => {
    return (
        <Team
            teamName={NHT.NAME}
            filePath={NHT.SAMPLE_EXCEL_URL}
            collection={NHT.COLLECTION_NAME}
            tableHeader={NHT.TABLE_HEADER}
        />
    )
}