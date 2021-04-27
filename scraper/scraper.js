const { default: axios } = require("axios");
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

	const NumOfPayments = await page.evaluate(
		() => document.querySelector("#NumOfPayments").textContent
	);

	await browser.close();

	return {
		url,
		title,
		price,
		isTransalated: false,
		titleRussian: undefined,
		titleFrance: undefined,
		titleArbic: undefined,
		numOfPayments: NumOfPayments.trim(),
		numOfPaymentsRussian: undefined,
		numOfPaymentsFrance: undefined,
		numOfPaymentsArbic: undefined,
	};
};

(async () => {
	console.log(
		await scraper(
			"https://www.azrieli.com/o/bbb71506-ff57-490d-b530-9daaa1c0141e"
		)
	);
})();

module.exports = scraper;
