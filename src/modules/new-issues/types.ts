export interface INewIssuesData {
    title: string;
    description?: string;
    changeSetDetails?: string;
    codeReviewComments?: string;
    qaComments: string;
    assignee: string;
    reporter: string;
    priority: string;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
}