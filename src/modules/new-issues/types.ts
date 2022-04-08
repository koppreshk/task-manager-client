import { IIssuesTileMetaData } from "../shared/components";

export interface INewIssuesData extends IIssuesTileMetaData {

}

export enum NewIssuesQueryName {
    GetNewIssuesList = 'getNewIssuesList'
}