import React from "react";
import { Table } from "semantic-ui-react";
import { RenderTableBody } from "../components";

export const TeamTableBody = (props) => {
    let { rows } = props;
    return rows.map((row, index) => {
        return (
            <Table.Row key={index}>
                <RenderTableBody key={index} data={row} keys={props.rows[0]} />
            </Table.Row>
        )
    })
}
