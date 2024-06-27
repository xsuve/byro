import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export function GET<T>(url: string) {
  return api.get<T>(url);
}

export function POST<T>(url: string, data = {} as T, options: any) {
  return api.post<T>(url, data, options);
}

export function UPDATE(url: string, data = {}) {
  return api.put(url, data);
}

export function DELETE(url: string) {
  return api.delete(url);
}
