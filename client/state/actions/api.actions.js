import { METHODS } from "http";

export const API_REQUEST = '[app] API_REQUEST'

export const apiRequest = (method, url, body, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, onError, onSuccess }
});