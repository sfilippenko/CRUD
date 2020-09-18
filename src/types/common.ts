export interface IResponseCallbacks<S = any, E = any> {
  onSuccess?: (response?: S) => void;
  onError?: (error?: E) => void;
  onFinally?: () => void;
}
