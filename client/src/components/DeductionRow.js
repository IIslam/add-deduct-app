import React from "react";
import {
    Icon,
    Image,
    Dimmer,
    Loader,
    Segment
} from "semantic-ui-react";
import {
    LHT,
    NSHDT,
    NSHT,
    MBT,
    GYMT,
    SLDT,
    SLCT,
    PDT
} from "../teams";
import {
    LH_keys,
    NSHD_keys,
    NSH_keys,
    MB_keys,
    GYM_keys,
    SLD_keys,
    SLC_keys,
    PD_keys
} from "../keys";
import _ from "lodash";
import { ButtonWB } from "../components";
import { EXPORT_DATA_API } from "../api";
import Workbook from "react-excel-workbook";

export class DeductionRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            LHD: null,
            MBD: null,
            PDD: null,
            NSHD: null,
            GYMD: null,
            SLDD: null,
            SLCD: null,
            NSHDD: null,
        }
    }

    componentDidMount() {

        let LH_API = EXPORT_DATA_API + "/" + LHT.COLLECTION_NAME;
        let MB_API = EXPORT_DATA_API + "/" + MBT.COLLECTION_NAME;
        let PD_API = EXPORT_DATA_API + "/" + PDT.COLLECTION_NAME;
        let NSH_API = EXPORT_DATA_API + "/" + NSHT.COLLECTION_NAME;
        let GYM_API = EXPORT_DATA_API + "/" + GYMT.COLLECTION_NAME;
        let SLC_API = EXPORT_DATA_API + "/" + SLCT.COLLECTION_NAME;
        let SLD_API = EXPORT_DATA_API + "/" + SLDT.COLLECTION_NAME;
        let NSHD_API = EXPORT_DATA_API + "/" + NSHDT.COLLECTION_NAME;

        Promise.all([
            fetch(LH_API).then(res => { return res.json() }),
            fetch(MB_API).then(res => { return res.json() }),
            fetch(PD_API).then(res => { return res.json() }),
            fetch(NSH_API).then(res => { return res.json() }),
            fetch(GYM_API).then(res => { return res.json() }),
            fetch(SLC_API).then(res => { return res.json() }),
            fetch(SLD_API).then(res => { return res.json() }),
            fetch(NSHD_API).then(res => { return res.json() })
        ]).then(([LHRD, MBRD, PDRD, NSHRD, GYMRD, SLCRD, SLDRD, NSHDRD]) => {
            this.setState({
                LHD: LHRD,
                MBD: MBRD,
                PDD: PDRD,
                NSHD: NSHRD,
                GYMD: GYMRD,
                SLDD: SLDRD,
                SLCD: SLCRD,
                NSHDD: NSHDRD,
            })
        }).catch(err => {
            throw err;
        })
    }

    render() {
        let fileName = "deduction";
        let { LHD, MBD, PDD, NSHD, GYMD, SLDD, SLCD, NSHDD } = this.state;

        if (
            LHD !== null && MBD !== null &&
            PDD !== null && NSHD !== null &&
            GYMD !== null && SLDD !== null &&
            SLCD !== null && NSHDD !== null
        ) {
            return (
                <div className="d-flex flex-row bg-light border rounded justify-content-between align-items-center mt-2 p-3">
                    <div className="d-flex flex-row">
                        <Icon name="file excel" color="green" size="large" />
                        <p className="lead ml-2">{fileName + '.xlsx'}</p>
                    </div>
                    <div className="align-self-end">
                        <Workbook filename={fileName + '.xlsx'} element={<ButtonWB />}>
                            <Workbook.Sheet data={LHD} name={_.startCase(LHT.COLLECTION_NAME)}>
                                {
                                    LH_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={NSHDD} name={_.startCase(NSHDT.COLLECTION_NAME)}>
                                {
                                    NSHD_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={NSHD} name={_.startCase(NSHT.COLLECTION_NAME)}>
                                {
                                    NSH_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={MBD} name={_.startCase(MBT.COLLECTION_NAME)}>
                                {
                                    MB_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={GYMD} name={_.startCase(GYMT.COLLECTION_NAME)}>
                                {
                                    GYM_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={SLDD} name={_.startCase(SLDT.COLLECTION_NAME)}>
                                {
                                    SLD_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={SLCD} name={_.startCase(SLCT.COLLECTION_NAME)}>
                                {
                                    SLC_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={PDD} name={_.startCase(PDT.COLLECTION_NAME)}>
                                {
                                    PD_keys.map((k, i) => {
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