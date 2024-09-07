import IWorks from "./IWorks";

export enum FETCH_SITES {
    REQUEST = "FETCH_SITES_REQUEST",
    SUCCESS = "FETCH_SITES_SUCCESS",
    FAILURE = "FETCH_SITES_FAILURE",
}

export type SitesState = {
    sites: IWorks[];
    loading: boolean;
    error: string | null;
};

export type SitesAction = {
    type: FETCH_SITES.REQUEST;
    } | {
    type: FETCH_SITES.SUCCESS;
    payload: IWorks[];
    } | {
    type: FETCH_SITES.FAILURE;
    payload: string;
}