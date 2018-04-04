var express = require("express");
var serveStatic = require("serve-static");

const app = express()

app.use("/", serveStatic("static"))
app.post("/calculate", function(req, res, next) {
    let first = req.params.firstOperand;
    let second = req.params.secondOperand;

    let sum = first + second;
    res.end();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))