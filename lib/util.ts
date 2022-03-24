export const elipses = (str: string) => {
	return str.length > 20 ? `${str.substring(0, 16)}...` : str;
};
