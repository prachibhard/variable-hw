$(document).ready(function () {
	$("#compute").on("click", function (e) {
		e.preventDefault();

		var a = parseFloat($("#a").val());
		var b = parseFloat($("#b").val());

		var sum = add(a, b);
		var product = multiply(a, b);
		var quotient = divide(a, b);
		var difference = subtract(a, b);

		$("#sum").text(sum);
		$("#product").text(product);
		$("#quotient").text(quotient);
		$("#difference").text(difference);
		$(".a").text(a);
		$(".b").text(b);

		$(".answers").addClass("active");

	});
});

//defining the functions outside of document.ready

function add(a, b) {
	return a + b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function subtract(a, b) {
	return a - b;
}
