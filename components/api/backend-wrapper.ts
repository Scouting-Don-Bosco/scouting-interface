import { LoginResponse } from "./interfaces/login.response";

export interface ApiOptions {
  token?: string;
  body?: any;
}

const baseUrl = "http://localhost:8080/api";

export async function login(
  email: string,
  password: string
): Promise<LoginResponse> {
  const url = baseUrl + "/auth/login";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    return {
      success: false,
      errorMessage: data.message,
      for: data.for,
    };
  }
  return {
    success: true,
    access_token: data.access_token,
    refresh_token: data.refresh_token,
  } as LoginResponse;
}

export async function get(
  uri: string,
  token?: string,
  body?: any,
  urlParams?: any
) {
  const url = baseUrl + uri;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    ...(token && { Authorization: `Bearer ${token}` }),
  };
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
      //if there is an access token, set the auth header
      ...(token && { Authorization: `Bearer ${token}` }),
      //if there is a body, set the content type
      ...(body && { "Content-Type": "application/json" }),
    },
    ...(body && { body: JSON.stringify(body) }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}
