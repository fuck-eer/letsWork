import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";
import { compare } from "bcryptjs";
export default NextAuth({
	session: { jwt: true },
	providers: [
		Providers.Credentials({
			async authorize(creds) {
				const client = await connectToDatabase();
				const users = client.db().collection("users");
				const user = await users.findOne({ email: creds.email });
				if (!user) {
					client.close();
					throw new Error("No User Found!");
				}
				const hashedEntPassword = await hashPassword(creds.password);
				const passMatched = await compare(hashedEntPassword, user.password);
				if (!passMatched) {
					client.close();
					throw new Error("incorrect creds");
				}
				client.close();
				return { email: creds.password };
			},
		}),
	],
});
