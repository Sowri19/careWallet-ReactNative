export interface ApiObject<T> {
  requestData: T;
  successCB: (data: any) => any;
  errorCB: (data: any) => any;
  exceptionCB: (data: any) => any;
}