const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("Express on deploy and this is deploy project");
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});