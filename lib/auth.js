import { hash } from "bcryptjs";
export const hashPassword = async (password) => {
	const newPass = await hash(password, 12);
	return newPass;
};
