import React from "react";
import {
    Icon,
    Image,
    Dimmer,
    Loader,
    Segment,
} from "semantic-ui-react";
import _ from "lodash";
import { NH_keys } from "../keys";
import { ButtonWB } from "../components";
import { EXPORT_DATA_API } from "../api";
import Workbook from "react-excel-workbook";

export class NewHiresRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        let API = EXPORT_DATA_API + '/new-hires';
        fetch(API, {
            headers: { "Content-Type": "application/json" },
            method: 'GET'
        }).then(res => {
            return res.json();
        }).then(excelData => {
            this.setState({
                data: excelData
            })
        }).catch(err => {
            throw err;
        })
    }

    render() {
        let fileName = 'new-hires';
        let { data } = this.state;

        if (data !== null) {
            return (
                <div className="d-flex flex-row bg-light border rounded justify-content-between align-items-center mt-2 p-3">
                    <div className="d-flex flex-row">
                        <Icon name="file excel" color="green" size="large" />
                        <p className="lead ml-2">{fileName + '.xlsx'}</p>
                    </div>
                    <div className="align-self-end">
                        <Workbook filename={fileName + '.xlsx'} element={<ButtonWB />}>
                            <Workbook.Sheet data={data} name={_.startCase(fileName)}>
                                {
                                    NH_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                        </Workbook>
                    </div>
                </div>
            )
        } else {
            return (
                <Segment>
                    <Dimmer active inverted>
                        <Loader inverted>Fetching Data</Loader>
                    </Dimmer>
                    <Image src='/images/wireframe/short-paragraph.png' />
                </Segment>
            )
        }
    }
}
