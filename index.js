const express = require("express");
const productRouter = require("./routers/product");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(productRouter);

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
