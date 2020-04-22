import React from "react";
import {
    Container,
    Header,
    Divider
} from "semantic-ui-react";
import {
    AdditionRow,
    DeductionRow,
    ProfileChangeRow,
    SalaryAdjustmentRow,
    NewHiresRow
} from "../components";

export const HRFilesScreen = () => {
    return (
        <Container fluid className="bg-light p-5" style={{ height: "100vh" }}>
            <div className="border bg-white rounded p-5">
                <div>
                    <Header as='h2' floated='left' color="red">
                        Final Excel Files
                    </Header>
                    <Divider clearing />
                </div>
                <div className="d-flex flex-column">
                    <AdditionRow fileName="addition" />
                    <DeductionRow fileName="deduction" />
                    <ProfileChangeRow />
                    <SalaryAdjustmentRow />
                    <NewHiresRow />
                </div>
            </div>
        </Container>
    )
}