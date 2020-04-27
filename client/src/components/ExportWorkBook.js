import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";
import { getKeysAndSheets } from "../util";
import Workbook from "react-excel-workbook";
import { ButtonWB, NoData } from "../components";

export const ExportWorkBook = (props) => {
    let { name, data } = props;
    console.log(data)
    let { keys, sheets } = getKeysAndSheets(name);
    if (data.length !== 0) {
        return (
            <div className="d-flex bg-light border rounded justify-content-between align-items-center mt-2 p-3 w-75">
                <div className="d-flex align-items-center">
                    <Icon name="file excel" color="green" size="huge" />
                    <p className="lead ml-2">{name + '.xlsx'}</p>
                </div>
                <div className="p-3">
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
                </div>
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