// const dynamo = require("dynamodb"); //need to download
const AWS = require("aws-sdk");

// const Joi = require('joi');
// AWS.config.loadFromPath("credentials.json"); //need the path from Tanya
AWS.config.update({
	accessKeyId: "AKIAX3XFV4XXX6R2XBO3",
	secretAccessKey: "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",
	region: "eu-west-2",
}); //need the region from Tanya

// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
const params = {
	AttributeDefinitions: [
		{
			AttributeName: "CUSTOMER_ID",
			AttributeType: "N",
		},
		{
			AttributeName: "CUSTOMER_NAME",
			AttributeType: "S",
		},
	],
	KeySchema: [
		{
			AttributeName: "CUSTOMER_ID",
			KeyType: "HASH",
		},
		{
			AttributeName: "CUSTOMER_NAME",
			KeyType: "RANGE",
		},
	],
	ProvisionedThroughput: {
		ReadCapacityUnits: 1,
		WriteCapacityUnits: 1,
	},
	TableName: "test",
	StreamSpecification: {
		StreamEnabled: false,
	},
};

// const Item = dynamo.define("Item", {
// 	hashKey: "email",
// 	// add the timestamp attributes (updatedAt, createdAt)
// 	timestamps: true,
// 	schema: {
// 		url: dynamo.types.StringSet(),
// 		title: dynamo.types.StringSet(),
// 		brand: dynamo.types.StringSet(),
// 		price: dynamo.types.SetNumber(),
// 		isTransalated: dynamo.types.boolean(),
// 		titleRussian: dynamo.types.StringSet(),
// 		titleArabic: dynamo.types.StringSet(),
// 		titleFrench: dynamo.types.StringSet(),
// 		description: dynamo.types.StringSet(),
// 		descritionRussian: dynamo.types.StringSet(),
// 		descritionArabic: dynamo.types.StringSet(),
// 		descritionFrench: dynamo.types.StringSet(),
// 	},
// });

// module.exports = ItemModel;
