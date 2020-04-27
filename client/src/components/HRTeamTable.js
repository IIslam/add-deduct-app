import React from "react";
import { Tab } from "semantic-ui-react";
import { MenuItem } from '../components';
import {
    SAT,
    OVT,
    NEXT,
    NSAT,
    NSDT,
    LHT,
    ORGT,
    NSHDT,
    NSHT,
    IGT,
    INT,
    MBT,
    SLDT,
    SLCT,
    UKDET,
    AGAT,
    GYMT,
    PDT,
    OCT,
    PCT,
    NHT
} from "../teams";
import {
    YEARS,
    MONTHS
} from "../util";

const panes = [
    { menuItem: SAT.NAME, render: () => <MenuItem paneHeader={SAT.NAME} fileName={SAT.COLLECTION_NAME} paneKeys={SAT.PANE_KEYS} months={MONTHS} years={YEARS} /> },
    { menuItem: OVT.NAME, render: () => <MenuItem paneHeader={OVT.NAME} fileName={OVT.COLLECTION_NAME} paneKeys={OVT.PANE_KEYS} months={MONTHS} years={YEARS} /> },
    { menuItem: NEXT.NAME, render: () => <MenuItem paneHeader={NEXT.NAME} fileName={NEXT.COLLECTION_NAME} paneKeys={NEXT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: NSAT.NAME, render: () => <MenuItem paneHeader={NSAT.NAME} fileName={NSAT.COLLECTION_NAME} paneKeys={NSAT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: NSDT.NAME, render: () => <MenuItem paneHeader={NSDT.NAME} fileName={NSDT.COLLECTION_NAME} paneKeys={NSDT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: LHT.NAME, render: () => <MenuItem paneHeader={LHT.NAME} fileName={LHT.COLLECTION_NAME} paneKeys={LHT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: ORGT.NAME, render: () => <MenuItem paneHeader={ORGT.NAME} fileName={ORGT.COLLECTION_NAME} paneKeys={ORGT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: NSHDT.NAME, render: () => <MenuItem paneHeader={NSHDT.NAME} fileName={NSHDT.COLLECTION_NAME} paneKeys={NSHDT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: NSHT.NAME, render: () => <MenuItem paneHeader={NSHT.NAME} fileName={NSHT.COLLECTION_NAME} paneKeys={NSHT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: IGT.NAME, render: () => <MenuItem paneHeader={IGT.NAME} fileName={IGT.COLLECTION_NAME} paneKeys={IGT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: INT.NAME, render: () => <MenuItem paneHeader={INT.NAME} fileName={INT.COLLECTION_NAME} paneKeys={INT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: MBT.NAME, render: () => <MenuItem paneHeader={MBT.NAME} fileName={MBT.COLLECTION_NAME} paneKeys={MBT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: SLDT.NAME, render: () => <MenuItem paneHeader={SLDT.NAME} fileName={SLDT.COLLECTION_NAME} paneKeys={SLDT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: SLCT.NAME, render: () => <MenuItem paneHeader={SLCT.NAME} fileName={SLCT.COLLECTION_NAME} paneKeys={SLCT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: UKDET.NAME, render: () => <MenuItem paneHeader={UKDET.NAME} fileName={UKDET.COLLECTION_NAME} paneKeys={UKDET.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: AGAT.NAME, render: () => <MenuItem paneHeader={AGAT.NAME} fileName={AGAT.COLLECTION_NAME} paneKeys={AGAT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: GYMT.NAME, render: () => <MenuItem paneHeader={GYMT.NAME} fileName={GYMT.COLLECTION_NAME} paneKeys={GYMT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: PDT.NAME, render: () => <MenuItem paneHeader={PDT.NAME} fileName={PDT.COLLECTION_NAME} paneKeys={PDT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: OCT.NAME, render: () => <MenuItem paneHeader={OCT.NAME} fileName={OCT.COLLECTION_NAME} paneKeys={OCT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: PCT.NAME, render: () => <MenuItem paneHeader={PCT.NAME} fileName={PCT.COLLECTION_NAME} paneKeys={PCT.PANE_KEYS} months={MONTHS} years={YEARS}/> },
    { menuItem: NHT.NAME, render: () => <MenuItem paneHeader={NHT.NAME} fileName={NHT.COLLECTION_NAME} paneKeys={NHT.PANE_KEYS} months={MONTHS} years={YEARS}/> }
]

export const HRTeamTable = () => {
    return (
        <div>
            <Tab
                panes={panes}
                menu={{ fluid: true, vertical: true, tabular: true, color: 'red' }}
            />
        </div>
    )
}

