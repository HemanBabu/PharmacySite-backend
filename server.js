const app = require("./app.js");

app.listen(process.env.PORT, process.env.SERVER, ()=>{
  console.log(`listening on ${process.env.SERVER}:${process.env.PORT}`);
});
