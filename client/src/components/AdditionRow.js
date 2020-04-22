import React from "react";
import {
    Icon,
    Image,
    Dimmer,
    Loader,
    Segment
} from "semantic-ui-react";
import {
    IGT,
    INT,
    OCT,
    OVT,
    AGAT,
    NEXT,
    NSAT,
    NSDT,
    ORGT,
    UKDET
} from "../teams";
import {
    IG_keys,
    IN_keys,
    OC_keys,
    OV_keys,
    AGA_keys,
    NEX_keys,
    NSA_keys,
    NSD_keys,
    ORG_keys,
    UKDE_keys
} from "../keys";
import _ from "lodash";
import { ButtonWB } from "../components";
import { EXPORT_DATA_API } from "../api";
import Workbook from "react-excel-workbook";

export class AdditionRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            IGD: null,
            IND: null,
            OCD: null,
            OVD: null,
            AGAD: null,
            NEXD: null,
            NSAD: null,
            NSDD: null,
            ORGD: null,
            UKDED: null
        }
    }

    componentDidMount() {

        let IG_API = EXPORT_DATA_API + "/" + IGT.COLLECTION_NAME;
        let IN_API = EXPORT_DATA_API + "/" + INT.COLLECTION_NAME;
        let OC_API = EXPORT_DATA_API + "/" + OCT.COLLECTION_NAME;
        let OV_API = EXPORT_DATA_API + "/" + OVT.COLLECTION_NAME;
        let AGA_API = EXPORT_DATA_API + "/" + AGAT.COLLECTION_NAME;
        let NEX_API = EXPORT_DATA_API + "/" + NEXT.COLLECTION_NAME;
        let NSA_API = EXPORT_DATA_API + "/" + NSAT.COLLECTION_NAME;
        let NSD_API = EXPORT_DATA_API + "/" + NSDT.COLLECTION_NAME;
        let ORG_API = EXPORT_DATA_API + "/" + ORGT.COLLECTION_NAME;
        let UKDE_API = EXPORT_DATA_API + "/" + UKDET.COLLECTION_NAME;

        Promise.all([
            fetch(IG_API).then(res => { return res.json() }),
            fetch(IN_API).then(res => { return res.json() }),
            fetch(OC_API).then(res => { return res.json() }),
            fetch(OV_API).then(res => { return res.json() }),
            fetch(AGA_API).then(res => { return res.json() }),
            fetch(NEX_API).then(res => { return res.json() }),
            fetch(NSA_API).then(res => { return res.json() }),
            fetch(NSD_API).then(res => { return res.json() }),
            fetch(ORG_API).then(res => { return res.json() }),
            fetch(UKDE_API).then(res => { return res.json() }),
        ]).then(([IGRD, INRD, OCRD, OVRD, AGARD, NEXRD, NSARD, NSDRD, ORGRD, UKDERD]) => {
            this.setState({
                IGD: IGRD,
                IND: INRD,
                OCD: OCRD,
                OVD: OVRD,
                AGAD: AGARD,
                NEXD: NEXRD,
                NSAD: NSARD,
                NSDD: NSDRD,
                ORGD: ORGRD,
                UKDED: UKDERD
            })
        }).catch(err => {
            throw err;
        })
    }

    render() {
        let fileName = "addition";
        let { IGD, IND, OCD, OVD, AGAD, NEXD, NSAD, NSDD, ORGD, UKDED } = this.state;

        if (
            IGD !== null && IND !== null &&
            OCD !== null && OVD !== null &&
            AGAD !== null && NEXD !== null &&
            NSAD !== null && NSDD !== null &&
            ORGD !== null && UKDED !== null
        ) {
            return (
                <div className="d-flex flex-row bg-light border rounded justify-content-between align-items-center mt-2 p-3">
                    <div className="d-flex flex-row">
                        <Icon name="file excel" color="green" size="large" />
                        <p className="lead ml-2">{fileName + '.xlsx'}</p>
                    </div>
                    <div className="align-self-end">
                        <Workbook filename={fileName + '.xlsx'} element={<ButtonWB />}>
                            <Workbook.Sheet data={OVD} name={_.startCase(OVT.COLLECTION_NAME)}>
                                {
                                    OV_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={NEXD} name={_.startCase(NEXT.COLLECTION_NAME)}>
                                {
                                    NEX_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={NSAD} name={_.startCase(NSAT.COLLECTION_NAME)}>
                                {
                                    NSA_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={NSDD} name={_.startCase(NSDT.COLLECTION_NAME)}>
                                {
                                    NSD_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={ORGD} name={_.startCase(ORGT.COLLECTION_NAME)}>
                                {
                                    ORG_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={IGD} name={_.startCase(IGT.COLLECTION_NAME)}>
                                {
                                    IG_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={IND} name={_.startCase(INT.COLLECTION_NAME)}>
                                {
                                    IN_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={UKDED} name={_.startCase(UKDET.COLLECTION_NAME)}>
                                {
                                    UKDE_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={AGAD} name={_.startCase(AGAT.COLLECTION_NAME)}>
                                {
                                    AGA_keys.map((k, i) => {
                                        return <Workbook.Column key={i} label={_.startCase(k)} value={k} />
                                    })
                                }
                            </Workbook.Sheet>
                            <Workbook.Sheet data={OCD} name={_.startCase(OCT.COLLECTION_NAME)}>
                                {
                                    OC_keys.map((k, i) => {
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