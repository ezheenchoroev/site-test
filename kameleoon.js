// Duration in milliseconds to wait while the Kameleoon application file is loaded
var kameleoonLoadingTimeout = 1000;

window.kameleoonQueue = window.kameleoonQueue || [];
window.kameleoonStartLoadTime = new Date().getTime();

if (!document.getElementById("kameleoonLoadingStyleSheet") && !window.kameleoonDisplayPageTimeOut) {
  var kameleoonS = document.getElementsByTagName("script")[0];
  var kameleoonCc = "* { visibility: hidden !important; background-image: none !important; }";
  var kameleoonStn = document.createElement("style");
  kameleoonStn.type = "text/css";
  kameleoonStn.id = "kameleoonLoadingStyleSheet";

  if (kameleoonStn.styleSheet) {
    kameleoonStn.styleSheet.cssText = kameleoonCc;
  } else {
    kameleoonStn.appendChild(document.createTextNode(kameleoonCc));
  }

  kameleoonS.parentNode.insertBefore(kameleoonStn, kameleoonS);

  window.kameleoonDisplayPage = function (fromEngine) {
    if (!fromEngine) {
      window.kameleoonTimeout = true;
    }
    if (kameleoonStn.parentNode) {
      kameleoonStn.parentNode.removeChild(kameleoonStn);
    }
  };

  window.kameleoonDisplayPageTimeOut = window.setTimeout(window.kameleoonDisplayPage, kameleoonLoadingTimeout);
}

var kameleoonScript = document.createElement("script");
kameleoonScript.type = "text/javascript";
kameleoonScript.src = "//me6k9bdm1w.experimentation.workforce.dev.principal.com/kameleoon.js"; // dev
// kameleoonScript.src = "//dddja6qs8f.kameleoon.brightspot.com/kameleoon.js";
kameleoonScript.async = true;
kameleoonScript.setAttribute("fetchpriority", "high");

document.head.appendChild(kameleoonScript);
