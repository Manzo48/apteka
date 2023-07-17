const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use("/admin", require("./routes/admin.route.js"));
app.use('/client', require("./routes/client.route.js"));
mongoose.connect("mongodb+srv://kantaevm778:Lazy26speedking@cluster0.xflpdav.mongodb.net/pharmacy-bd?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))
app.listen(111, () => {
  console.log('Сервер запущен успешно')
})