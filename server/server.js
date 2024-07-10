const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();






app.use(cookieParser());



mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(PORT, () => console.log(`Server Is 🏃‍♂️ On PORT ${PORT}`));
	})
	.catch((err) => console.log(err));