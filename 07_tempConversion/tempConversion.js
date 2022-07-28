const ftoc = function(fahr) {
	cels = ((fahr - 32)*5) / 9;
	cels = Math.round(cels * 10) / 10;
	return cels;
};

const ctof = function(cel) {
	fahr = ((cel * 9)+(5*32)) / 5;
	fahr = Math.round(fahr * 10) / 10;
	return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
