'use strict';
/*
TODO
  still a lot of work to do
    even might need to rewrite it :/
  clean up code
  
*/
var bracketsDone = true; // GLOBAL VARIABLE
var calcNumbers = new Array(); // GLOBAL VARIABLE!
var calcResult; // GLOBAL VARIABLE
function calcDoMath(id) {

 if (Number(id) || id === "0" || id === "." || id === "(" || id === ")") {
      if (id === "0" || Number(id) && calcNumbers.length === 0) {
        calcNumbers.push(id)
      } else if (id === ".") {
        if (calcNumbers.length !== 0 && Number(calcNumbers[calcNumbers.length - 1]) && calcNumbers[calcNumbers.length - 1].indexOf(id) === -1 || calcNumbers[calcNumbers.length - 1].indexOf(0) !== -1) {
          calcNumbers[calcNumbers.length - 1] = calcNumbers[calcNumbers.length - 1] + id;
        }
      } else if (id === "(" || id === ")") {
        if (id === "(") {
          if (calcNumbers[calcNumbers.length-1] === undefined || calcNumbers[calcNumbers.length - 1].indexOf(id) === -1 && bracketsDone === true) {
            calcNumbers.push(id);
            bracketsDone = false;
          }
        } else if (id === ")") {
          if (bracketsDone === false) {
            calcNumbers.push(id);
            bracketsDone = true;
          }
        }
      } else if (Number(id) && Number(calcNumbers[calcNumbers.length-1])) {
        calcNumbers[calcNumbers.length-1] = calcNumbers[calcNumbers.length-1]+id;
      } else {
        calcNumbers.push(id);
      }
    } else if (String(id)) {
      if (id === "C") {
        calcNumbers = new Array();
        calcResult = undefined;
        document.getElementById('calcMath').classList.add("focusCalcOrResult");
        document.getElementById('calcResult').classList.remove("focusCalcOrResult");
      } else if (id === "del") {
        if (calcNumbers.length !== 0) {
          if (calcNumbers[calcNumbers.length-1].length === 0) {
            calcNumbers = calcNumbers.splice(0, calcNumbers.length-1)
          }
          if (calcNumbers[calcNumbers.length-1] !== undefined) {
            calcNumbers[calcNumbers.length-1] = calcNumbers[calcNumbers.length-1].slice(0, -1);
          }
        }
      } else if (id === "=") {
        if (calcResult && document.getElementById('calcMath').classList.value === "focusCalcOrResult") {
          document.getElementById('calcMath').classList.remove("focusCalcOrResult");
          document.getElementById('calcResult').classList.add("focusCalcOrResult");
        }
      } else if (id === "+" || id === "-" || id === "*" || id === "/") {
        if (calcNumbers[calcNumbers.length-1] !== id && document.getElementById('calcMath').classList.value === "focusCalcOrResult") {
          calcNumbers.push(id);
      } else if (document.getElementById('calcResult').classList.value === "focusCalcOrResult") {
        calcNumbers = new Array();
        document.getElementById('calcMath').classList.add("focusCalcOrResult");
        document.getElementById('calcResult').classList.remove("focusCalcOrResult");
        calcNumbers.push(String(calcResult));
        calcNumbers.push(id);
      }
    }
  }
  var from = ["*", "/"];
  var to = ["×", "÷"];
  var calculation = calcNumbers.join('');
  for (let i in from) {
    calculation = calculation.replaceAll(from[i], to[i]);
  }
  document.getElementById('calcMath').innerHTML = calculation;
  
  // 'try', 'catch' & 'finally' can be removed once buttons are done
  try {
    
    if (calcNumbers.length >= 3) {
      calcResult = eval(calcNumbers.join(''));
    }
    
  } catch (e) {
    calcResult = undefined;
  }
    finally {
      
      if (Number(calcResult) && calcResult !== undefined || calcResult === 0) {
        document.getElementById('calcResult').innerHTML = calcResult;
      } else {
        // howto only with 'if'? :/
        document.getElementById('calcResult').innerHTML = "";
      }
    }
}
