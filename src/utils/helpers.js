import { COLORS } from "../enums";

export const resolvePath = (pObject, pPathString, pDefaultValue) => {
  return pPathString.split(".").reduce((pObject, pKey) => {
    if (pObject && pObject[pKey]) {
      return pObject[pKey];
    }
    return pDefaultValue;
  }, pObject);
};

export const getColor = (pPathString) => {
  const xStrSize = pPathString.split(".").length;

  if (xStrSize < 2) {
    return COLORS.common.black;
  }

  return resolvePath(COLORS, pPathString, COLORS.error.main);
};

export default { resolvePath, getColor };
