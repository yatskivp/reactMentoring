import axios from 'axios';

interface Options {
  url: string,
  [index: string]: any
};

export default async (payload: any, options: Options) => {
  const {method, url} = options;
  const result = await axios({
    method,
    url,
    data: payload
  });

  return result;
}