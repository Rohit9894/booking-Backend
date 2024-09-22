const express = require("express");
const cors = require("cors");
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get('/',(req,res)=>{
res.send("Hello Word")
})

app.listen(3000, () => {
  console.log("Server is running");
});
