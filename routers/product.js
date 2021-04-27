const express = require("express");
const Scraper = require("../scraper/scraper");
const controller = require("../shema/dynamo");
const router = new express.Router();

// the client send in get body {"url":"exe.com"}
router
	.post("/api/product", async (req, res) => {
		try {
			const url = req.body.url;
			if (!url) throw new Error("bad request url parameter is missing");
			const urlData = await Scraper(url);
			await controller.addOrUpdateProduct(urlData);
			res.status(201).send(urlData);
		} catch (e) {
			res.status(400).send({ error: e.message });
		}
	})
	.get("/api/product", async (req, res) => {
		try {
			const products = await controller.getProducts();
			res.status(201).send(products);
		} catch (e) {
			res.status(400).send({ error: e.message });
		}
	})
	.get("/api/product/:id", async (req, res) => {
		const { id } = req.body;
		try {
			const product = await controller.getProductById(id);
			res.status(201).send(product);
		} catch (e) {
			res.status(400).send({ error: e.message });
		}
	})
	.delete("/api/product/:id", async (req, res) => {
		const { id } = req.body;
		try {
			const product = await controller.deleteProduct(id);
			res.status(201).send(product);
		} catch (e) {
			res.status(400).send({ error: e.message });
		}
	});

module.exports = router;
