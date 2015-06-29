$( document ).ready(function() {


	function fizzBuzz(num){
	for ( var i = 1; i <= num; i++){
			console.log(i);
			if (i % 3 == 0 && i % 5 == 0){
				 $('.results').append("FizzBuzz");
			}
			else if (i % 3 == 0) {
				$('.results').append("Fizz");
			}
			else if (i % 5 == 0) {
				$('.results').append("Buzz");
			}
			else {
			$('.results').append(i);
		}
		$('.results').append("<br>");
		}
} 

//On click 
  $('#item-submit').on('click', function(e){
  	e.preventDefault();
    var getVal =+ $('#item-input').val();
    
    //Checking if the typed value is a number
    if (getVal % 1 != 0 || getVal > 100 || isNaN(getVal)){
    	 alert('Type only numbers between 1 and 100.');
      $('#item-input').val("");
     
    }else{
      $('.results').empty();
    	fizzBuzz(getVal);
    	$('#item-input').val("");
    }
  });

});


