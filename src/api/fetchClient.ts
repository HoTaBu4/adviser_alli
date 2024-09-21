
const BASE_URL = "http://127.0.0.1:8000";

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

async function request<T>(
  url: string,
  method: RequestMethod = "GET",
  data: any = null,
): Promise<T> {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }
  const response = await fetch(BASE_URL + url, options);

  return await response.json();
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: any) => request<T>(url,'POST' ,data),
  patch: <T>(url: string,data: any) => request<T>(url,'PATCH',data),
  delete: <T>(url: string) => request<T>(url,'DELETE'),
};
