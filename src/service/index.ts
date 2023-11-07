/* eslint-disable import/no-extraneous-dependencies */

import config from "../utils/config";

const apiRequest = async <T>({ path, method, body }: any): Promise<T> => {
  const url = config.URL;
  const settings = {
    method,
    url: `${url}${path}`,
    headers: { "Content-Type": "application/json" },
    responseType: "json",
    body,
  } as any;

  const response = await fetch(settings.url, {
    method: settings.method,
    headers: settings.headers,
    body: JSON.stringify(settings.body),
  });

  const results = await response.json();
  if (response.ok) {
    console.log(`Response from API ${path} ====> `, results);
    if (results) {
      return Promise.resolve(results);
    }
    return Promise.reject(new Error(`No posts "`));
  }

  const error = new Error(
    results.errors.map((e: any) => e).join("\n") ?? "unknown"
  );
  return Promise.reject(error);
};

export default apiRequest;
