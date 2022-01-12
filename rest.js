var express = require("express");

const PORT = 3000;

app = express();

app.get("/:id", function(req, res) {
	var Id = req.params.id;
	Random rand = new Random();
	rand.setSeed(ID);
	int randomNumber = rand.nextInt()
	res.send('ID ${Id} and random Number${randomNumber}')
});

app.listen(PORT, function() {
	console.log('listening on Port ${PORT}')
});