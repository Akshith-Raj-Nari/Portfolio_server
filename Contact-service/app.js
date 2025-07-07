const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connection } = require("./config/db");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to DB once
connection();

app.use("/api/contact", require("./routes/add_contact"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
