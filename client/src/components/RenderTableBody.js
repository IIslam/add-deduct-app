import React from "react";
import { Table } from "semantic-ui-react";


export const RenderTableBody = props => {
  let renderKeys = Object.keys(props.keys);
  return renderKeys.map((key, index) => {
    return <Table.Cell key={index}>{props.data[key]}</Table.Cell>;
  });
};
