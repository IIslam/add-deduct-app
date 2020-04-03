import React from "react";
import { Team } from "../components";
import { NET } from "../teams";

export const NetExpensesScreen = () => {
    return(
        <Team
        teamName={NET.NAME}
        filePath={NET.SAMPLE_EXCEL_URL}
        collection={NET.COLLECTION_NAME}
        tableHeader={NET.TABLE_HEADER}
        />
    )
}