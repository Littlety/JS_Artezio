function buttonAdd(){
	var sum = 0;	
	var x1 = Math.min(parseInt(document.getElementById('x1').value),parseInt(document.getElementById('x2').value));
	var x2 = Math.max(parseInt(document.getElementById('x1').value),parseInt(document.getElementById('x2').value));
	var x1First = x1;
			
	for (x1; x1<=x2; x1++){
		sum = sum + x1;
		console.log("Сумма всех чисел от " +x1First+ " до " + x1 + ": " + sum);
	}
	alert("Сумма всех чисел от " + x1First + " до " + (x1-1) + ": " + sum + "\n\nПодробнее в консоли");
		
} 

function buttonMult(){
	var mult = 1;
	var x1 = Math.min(parseInt(document.getElementById('x1').value),parseInt(document.getElementById('x2').value));
	var x2 = Math.max(parseInt(document.getElementById('x1').value),parseInt(document.getElementById('x2').value));
	var x1First = x1;
			
	for (x1; x1<=x2; x1++){
		mult = mult * x1;
		console.log("Произведение всех чисел от " +x1First+ " до " + x1 + ": " + mult);
	}
	alert("Произведение всех чисел от " + x1First + " до " + (x1-1) + ": " + mult + "\n\nПодробнее в консоли");
		
}

function buttonClick(){

	if (document.getElementById('x1').value == "" || document.getElementById('x2').value == "") {
		alert("В полях x1 и х2 должны быть введены числове значения");
	} else {
		var x1 = parseInt(document.getElementById('x1').value);
	    var x2 = parseInt(document.getElementById('x2').value);
		
	    if (Number.isNaN(x1)||Number.isNaN(x2)){
		    alert ("Введите числовые значения");	
	    } 

	    else {
		  	var resultDiv = document.getElementById('result');
		    resultDiv.innerHTML = "";	
			resultDiv.append(" x1 + x2 = " + (x1 + x2) );	
		} 

	}
}

function buttonClean(){
	document.getElementById("x1").value = "";
	document.getElementById("x2").value = "";
}

function buttonSimple(){	
	var x1 = Math.min(parseInt(document.getElementById('x1').value),parseInt(document.getElementById('x2').value));
	var x2 = Math.max(parseInt(document.getElementById('x1').value),parseInt(document.getElementById('x2').value));
	
	var resultSimpleDiv = document.getElementById('resultSimple');
	resultSimpleDiv.innerHTML = "Простые числа: ";		


  	for (x1; x1 <= x2; x1++) {
  		if(x1==2 || x1==3 || x1==5 || x1 ==7 ){
  			resultSimpleDiv.append(x1 + " ");
  		}
  		else if (x1>7 && x1%2 != 0 && x1%3 != 0 && x1%5 != 0 && x1%7 != 0){
        	resultSimpleDiv.append(x1 + " ");
  		} 
  	}
}

		
	
	


 

	
