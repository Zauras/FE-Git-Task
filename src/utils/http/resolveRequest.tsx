import { AxiosResponse, AxiosError, AxiosPromise } from 'axios';

const parseResult = (response: AxiosResponse) => (response?.data ? response.data : response);

type TRequestResult<ReturnType> = {
    data: ReturnType | null;
    error: AxiosError | null;
    status: number | null;
};

type TAsyncRequestResult<ReturnType> = Promise<TRequestResult<ReturnType>>;

async function resolveRequest<ReturnType>(
    requestPromise: AxiosPromise
): TAsyncRequestResult<ReturnType> {
    const result: TRequestResult<ReturnType> = { data: null, error: null, status: null };

    try {
        const response: AxiosResponse = await requestPromise;
        result.status = response.status;
        result.data = parseResult(response);
    } catch (error) {
        result.error = error as AxiosError;
    }

    return result;
}

export type { TRequestResult, TAsyncRequestResult };
export { resolveRequest };
