export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface RequestHeaders {
  [key: string]: string;
}

export interface RequestOptions {
  method: RequestMethod;
  url: string;
  query?: unknown;
  body?: unknown;
  headers?: RequestHeaders;
}

export interface RequestMessage {
  message: string;
}

export interface RequestResponse {
  headers: RequestHeaders;
  status: number;
  message?: string;
}
