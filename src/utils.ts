export const pathRegex = new RegExp("^44'(\\/[0-9]+')+$");

export const replaceDerive = (val: string): string => val.replace("'", '');
