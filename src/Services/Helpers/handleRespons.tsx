import { exception } from 'console';
// eslint-disable-next-line import/no-cycle
import { logout } from '../Auth/login';

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
    if ([401, 403].indexOf(response.status) !== -1) {
        logout();
    }
    return { error: data, statusText: response.statusText };
  }
  if (IsJsonString(data)) return JSON.parse(data);
  return data;
}

export default handleResponse;
