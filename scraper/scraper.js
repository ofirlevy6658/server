const puppeteer = require("puppeteer");
const uniqid = require("uniqid");

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
	const imgUrl = await page.evaluate(
		() => document.querySelector("#mainImage").src
	);
	const text = await page.$eval(".finePrint p", (uiElement) => {
		return uiElement.innerHTML;
	});
	// console.log(text);
	// text.map((el) => {
	// 	console.log(el);
	// });

	// await browser.close();

	return {
		url,
		title,
		price,
		imgUrl,
		isTransalated: false,
		titleRussian: undefined,
		titleFrance: undefined,
		titleArbic: undefined,
		numOfPayments: NumOfPayments.trim(),
		numOfPaymentsRussian: undefined,
		numOfPaymentsFrance: undefined,
		numOfPaymentsArbic: undefined,
		id: uniqid(),
	};
};

module.exports = scraper;
