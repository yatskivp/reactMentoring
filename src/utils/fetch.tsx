import axios, { Method } from 'axios';

interface IPayload {
  [index: string]: any,
}

interface IOptions {
  url: string,
  method: Method,
  [index: string]: string | object,
}

export interface IParams {
  payload: IPayload,
  options: IOptions
};

export default async ({ payload, options }: IParams) => {
  const {method, url = ''} = options;
  const result = await axios({
    method,
    url,
    data: payload
  });

  return result;
}