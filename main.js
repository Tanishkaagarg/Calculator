var firstnumber;  
var secondnumber;  
var result;  
var operations;  

function operationplus() {  
  operation = "+";  
  firstnumber = parseInt(document.calcy.answers.value);  
  document.calcy.answers.value = firstnumber + operation;  
  alert(firstnumber);    

}  

function operationmultiply() {  

  operation = "*";  
  firstnumber = parseInt(document.calcy.answers.value);  
  document.calcy.answers.value = "0";  
  document.calcy.answers.value = firstnumber + operation;  

}  

function operationminus() {  

  operation = "-";  
  firstnumber = parseInt(document.calcy.answers.value);  
  document.calcy.answers.value = "0";  
  document.calcy.answers.value = firstnumber + operation;  

}  

function operationdivision() {  

  operation = "/";  
  firstnumber = parseInt(document.calcy.answers.value);  
  document.calcy.answers.value = "0";  
  document.calcy.answers.value = firstnumber + operation;  

}  

function operationpercentage() {  

  operation = "%";  
  firstnumber = parseInt(document.calcy.answers.value);  
  document.calcy.answers.value = "0";  
  document.calcy.answers.value = firstnumber + operation;  

}  

function equalsto() {  
  secondnumber = parseInt(document.calcy.answers.value);  

  if (operation == "+") {  
      result = (firstnumber * 10 + secondnumber * 10) / 10;  
  } else if (operation == "*") {  

      result = firstnumber * secondnumber;  

  } else if (operation == "-") {  

      result = firstnumber - secondnumber;  

  } else if (operation == "/") {  

      result = firstnumber / secondnumber;  

  } else if (operation == "%") {  

      if (document.calcy.answers.value == "0") {  

          result = firstnumber / 100;  
          document.calcy.answers.value = firstnumber + operation + "100";  
      } else if (document.calcy.answers.value != "0") {  
          result = firstnumber / secondnumber * 100;  
          document.calcy.answers.value = firstnumber + operation + secondnumber + "*100 = " + result;  
      }  
  } else if (operation == "^") {  

      for (var i = 0; i < secondnumber; i++) {  

          result = firstnumber * i;  
      }  


  }  
  document.calcy.answers.value = "";  
  document.calcy.answers.value = result.toString();  
  document.calcy.answers.value = firstnumber + operation + secondnumber + " = " + result.toString();  
  return;  

}  