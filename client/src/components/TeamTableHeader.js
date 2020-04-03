import React from "react";
import { Table } from "semantic-ui-react"

export const TeamTableHeader = (props) => {
    return props.header.map((cell, index) => {
        return <Table.HeaderCell key={index}>{cell}</Table.HeaderCell>
    })
}