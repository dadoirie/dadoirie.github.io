'use strict';

function toggleLightDark() {
  const stylesheet = document.getElementById("cssLightDark");
  const buttonLightOrDark = document.getElementById("toggleLightOrDark");
    if (buttonLightOrDark.value === "light") {
      stylesheet.setAttribute('href',"css/light.css");
      buttonLightOrDark.value = "dark";
    }
    else {
      stylesheet.setAttribute('href',"css/dark.css");
      buttonLightOrDark.value = "light";
    }
}

var bracketsDone = true; // GLOBAL VARIABLE
var numbers = new Array(); // GLOBAL VARIABLE!
var getResult; // GLOBAL VARIABLE
function doMath(id) {

 if (Number(id) || id === "0" || id === "." || id === "(" || id === ")") {
      if (id === "0" || Number(id) && numbers.length === 0) {
        numbers.push(id)
      } else if (id === ".") {
        if (numbers.length !== 0 && Number(numbers[numbers.length - 1]) && numbers[numbers.length - 1].indexOf(id) === -1 || numbers[numbers.length - 1].indexOf(0) !== -1) {
          numbers[numbers.length - 1] = numbers[numbers.length - 1] + id;
        }
      } else if (id === "(" || id === ")") {
        if (id === "(") {
          if (numbers[numbers.length-1] === undefined || numbers[numbers.length - 1].indexOf(id) === -1 && bracketsDone === true) {
            numbers.push(id);
            bracketsDone = false;
          }
        } else if (id === ")") {
          if (bracketsDone === false) {
            numbers.push(id);
            bracketsDone = true;
          }
        }
      } else if (Number(id) && Number(numbers[numbers.length-1])) {
        numbers[numbers.length-1] = numbers[numbers.length-1]+id;
      } else {
        numbers.push(id);
      }
    } else if (String(id)) {
      if (id === "C") {
        numbers = new Array();
        getResult = undefined;
        document.getElementById('doMath').classList.add("focusCalcOrResult");
        document.getElementById('getResult').classList.remove("focusCalcOrResult");
      } else if (id === "del") {
        if (numbers.length !== 0) {
          if (numbers[numbers.length-1].length === 0) {
            numbers = numbers.splice(0, numbers.length-1)
          }
          if (numbers[numbers.length-1] !== undefined) {
            numbers[numbers.length-1] = numbers[numbers.length-1].slice(0, -1);
          }
        }
      } else if (id === "=") {
        if (getResult && document.getElementById('doMath').classList.value === "focusCalcOrResult") {
          document.getElementById('doMath').classList.remove("focusCalcOrResult");
          document.getElementById('getResult').classList.add("focusCalcOrResult");
          console.info(document.getElementById('getResult').classList.value)
        }
      } else if (id === "+" || id === "-" || id === "*" || id === "/") {
        if (numbers[numbers.length-1] !== id && document.getElementById('doMath').classList.value === "focusCalcOrResult") {
          numbers.push(id);
      } else if (document.getElementById('getResult').classList.value === "focusCalcOrResult") {
        numbers = new Array();
        document.getElementById('doMath').classList.add("focusCalcOrResult");
        document.getElementById('getResult').classList.remove("focusCalcOrResult");
        numbers.push(getResult);
        numbers.push(id);
      }
    }
  }
  var from = ["*", "/"];
  var to = ["×", "÷"];
  var calculation = numbers.join('');
  for (let i in from) {
    calculation = calculation.replaceAll(from[i], to[i]);
  }
  document.getElementById('doMath').innerHTML = calculation;
  
  // 'try', 'catch' & 'finally' can be removed once buttons are done
  try {
    
    if (numbers.length >= 2) {
      getResult = eval(numbers.join(''));
    }
    
  } catch (e) {
    getResult = undefined;
  }
    finally {
      
      if (Number(getResult) && getResult !== undefined) {
        document.getElementById('getResult').innerHTML = getResult;
      } else {
        // howto only with 'if'? :/
        document.getElementById('getResult').innerHTML = "";
      }
    }  
  
  
  console.info(document.getElementById('getResult').classList.value + " class")
  console.info("numbers is "+numbers+" | numbers.length is "+numbers.length+" | getResult is "+getResult);
  
}
