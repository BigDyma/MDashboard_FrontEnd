import { exception } from 'console';

/* eslint-disable no-restricted-globals */
function IsJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function handleResponse(response: Response) {
  const text = await response.text();
  const data = text;
  if (!response.ok) {
    return { error: data, statusText: response.statusText };
  }
  if (IsJsonString(data)) return JSON.parse(data);
  return data;
}

export default handleResponse;
