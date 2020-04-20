// @flow


// import { postRequest } from "src/requests/base_requests";

export const login = (): Promise<string> => new Promise((resolve) => {
  setTimeout(() => resolve("login"), 1500);
});

export const signUp = (): Promise<string> => new Promise((resolve) => {
  setTimeout(() => resolve("signUp"), 1500);
});

export const forgotPassword = (): Promise<string> => new Promise((resolve) => {
  setTimeout(() => resolve("forgotPassword"), 1500);
});

export const resetPassword = (): Promise<string> => new Promise((resolve) => {
  setTimeout(() => resolve("resetPassword"), 1500);
});
