const express = require("express");
const router = new express.Router();

// the client send in get body {"url":"exe.com"}

router.get("/api/product", async (req, res) => {
	try {
		console.log("test");
		const url = req.body.url;
		if (!url) throw new Error("bad request url parameter is missing");
		// Here I send the url to Sergy
		// and he return me the data and also send it to Gilad to save the data in db
		// const productData = await function(url)
		//then I send the data back to client side
		res.status(201).send(url);
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

module.exports = router;
