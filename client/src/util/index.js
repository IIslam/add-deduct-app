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
    PDT,
    HRT
} from '../teams';
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
    UKDE_keys,
    LH_keys,
    MB_keys,
    PD_keys,
    GYM_keys,
    NSH_keys,
    SLC_keys,
    SLD_keys,
    NSHD_keys,
    PC_keys,
    SA_keys,
    NH_keys
} from "../keys";

const roleRoute = {
    ADA_HR: HRT.INITIAL_ROUTE,
    ADA_IG: IGT.INITIAL_ROUTE,
    ADA_IN: INT.INITIAL_ROUTE,
    ADA_LH: LHT.INITIAL_ROUTE,
    ADA_MB: MBT.INITIAL_ROUTE,
    ADA_OC: OCT.INITIAL_ROUTE,
    ADA_PC: PCT.INITIAL_ROUTE,
    ADA_PD: PDT.INITIAL_ROUTE,
    ADA_SA: SAT.INITIAL_ROUTE,
    ADA_NH: NHT.INITIAL_ROUTE,
    ADA_OVT: OVT.INITIAL_ROUTE,
    ADA_AGA: AGAT.INITIAL_ROUTE,
    ADA_GYM: GYMT.INITIAL_ROUTE,
    ADA_NEX: NEXT.INITIAL_ROUTE,
    ADA_NSH: NSHT.INITIAL_ROUTE,
    ADA_ORG: ORGT.INITIAL_ROUTE,
    ADA_SLC: SLCT.INITIAL_ROUTE,
    ADA_SLD: SLDT.INITIAL_ROUTE,
    ADA_NSAD: NSAT.INITIAL_ROUTE,
    ADA_NSHD: NSHDT.INITIAL_ROUTE,
    ADA_UKDE: UKDET.INITIAL_ROUTE,
}

export const MONTHS = [
    { key: 'jan', value: 'january', text: 'January' },
    { key: 'feb', value: 'february', text: 'February' },
    { key: 'mar', value: 'march', text: 'March' },
    { key: 'apr', value: 'april', text: 'April' },
    { key: 'may', value: 'may', text: 'May' },
    { key: 'jun', value: 'june', text: 'June' },
    { key: 'jul', value: 'july', text: 'July' },
    { key: 'aug', value: 'august', text: 'August' },
    { key: 'sep', value: 'september', text: 'September' },
    { key: 'oct', value: 'october', text: 'October' },
    { key: 'nov', value: 'november', text: 'November' },
    { key: 'dec', value: 'december', text: 'December' },
]

export const YEARS = [
    { key: '2020', value: '2020', text: '2020' },
    { key: '2021', value: '2021', text: '2021' },
    { key: '2022', value: '2022', text: '2022' }
]

export const FILES = [
    { key: 'addition', value: 'addition', text: 'Addition' },
    { key: 'new hires', value: 'new hires', text: 'New Hires' },
    { key: 'deduction', value: 'deduction', text: 'Deduction' },
    { key: 'profile change', value: 'profile change', text: 'Profile Change' },
    { key: 'salary adjustment', value: 'salary adjustment', text: 'Salary Adjustment' },
]

export const getInitialRoute = (role) => {
    return roleRoute[role];
}

export const getKeysAndSheets = (sheetName) => {

    let isAddition = sheetName.includes("addition");
    let isNewHires = sheetName.includes("new hires");
    let isDeduction = sheetName.includes("deduction");
    let isProfileChange = sheetName.includes("profile change");
    let isSalaryAdjustment = sheetName.includes("salary adjustment")

    if (isAddition) {
        return {
            keys: [
                IG_keys, IN_keys, OC_keys, OV_keys,
                AGA_keys, NEX_keys, NSA_keys, NSD_keys,
                ORG_keys, UKDE_keys
            ],
            sheets: [
                IGT.NAME, INT.NAME, OCT.NAME, OVT.NAME,
                AGAT.NAME, NEXT.NAME, NSAT.NAME, NSDT.NAME,
                ORGT.NAME, UKDET.NAME
            ]
        }
    }

    if (isDeduction) {
        return {
            keys: [
                LH_keys, MB_keys, PD_keys,
                GYM_keys, NSH_keys, SLC_keys,
                SLD_keys, NSHD_keys
            ],
            sheets: [
                LHT.NAME, MBT.NAME, PDT.NAME,
                GYMT.NAME, NSHT.NAME, SLCT.NAME,
                SLDT.NAME, NSHDT.NAME
            ]
        }
    }

    if (isNewHires) {
        return {
            keys: [NH_keys],
            sheets: [NHT.NAME]
        }
    }

    if (isProfileChange) {
        return {
            keys: [PC_keys],
            sheets: [PCT.NAME]
        }
    }

    if (isSalaryAdjustment) {
        return {
            keys: [SA_keys],
            sheets: [SAT.NAME]
        }
    }

}