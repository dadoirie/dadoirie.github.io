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

fetch("calculator.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.getElementById('content').innerHTML = data;
//    document.getElementById('scriptID').setAttribute('src', "js/calculator.js");
    var s = document.createElement('script');
    s.setAttribute('src', "js/calculator.js");
    s.setAttribute('id', "scriptID");
    document.body.appendChild(s);
  });
  
  function removejscssfile(filename, filetype) {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
    var allsuspects = document.getElementsByTagName(targetelement)
    for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
      if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
  }
  /*
  var s = document.createElement('script');
  s.setAttribute('src', "js/calculator.js");
  s.setAttribute('id', "scriptID");
  document.body.appendChild(s);
  */
  (function() {
    removejscssfile("js/calculator.js", "js")
  })();