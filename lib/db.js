const { MongoClient } = require("mongodb");

export const connectToDatabase = async () => {
	const client = await MongoClient.connect(
		"mongodb+srv://admin:Nishchay1301@firstcluster.uuqis.mongodb.net/Lew?retryWrites=true&w=majority"
	);
	return client;
};
