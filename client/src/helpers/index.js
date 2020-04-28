import _ from "lodash";
import { EXPORT_DATA_API } from "../api";
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
    UKDET,
    LHT,
    NSHDT,
    NSHT,
    MBT,
    GYMT,
    SLDT,
    SLCT,
    PDT,
    NHT,
    SAT,
    PCT
} from "../teams"

export const additionRequest = (year, month) => {

    let IG_API = EXPORT_DATA_API + IGT.INITIAL_ROUTE + "/" + year + "/" + month;
    let IN_API = EXPORT_DATA_API + INT.INITIAL_ROUTE + "/" + year + "/" + month;
    let OC_API = EXPORT_DATA_API + OCT.INITIAL_ROUTE + "/" + year + "/" + month;
    let OV_API = EXPORT_DATA_API + OVT.INITIAL_ROUTE + "/" + year + "/" + month;
    let AGA_API = EXPORT_DATA_API + AGAT.INITIAL_ROUTE + "/" + year + "/" + month;
    let NEX_API = EXPORT_DATA_API + NEXT.INITIAL_ROUTE + "/" + year + "/" + month;
    let NSA_API = EXPORT_DATA_API + NSAT.INITIAL_ROUTE + "/" + year + "/" + month;
    let NSD_API = EXPORT_DATA_API + NSDT.INITIAL_ROUTE + "/" + year + "/" + month;
    let ORG_API = EXPORT_DATA_API + ORGT.INITIAL_ROUTE + "/" + year + "/" + month;
    let UKDE_API = EXPORT_DATA_API + UKDET.INITIAL_ROUTE + "/" + year + "/" + month;

    return Promise.all([
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
        if (
            IGRD.length === 0 && INRD.length === 0 &&
            OCRD.length === 0 && OVRD.length === 0 &&
            AGARD.length === 0 && NEXRD.length === 0 &&
            NSARD.length === 0 && NSDRD.length === 0 &&
            ORGRD.length === 0 && UKDERD.length === 0
        ) {
            return [];
        } else {
            return [IGRD, INRD, OCRD, OVRD, AGARD, NEXRD, NSARD, NSDRD, ORGRD, UKDERD];
        }
    }).catch(err => {
        throw err;
    })
}

export const deductionRequest = (year, month) => {

    let LH_API = EXPORT_DATA_API + "/" + LHT.INITIAL_ROUTE + "/" + year + "/" + month;
    let MB_API = EXPORT_DATA_API + "/" + MBT.INITIAL_ROUTE + "/" + year + "/" + month;
    let PD_API = EXPORT_DATA_API + "/" + PDT.INITIAL_ROUTE + "/" + year + "/" + month;
    let NSH_API = EXPORT_DATA_API + "/" + NSHT.INITIAL_ROUTE + "/" + year + "/" + month;
    let GYM_API = EXPORT_DATA_API + "/" + GYMT.INITIAL_ROUTE + "/" + year + "/" + month;
    let SLC_API = EXPORT_DATA_API + "/" + SLCT.INITIAL_ROUTE + "/" + year + "/" + month;
    let SLD_API = EXPORT_DATA_API + "/" + SLDT.INITIAL_ROUTE + "/" + year + "/" + month;
    let NSHD_API = EXPORT_DATA_API + "/" + NSHDT.INITIAL_ROUTE + "/" + year + "/" + month;

    return Promise.all([
        fetch(LH_API).then(res => { return res.json() }),
        fetch(MB_API).then(res => { return res.json() }),
        fetch(PD_API).then(res => { return res.json() }),
        fetch(NSH_API).then(res => { return res.json() }),
        fetch(GYM_API).then(res => { return res.json() }),
        fetch(SLC_API).then(res => { return res.json() }),
        fetch(SLD_API).then(res => { return res.json() }),
        fetch(NSHD_API).then(res => { return res.json() })
    ]).then(([LHRD, MBRD, PDRD, NSHRD, GYMRD, SLCRD, SLDRD, NSHDRD]) => {
        if (
            LHRD.length === 0 && MBRD.length === 0 &&
            PDRD.length === 0 && NSHRD.length === 0 &&
            GYMRD.length === 0 && SLCRD.length === 0 &&
            SLDRD.length === 0 && NSHDRD.length === 0
        ) {
            return []
        } else {
            return [LHRD, MBRD, PDRD, NSHRD, GYMRD, SLCRD, SLDRD, NSHDRD];
        }
    }).catch(err => {
        throw err;
    })
}

export const newHiresRequest = (year, month) => {
    let API = EXPORT_DATA_API + NHT.INITIAL_ROUTE + "/" + year + "/" + month;
    return fetch(API, {
        headers: { "Content-Type": "application/json" },
        method: 'GET'
    }).then(res => {
        return res.json();
    }).then(NHRD => {
        if (NHRD.length === 0) {
            return []
        } else {
            return [NHRD]
        }
    }).catch(err => {
        throw err;
    })
}

export const salaryAdjustmentRequest = (year, month) => {
    let API = EXPORT_DATA_API + SAT.INITIAL_ROUTE + "/" + year + "/" + month;
    return fetch(API, {
        headers: { "Content-Type": "application/json" },
        method: 'GET'
    }).then(res => {
        return res.json();
    }).then(SARD => {
        if (SARD.length === 0) {
            return []
        } else {
            return [SARD]
        }
    }).catch(err => {
        throw err;
    })
}

export const profileChangeRequest = (year, month) => {
    let API = EXPORT_DATA_API + PCT.INITIAL_ROUTE + "/" + year + "/" + month;
    return fetch(API, {
        headers: { "Content-Type": "application/json" },
        method: 'GET'
    }).then(res => {
        return res.json();
    }).then(PCRD => {
        if (PCRD.length === 0) {
            return []
        } else {
            return [PCRD]
        }
    }).catch(err => {
        throw err;
    })
}

export const fetchDataRequest = (year, month, teamName) => {
    let SEARCH_API = EXPORT_DATA_API + "/" + _.kebabCase(teamName) + "/" + year + "/" + month;
    return fetch(SEARCH_API, {
        headers: { "Content-Type": "application/json" },
        method: "GET"
    }).then(res => {
        return res.json();
    }).then(data => {
        if (data.length === 0) {
            return []
        } else {
            return data
        }
    }).catch(err => {
        throw err;
    })
}