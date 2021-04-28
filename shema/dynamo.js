const AWS = require("aws-sdk");

AWS.config.update({
	region: "eu-west-2",
	accessKeyId: "AKIAX3XFV4XX2AETP2HR",
	secretAccessKey: "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",
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "test";

const getProducts = async () => {
	const params = {
		TableName: TABLE_NAME,
	};
	const products = await dynamoClient.scan(params).promise();
	return products;
};

const addOrUpdateProduct = async (product) => {
	const params = {
		TableName: TABLE_NAME,
		Item: product,
	};
	return await dynamoClient.put(params).promise();
};

const getProductById = async (id) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id,
		},
	};
	return await dynamoClient.get(params).promise();
};

const deleteProduct = async (id) => {
	const params = {
		TableName: TABLE_NAME,
		Key: {
			id,
		},
	};
	return await dynamoClient.delete(params).promise();
};

module.exports = {
	getProducts,
	addOrUpdateProduct,
	getProductById,
	deleteProduct,
};
