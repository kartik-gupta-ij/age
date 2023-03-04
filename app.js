const express = require("express");
const app = express();


PORT = process.env.PORT || 5005;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Express server is now listening to port ${PORT}`);
});
