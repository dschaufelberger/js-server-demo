let express = require("express");
let serveStatic = require("serve-static");

const app = express()

app.use("/", serveStatic("static"))
app.use(express.urlencoded({extended: true}));
app.post("/calculate", function(req, res, next) {
    let first = req.body.firstOperand;
    let second = req.body.secondOperand;

    res.send('Oh nice! Thanks for ' + first + ' and ' + second + '\n'
            + '<a href="/">Back to the root!</a>');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))