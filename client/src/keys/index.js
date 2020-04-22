import {
    IGT,
    INT,
    NHT,
    OVT,
    OCT,
    PCT,
    SAT,
    NEXT,
    NSAT,
    NSDT,
    ORGT,
    UKDET,
    AGAT,
    LHT,
    NSHDT,
    NSHT,
    MBT,
    GYMT,
    SLDT,
    SLCT,
    PDT
} from '../teams';
import _ from "lodash";

const toCamelCase = (keysArray) => {
    return keysArray.map(key => {
        return _.camelCase(key)
    })
}

/* Addition */
export const IG_keys = toCamelCase(IGT.PANE_KEYS);
export const IN_keys = toCamelCase(INT.PANE_KEYS);
export const OC_keys = toCamelCase(OCT.PANE_KEYS);
export const OV_keys = toCamelCase(OVT.PANE_KEYS);
export const AGA_keys = toCamelCase(AGAT.PANE_KEYS);
export const NEX_keys = toCamelCase(NEXT.PANE_KEYS);
export const NSA_keys = toCamelCase(NSAT.PANE_KEYS);
export const NSD_keys = toCamelCase(NSDT.PANE_KEYS);
export const ORG_keys = toCamelCase(ORGT.PANE_KEYS);
export const UKDE_keys = toCamelCase(UKDET.PANE_KEYS);

/* Deduction */
export const LH_keys = toCamelCase(LHT.PANE_KEYS);
export const MB_keys = toCamelCase(MBT.PANE_KEYS);
export const PD_keys = toCamelCase(PDT.PANE_KEYS);
export const GYM_keys = toCamelCase(GYMT.PANE_KEYS);
export const NSH_keys = toCamelCase(NSHT.PANE_KEYS);
export const SLC_keys = toCamelCase(SLCT.PANE_KEYS);
export const SLD_keys = toCamelCase(SLDT.PANE_KEYS);
export const NSHD_keys = toCamelCase(NSHDT.PANE_KEYS);

/* Profile Change */
export const PC_keys = toCamelCase(PCT.PANE_KEYS);

/* Salary Adjustment */
export const SA_keys = toCamelCase(SAT.PANE_KEYS);

/* New Hires */
export const NH_keys = toCamelCase(NHT.PANE_KEYS);