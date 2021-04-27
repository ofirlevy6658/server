const express = require("express");
const Scraper = require("../scraper/scraper");
const router = new express.Router();

// the client send in get body {"url":"exe.com"}
router.get("/api/product", async (req, res) => {
	try {
		const url = req.body.url;
		if (!url) throw new Error("bad request url parameter is missing");
		const urlData = await Scraper(url);
		console.log("test");
		res.status(201).send(urlData);
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

module.exports = router;
