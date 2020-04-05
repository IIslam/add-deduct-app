import {
    SAT,
    OVT,
    NEXT,
    NSADT,
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
    PCT, HRT
} from '../teams';

const roleRoute = {
    ADA_IG: IGT.INITIAL_ROUTE,
    ADA_IN: INT.INITIAL_ROUTE,
    ADA_LH: LHT.INITIAL_ROUTE,
    ADA_MB: MBT.INITIAL_ROUTE,
    ADA_OC: OCT.INITIAL_ROUTE,
    ADA_PC: PCT.INITIAL_ROUTE,
    ADA_PD: PDT.INITIAL_ROUTE,
    ADA_SA: SAT.INITIAL_ROUTE,
    ADA_AGA: AGAT.INITIAL_ROUTE,
    ADA_GYM: GYMT.INITIAL_ROUTE,
    ADA_OVT: OVT.INITIAL_ROUTE,
    ADA_NEX: NEXT.INITIAL_ROUTE,
    ADA_NSH: NSHT.INITIAL_ROUTE,
    ADA_SLC: SLCT.INITIAL_ROUTE,
    ADA_SLD: SLDT.INITIAL_ROUTE,
    ADA_NSAD: NSADT.INITIAL_ROUTE,
    ADA_NSHD: NSHDT.INITIAL_ROUTE,
    ADA_UKDE: UKDET.INITIAL_ROUTE,
}

const getInitialRoute = (role) => {
    return roleRoute[role];
}

module.exports = {
    getInitialRoute
}