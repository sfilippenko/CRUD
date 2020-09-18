import { AxiosError } from 'axios';

export interface IResponseCallbacks<S = any, E = AxiosError> {
  onSuccess?: (response?: S) => void;
  onError?: (error?: E) => void;
  onFinally?: () => void;
}
