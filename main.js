//first declare counters for total calories and total cost globally and then set to zero.
var numeralA = 0,
	numeralB = 0;


$(document).ready(function () { //on DOM ready, bind clicks
	$("#compute").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior


		$(".numeral").each(function () { //look at each element with the class 'fruit', one by one.
			//Our variables are all preceeded by a single 'var' statement,
			//which looks neater but still confines them to the scope of this function.

			var numeral = $(this), //just like when clicking on classes, we need to know which one of the fruits our code is looking at now.
				numeralA = parseFloat(numeral.val()), //store the number of pieces of this fruit the user requested
				numeralB = parseFloat(numeral.val());

			//fire the total add function to calculate sum
			sum(numeralA, numeralB);

			//fire the multiply function to calculate product
			product(numeralA, numeralB);

			//fire the divide function to calculate quotient
			quotient(numeralA, numeralB);

			//fire the subtract function to calculate difference
			difference(numeralA, numeralB);
		}); //end each

		//once we've gotten through all of the fruits, output the results
		show_results();
	});
});

//defining the functions outside of document.ready

function sum(numeralA, numeralB) {
	var sum = (numeralA + numeralB);
}

function product(numeralA, numeralB) {
	var product = (numeralA * numeralB);
}

function quotient(numeralA, numeralB) {
	var quotient = (numeralA / numeralB);
}

function difference(numeralA, numeralB) {
	var difference = (numeralA - numeralB);
}

function show_results() {
	//totalCost and totalCalories are GLOBAL variables. This function can see them no problem!
	$("#sum").val(sum);
	$("#product").val(product);
	$("#quotient").val(quotient);
	$("#difference").val(difference);
}
