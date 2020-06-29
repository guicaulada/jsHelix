export type RequestObject = boolean | string | number;

export interface RequestQuery {
  [key: string]: RequestObject | RequestObject[] | undefined;
}

export interface RequestBody {
  [key: string]:
    | RequestObject
    | RequestObject[]
    | RequestBody
    | RequestBody[]
    | undefined;
}

export interface RequestHeaders {
  [key: string]: string;
}

export interface RequestOptions {
  method: string;
  url: string;
  query?: RequestQuery;
  body?: RequestBody;
  headers?: RequestHeaders;
}

export interface RequestMessage {
  message: string;
}

export interface RequestResponse extends RequestBody {
  headers: RequestHeaders;
  status: number;
  message?: string;
}
