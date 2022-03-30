export interface ICreateNewIssueBody {
    title: string,
    description?: string,
    changeSetDetails?: string,
    codeReviewComments?: string,
    qaComments?: string,
    assignee?: string,
    reporter?: string,
}
