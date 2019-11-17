declare namespace Ajax {
  export interface AxioResponse {
    data: AjaxResponse;
  }

  export interface AjaxResponse {
    status?: number;
    data: any;
    desc?: string;
  }
}
