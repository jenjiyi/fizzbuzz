// javascript file
	for ( var number = 1; number <= 100; number++){
			console.log(number);
			if (number % 3 == 0 && number % 5 == 0){
				document.write("FizzBuzz");
			}
			else if (number % 3 == 0) {
				document.write("Fizz");
			}
			else if (number % 5 == 0) {
				document.write("Buzz");
			}
			else {
			document.write(number);
		};
		document.write("<br>");
		};
