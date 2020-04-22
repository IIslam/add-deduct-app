import React from "react";
import { Team } from "../components";
import { NEXT } from "../teams";

export const NetExpensesScreen = () => {
    return(
        <Team
        teamName={NEXT.NAME}
        filePath={NEXT.SAMPLE_EXCEL_URL}
        collection={NEXT.COLLECTION_NAME}
        tableHeader={NEXT.TABLE_HEADER}
        />
    )
}