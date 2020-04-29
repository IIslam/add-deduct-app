import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { getKeysAndSheets } from "../util";
import Workbook from "react-excel-workbook";
import { ButtonWB, NoData } from "../components";
import { Item, Header } from "semantic-ui-react";

export const ExportWorkBook = (props) => {
    let { name, data } = props;
    console.log(data)
    let { keys, sheets } = getKeysAndSheets(name);
    if (data.length !== 0) {
        return (
            <div className="shadow rounded mt-5 p-5">
                <div>
                    <Header as="h5">Your Requested File</Header>
                </div>
                <Item.Group relaxed className="mt-3 shadow-sm border rounded bg-light">
                    <Item>
                        <Item.Image
                            size="tiny"
                            className="ml-3"
                            src="https://img.icons8.com/color/144/000000/microsoft-excel-2019--v1.png"
                        />
                        <Item.Content verticalAlign='middle'>
                            <Item.Header as="p">{name}</Item.Header>
                        </Item.Content>
                        <Item.Extra>
                            <Workbook filename={name} element={<ButtonWB />}>
                                {
                                    data.map((arr, index) => {
                                        return (
                                            <Workbook.Sheet key={index} data={arr} name={sheets[index]}>
                                                {
                                                    keys[index].map((k, i) => {
                                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                                    })
                                                }
                                            </Workbook.Sheet>
                                        )
                                    })
                                }
                            </Workbook>
                        </Item.Extra>
                    </Item>
                </Item.Group>
            </div>
        )
    } else {
        return <div><NoData /></div>
    }
}

ExportWorkBook.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(Array).isRequired
}