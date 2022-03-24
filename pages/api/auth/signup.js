import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
	const { email, password } = req.body;
	if (
		!email ||
		!password ||
		!email.includes("@") ||
		password.trim().length < 4
	) {
		res.status(422).json({ error: "not valid data!" });
		return;
	}
	const client = await connectToDatabase();
	const db = client.db();
	const userExists = await db.collection("users").findOne({ email });
	if (userExists) {
		res.status(401).json({ error: "user already exists" });
		client.close();
		return;
	}

	const hashedPass = await hashPassword(password);
	const result = await db
		.collection("users")
		.insertOne({ email, password: hashedPass });

	res
		.status(201)
		.json({ message: "user Created!", data: { id: result.insertedId } });
	client.close();
};

export default handler;
