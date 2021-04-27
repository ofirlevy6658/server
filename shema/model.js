<<<<<<< HEAD
const dynamo = require("dynamodb"); //need to download
// const Joi = require('joi');
dynamo.AWS.config.loadFromPath("credentials.json"); //need the path from Tanya
dynamo.AWS.config.update({
	accessKeyId: "AKIAX3XFV4XXX6R2XBO3",
	secretAccessKey: "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",
	region: "REGION",
}); //need the region from Tanya

const Item = dynamo.define("Item", {
	hashKey: "email",
	// add the timestamp attributes (updatedAt, createdAt)
	timestamps: true,
	schema: {
		url: dynamo.types.string(),
		title: dynamo.types.string(),
		brand: dynamo.types.string(),
		price: dynamo.types.number(),
		isTransalated: dynamo.types.boolean(),
		titleRussian: dynamo.types.string(),
		titleArabic: dynamo.types.string(),
		titleFrench: dynamo.types.string(),
		description: dynamo.types.string(),
		descritionRussian: dynamo.types.string(),
		descritionArabic: dynamo.types.string(),
		descritionFrench: dynamo.types.string(),
	},
});

module.exports = ItemModel;
=======
const dynamo = require('dynamodb');                          //need to download
// const Joi = require('joi');
dynamo.AWS.config.loadFromPath('credentials.json');          //need the path from Tanya
dynamo.AWS.config.update({
    accessKeyId: 'AKIAX3XFV4XXX6R2XBO3', 
    secretAccessKey: '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', 
    region: "REGION"});            //need the region from Tanya

    const Item = dynamo.define('Item', {
        hashKey : 'email',
        // add the timestamp attributes (updatedAt, createdAt)
        timestamps : true,
        schema : {
          url   : dynamo.types.string(),
          title    :dynamo.types.string(),
          brand : dynamo.types.string(),
          price     : dynamo.types.number(),
          isTransalated : dynamo.types.boolean(),
          titleRussian : dynamo.types.string(),
          titleArabic : dynamo.types.string(),
          titleFrench : dynamo.types.string(),
          description : dynamo.types.string(),
          descritionRussian : dynamo.types.string(),
          descritionArabic : dynamo.types.string(),
          descritionFrench : dynamo.types.string(),
        }
      });

      module.exports = ItemModel;
>>>>>>> 90c3283b1ac10327e36573f8cdf99269dca3f6b1
