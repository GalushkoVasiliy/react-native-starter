// @flow


/* CONFIGS */
import { REGEXP_CONFIG } from "src/configs";


/**
 * Validate email
 *
 * @param {string} email - email to validate
 *
 * @returns string - error message
 */
export const getEmailValidationError = (email: string): string => {
  if (!email || !email.trim()) {
    return "default_errors:required";
  }
  return REGEXP_CONFIG.email.test(email) === false
    ? "default_errors:format"
    : "";
};


/**
 * Validate password
 *
 * @param {string} password - password to validate
 *
 * @returns string - error message
 */
export const getPasswordValidationError = (password: string): string => {
  if (!password || !password.trim()) {
    return "default_errors:required";
  }

  return REGEXP_CONFIG.passwordNum.test(password) || REGEXP_CONFIG.password.test(password) === false
    ? "default_errors:format"
    : "";
};


/**
 * Validate password equality
 *
 * @param {string} pass1 - first password
 * @param {string} pass2 - second password
 *
 * @returns string - error message
 */
export const getPasswordEqualityValidationError = (pass1: string, pass2: string): string => {
  const firstPassErrorMessage = getPasswordValidationError(pass1);
  const secondPassErrorMessage = getPasswordValidationError(pass2);

  // @Note: check errors in passwords
  if (firstPassErrorMessage || secondPassErrorMessage) {
    return firstPassErrorMessage || secondPassErrorMessage;
  }

  // @Note: validate equality
  if (pass1 !== pass2) {
    return "default_errors:confirm";
  }

  return "";
};
