import { AxiosResponse } from 'axios';
import { useCallback, useState } from 'react';

// 제네릭 타입으로 params 와 response 를 사용하는 시점에 타입을 결정할 수 있음
export const useApiRequest = <TParams, TResponse>(
  apiFunction: (params: TParams) => Promise<AxiosResponse<TResponse>>,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // options: {onSuccess, onError}
  const execute = useCallback(
    async (
      params: TParams,
      {
        onSuccess,
        onError,
      }: {
        onSuccess?: (response: AxiosResponse<TResponse>) => void;
        onError?: (error: Error) => void;
      },
    ) => {
      try {
        setIsLoading(true);
        setError(null);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await apiFunction(params);
        if (onSuccess) onSuccess(response);
      } catch (err) {
        setError(err as Error);
        if (onError) onError(err as Error);
      } finally {
        setIsLoading(false);
      }
    },
    [apiFunction],
  );

  return { isLoading, error, execute };
};
