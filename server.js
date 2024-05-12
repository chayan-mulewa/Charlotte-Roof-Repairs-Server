const app = require('./app');
const PORT_NUMBER = 5000;

app.listen(PORT_NUMBER, () => {
  console.log("server is started at port number : " + PORT_NUMBER);
});
