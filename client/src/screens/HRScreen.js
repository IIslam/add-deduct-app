import React from "react";
import { HRTeam } from "../components";
import { HRT } from "../teams";

export const HRScreen = () => {
    return (
        <HRTeam
            teamName={HRT.NAME}
        />
    )
}