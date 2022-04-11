export interface IIssuesTileMetaData {
    title: string;
    status: keyof typeof Statuses;
    description?: string;
    changeSetDetails?: string;
    codeReviewComments?: string;
    qaComments: string;
    assignee: string;
    reporter: string;
    priority: 'low' | 'medium' | 'high';
    createdAt?: string;
    updatedAt: string;
    _id: string;
}

export enum Statuses {
    new = 'New',
    developmentInProgress = "Development In Progress",
    codeReview = "Code Review",
    packaging = "Packaging",
    qaInProgress = "QA In Progress",
    readyForRelease = "Ready For Release"
}

export type StatusesType = keyof typeof Statuses;
