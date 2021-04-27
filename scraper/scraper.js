const puppeteer = require("puppeteer");

const scraper = async (url) => {
	const browser = await puppeteer.launch({
		args: ["--no-sandbox", "--disable-setuid-sandbox"],
	});
	const page = await browser.newPage();
	await page.goto(url);

	const title = await page.evaluate(
		() => document.querySelector("h2.deal-title").innerHTML
	);

	const price = await page.evaluate(
		() => document.querySelector("#DealPrice").innerHTML
	);

	const brend = await page.evaluate(
		() => document.querySelector("#DealPrice").innerHTML
	);

	await browser.close();

	return {
		url,
		title,
		price,
		titleRussian: undefined,
		titleFrance: undefined,
		titleArbic: undefined,
		descriptionRussian: undefined,
		descriptionFrance: undefined,
		descriptionArbic: undefined,
	};
};

(async () => {
	console.log(
		await scraper(
			"https://www.azrieli.com/o/125621e9-4da0-47c9-8992-6e0fdc1c2169"
		)
	);
})();

module.exports = scraper;
