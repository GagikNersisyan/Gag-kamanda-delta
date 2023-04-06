export const GENERAL_ERRORS = {
  isString: 'Field must be string',
  isNumber: 'Field must be number',
  oneOf: (arr) => `Field must be one of < ${arr.toString()} >`,
  isFromToNumber: (from, to) => `Field must be from ${from} to ${to} number`,
  emailValidation: 'Email is not valid',
  isRequired: (field) => `${field} is require`,
  fieldMinMax: (field, min, max) => `${field} must be from ${min} to ${max}`,
  firstLetterUppercase: 'First letter must be Uppercase',
  isAlpha: 'field No contain symbols',
};
export const USER_ERRORS = {

};