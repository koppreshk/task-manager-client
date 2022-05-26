export enum LocalStorageKeys {
    LOGIN_DATA = 'loginData'
}

export enum ReactQueryKeys {
    GetAllNewIssues = 'getAllNewIssues',
    GetAllDevIssues = 'getAllDevIssues',
    GetAllCodeReviewIssues = 'getAllCodeReviewIssues',
    GetAllPackagingIssues = 'getAllPackagingIssues',
    GetAllQAInProgressIssues = 'getAllQAInProgressIssues',
    GetAllReadyForReleaseIssues = 'getAllReadyForReleaseIssues',
    GetNewIssueByID = 'getNewIssueByID',
    GetAllUsers = 'getAllUsers'
};

export enum APIEndPoints {
    GetAllNewIssues = '/api/v1/newIssues/getAllNewIssues',
    GetAllDevIssues = '/api/v1/devIssues/getAllDevIssues',
    GetAllCodeReviewIssues = '/api/v1/codeReviewIssues/getAllCodeReviewIssues',
    GetAllPackagingIssues = '/api/v1/packagingIssues/getAllPackagingIssues',
    GetAllQAInProgressIssues = '/api/v1/qaInProgressIssues/getAllQAInProgressIssues',
    GetAllReadyForReleaseIssues = '/api/v1/readyForReleaseIssues/getAllReadyForReleaseIssues',
    GetAllUsers = '/api/v1/getAllUsers',

    PostCreateNewIssue = '/api/v1/newIssues/createNewIssue'
}