'use strict';

function toggleLightDark() {
  const stylesheet = document.getElementById("cssLightDark");
  const buttonLightOrDark = document.getElementById("toggleLightOrDark");
  if (buttonLightOrDark.value === "light") {
    stylesheet.setAttribute('href', "css/light.css");
    buttonLightOrDark.value = "dark";
  }
  else {
    stylesheet.setAttribute('href', "css/dark.css");
    buttonLightOrDark.value = "light";
  }
}

/*
fetch("calculator.html")
  .then(response => {
    return response.text()
  })
  .then(calculator => {
    document.getElementById('content').innerHTML = calculator;
//    document.getElementById('scriptID').setAttribute('src', "js/calculator.js");
    var s = document.createElement('script');
    s.setAttribute('src', "js/calculator.js");
    s.setAttribute('id', "scriptID");
    document.body.appendChild(s);
  });
  
  /*
  var s = document.createElement('script');
  s.setAttribute('src', "js/calculator.js");
  s.setAttribute('id', "scriptID");
  document.body.appendChild(s);
  
  (function() {
    // body
  })();
  */