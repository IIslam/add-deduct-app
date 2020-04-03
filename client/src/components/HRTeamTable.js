import React from "react";
import { Tab } from "semantic-ui-react";
import { MenuItem } from '../components';
import {
    SAT,
    OT,
    NET,
    NSADT,
    LHT,
    ORGT,
    NSDT,
    NST,
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
    PCT
} from "../teams";

const panes = [
    { menuItem: SAT.NAME, render: () => <MenuItem paneHeader={SAT.NAME} fileName={SAT.COLLECTION_NAME} paneKeys={SAT.PANE_KEYS} /> },
    { menuItem: OT.NAME, render: () => <MenuItem paneHeader={OT.NAME} fileName={OT.COLLECTION_NAME} paneKeys={OT.PANE_KEYS} /> },
    { menuItem: NET.NAME, render: () => <MenuItem paneHeader={NET.NAME} fileName={NET.COLLECTION_NAME} paneKeys={NET.PANE_KEYS} /> },
    { menuItem: NSADT.NAME, render: () => <MenuItem paneHeader={NSADT.NAME} fileName={NSADT.COLLECTION_NAME} paneKeys={NSADT.PANE_KEYS} /> },
    { menuItem: LHT.NAME, render: () => <MenuItem paneHeader={LHT.NAME} fileName={LHT.COLLECTION_NAME} paneKeys={LHT.PANE_KEYS} /> },
    { menuItem: ORGT.NAME, render: () => <MenuItem paneHeader={ORGT.NAME} fileName={ORGT.COLLECTION_NAME} paneKeys={ORGT.PANE_KEYS} /> },
    { menuItem: NSDT.NAME, render: () => <MenuItem paneHeader={NSDT.NAME} fileName={NSDT.COLLECTION_NAME} paneKeys={NSDT.PANE_KEYS} /> },
    { menuItem: NST.NAME, render: () => <MenuItem paneHeader={NST.NAME} fileName={NST.COLLECTION_NAME} paneKeys={NST.PANE_KEYS} /> },
    { menuItem: IGT.NAME, render: () => <MenuItem paneHeader={IGT.NAME} fileName={IGT.COLLECTION_NAME} paneKeys={IGT.PANE_KEYS} /> },
    { menuItem: INT.NAME, render: () => <MenuItem paneHeader={INT.NAME} fileName={INT.COLLECTION_NAME} paneKeys={INT.PANE_KEYS} /> },
    { menuItem: MBT.NAME, render: () => <MenuItem paneHeader={MBT.NAME} fileName={MBT.COLLECTION_NAME} paneKeys={MBT.PANE_KEYS} /> },
    { menuItem: SLDT.NAME, render: () => <MenuItem paneHeader={SLDT.NAME} fileName={SLDT.COLLECTION_NAME} paneKeys={SLDT.PANE_KEYS} /> },
    { menuItem: SLCT.NAME, render: () => <MenuItem paneHeader={SLCT.NAME} fileName={SLCT.COLLECTION_NAME} paneKeys={SLCT.PANE_KEYS} /> },
    { menuItem: UKDET.NAME, render: () => <MenuItem paneHeader={UKDET.NAME} fileName={UKDET.COLLECTION_NAME} paneKeys={UKDET.PANE_KEYS} /> },
    { menuItem: AGAT.NAME, render: () => <MenuItem paneHeader={AGAT.NAME} fileName={AGAT.COLLECTION_NAME} paneKeys={AGAT.PANE_KEYS} /> },
    { menuItem: GYMT.NAME, render: () => <MenuItem paneHeader={GYMT.NAME} fileName={GYMT.COLLECTION_NAME} paneKeys={GYMT.PANE_KEYS} /> },
    { menuItem: PDT.NAME, render: () => <MenuItem paneHeader={PDT.NAME} fileName={PDT.COLLECTION_NAME} paneKeys={PDT.PANE_KEYS} /> },
    { menuItem: OCT.NAME, render: () => <MenuItem paneHeader={OCT.NAME} fileName={OCT.COLLECTION_NAME} paneKeys={OCT.PANE_KEYS} /> },
    { menuItem: PCT.NAME, render: () => <MenuItem paneHeader={PCT.NAME} fileName={PCT.COLLECTION_NAME} paneKeys={PCT.PANE_KEYS} /> },
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

