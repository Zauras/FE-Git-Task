enum ERepoErrorType {
    LimitReqError,
    AnyError,
}

interface IRepoErrorDto {
    errorType: ERepoErrorType;
    statusCode: number | null;
}

export { ERepoErrorType };
export type { IRepoErrorDto };
