const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
	region: "eu-west-2",
	accessKeyId: "AKIAX3XFV4XX2AETP2HR",
	secretAccessKey: "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",
});

const dynamoClient = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "test";

const getProducts = async () => {
	const params = {
		tableName: TABLE_NAME,
	};
	const products = await dynamoClient.scan(params).promise();
	console.log(products);
	return products;
};

const addOrUpdateProduct = async (product) => {
	const params = {
		TableName: TABLE_NAME,
		Item: product,
	};
	return await dynamoClient.put(params).promise();
};

const product = {
	url: "https://www.azrieli.com/o/bbb71506-ff57-490d-b530-9daaa1c0141e",
	title: "בושם לאישה Prada Infusion Diris E.D.P 100 ﻿",
	price: "339",
	isTransalated: false,
	titleRussian: undefined,
	titleFrance: undefined,
	titleArbic: undefined,
	numOfPayments: "ניתן לפרוס עד 6  תשלומים ללא ריבית",
	numOfPaymentsRussian: undefined,
	numOfPaymentsFrance: undefined,
	numOfPaymentsArbic: undefined,
};

addOrUpdateProduct(product);
