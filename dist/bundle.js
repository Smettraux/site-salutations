/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var css_icomoon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css/icomoon.css */ \"./src/css/icomoon.css\");\n/* harmony import */ var css_constants_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css/constants.css */ \"./src/css/constants.css\");\n\n\n\nconsole.log('Hello World!'); //calls *******************************************************************\n\ndocument.getElementById('copy').addEventListener('click', copyToClipboard);\ndocument.getElementById('shuffle__button').addEventListener('click', shuffle);\ndocument.getElementById('shuffle__button').addEventListener('mouseenter', animateOnHoverIn);\ndocument.getElementById('shuffle__button').addEventListener('mouseleave', animateOnHoverOut); //functions ***************************************************************\n\nfunction animateOnHoverIn() {\n  document.getElementById('shuffle__button').style.fontSize = \"5rem\";\n}\n\nfunction animateOnHoverOut() {\n  document.getElementById('shuffle__button').style.fontSize = \"4rem\";\n}\n\nfunction shuffle() {\n  console.log('shuffle'); //select random from the list of greetings\n\n  var greeting = greetings[Math.floor(Math.random() * greetings.length)]; //display the greeting\n\n  document.getElementById('greeting').innerHTML = greeting; //animate the shuffle button\n\n  document.getElementById('shuffle__button').style.transform = \"rotate(30deg)\"; //reset the copy button\n\n  document.getElementById('copy').checked = false;\n}\n\nfunction copyToClipboard() {\n  var range = document.createRange();\n  range.selectNode(document.getElementById(\"greeting\"));\n  window.getSelection().removeAllRanges(); // clear current selection\n\n  window.getSelection().addRange(range); // to select text\n\n  document.execCommand(\"copy\");\n  window.getSelection().removeAllRanges(); // to deselect\n\n  document.getElementById('copy').checked = true; // keep the checkbox checked\n} //vars ********************************************************************\n\n\nvar greetings = [\"Mes plus sincères salutations\", \"Tchô, bonne!\", \"Je vous prie de bien vouloir iller, Madame, Monsieur, mes tes éminemment stantes.\", \"Meilleures salutations\", \"Je vous prie de bien vouloir recevoir mes plus respectueuses salutations.\", \"Cordialement\", \"Je vous prie d’agréer, Madame/Monsieur, mes salutations les plus dévouées.\", \"Veuillez croire, Madame/Monsieur, en l’expression de mes sentiments les plus sincères.\", \"Bien à toi / vous\", \"Je vous prie d’agréer mes meilleures salutations\", \"Veuillez recevoir mes salutations distinguées\", \"Au plaisir et amicalement\", \"Je vous prie de croire, Madame, Monsieur, à ma considération distinguée.\", \"Veuillez recevoir, Madame, Monsieur, l'assurance de mes sincères salutations\", \"Je vous prie d'agréer mes plus respectueuses salutations\", \"Veuillez recevoir l'assurance de ma considération distinguée\", \"Avec mes respectueux hommages, je vous prie d’agréer, Monsieur, Madame, l’expression de ma considération la plus distinguée.\", \"Je vous prie d’agréer, Monsieur, l’assurance de mon profond respect.\", \"Nous vous prions de croire, Monsieur, à l'expression de nos sentiments les plus dévoués.\", \"Veuillez croire, cher Monsieur, à mes sentiments cordiaux et respectueux.\", \"Veuillez agréer, Madame, Monsieur, l’expression de mes sentiments respectueux.\", \"Cordialement vôtre\", \"Je vous prie de croire, cher prince/chère princesse, en l'assurance de ma plus haute considération.\", \"En vous souhaitant cordialement une excellente journée\", \"Je vous prie de bien vouloir agréer, Madame la marquise/ Monsieur le marquis, l'expression de mes honnêtes et respectueuses salutations.\", \"Je vous prie de bien vouloir croire, cher Comte/ chère comtesse, en l'assurance de ma considération.\", \"Je vous prie de bien vouloir agréer, Madame la Baronne/ monsieur le Baron, l'expression de mes honnêtes et respectueuses salutations.\", \"Veuillez croire à mon meilleur souvenir.\", \"Veuillez trouver ici l’assurance de mon amitié.\", \"Amitiés.\", \"Veuillez trouver ici l'assurance de mon amitié.\", \"Salutations distinguées\", \"Semper Fidelis\", \"Je vous prie de plésèfer, Madame, Monsieur, mes vrissèmes très croumibes.\", \"Salutations cordiales.\", \"Veuillez agréer, Madame, Monsieur, mes meilleures salutations.\", \"Sportivement\", \"Vaccinalement\", \"Vers l'infini, et au-delà!\", \"À la revoyure !\", \"À bientôt, si c'est pas avant.\"]; //array of greetings//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkJjLEVBd0JkLHdEQXhCYyxFQXlCZCwwSUF6QmMsRUEwQmQsc0dBMUJjLEVBMkJkLHVJQTNCYyxFQTRCZCwwQ0E1QmMsRUE2QmQsaURBN0JjLEVBOEJkLFVBOUJjLEVBK0JkLGlEQS9CYyxFQWdDZCx5QkFoQ2MsRUFpQ2QsZ0JBakNjLEVBa0NkLDJFQWxDYyxFQW1DZCx3QkFuQ2MsRUFvQ2QsZ0VBcENjLEVBcUNkLGNBckNjLEVBc0NkLGVBdENjLEVBdUNkLDRCQXZDYyxFQXdDZCxpQkF4Q2MsRUF5Q2QsZ0NBekNjLENBQWhCLEVBeUNxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbHV0YXRpb25zLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdjc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJ2Nzcy9pY29tb29uLmNzcyc7XHJcbmltcG9ydCAnY3NzL2NvbnN0YW50cy5jc3MnO1xyXG5cclxuY29uc29sZS5sb2coJ0hlbGxvIFdvcmxkIScpO1xyXG5cclxuLy9jYWxscyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29weVRvQ2xpcGJvYXJkKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NodWZmbGVfX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2h1ZmZsZSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaHVmZmxlX19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgYW5pbWF0ZU9uSG92ZXJJbik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaHVmZmxlX19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgYW5pbWF0ZU9uSG92ZXJPdXQpO1xyXG5cclxuLy9mdW5jdGlvbnMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5mdW5jdGlvbiBhbmltYXRlT25Ib3ZlckluKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaHVmZmxlX19idXR0b24nKS5zdHlsZS5mb250U2l6ZSA9IFwiNXJlbVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlT25Ib3Zlck91dCgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2h1ZmZsZV9fYnV0dG9uJykuc3R5bGUuZm9udFNpemUgPSBcIjRyZW1cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2h1ZmZsZSgpIHtcclxuICBjb25zb2xlLmxvZygnc2h1ZmZsZScpO1xyXG4gIC8vc2VsZWN0IHJhbmRvbSBmcm9tIHRoZSBsaXN0IG9mIGdyZWV0aW5nc1xyXG4gIGxldCBncmVldGluZyA9IGdyZWV0aW5nc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBncmVldGluZ3MubGVuZ3RoKV07XHJcblxyXG4gIC8vZGlzcGxheSB0aGUgZ3JlZXRpbmdcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZXRpbmcnKS5pbm5lckhUTUwgPSBncmVldGluZztcclxuXHJcbiAgLy9hbmltYXRlIHRoZSBzaHVmZmxlIGJ1dHRvblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaHVmZmxlX19idXR0b24nKS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgzMGRlZylcIjtcclxuXHJcbiAgLy9yZXNldCB0aGUgY29weSBidXR0b25cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weScpLmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKCkge1xyXG4gIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgcmFuZ2Uuc2VsZWN0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyZWV0aW5nXCIpKTtcclxuICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7IC8vIGNsZWFyIGN1cnJlbnQgc2VsZWN0aW9uXHJcbiAgd2luZG93LmdldFNlbGVjdGlvbigpLmFkZFJhbmdlKHJhbmdlKTsgLy8gdG8gc2VsZWN0IHRleHRcclxuICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbiAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpOy8vIHRvIGRlc2VsZWN0XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHknKS5jaGVja2VkID0gdHJ1ZTsvLyBrZWVwIHRoZSBjaGVja2JveCBjaGVja2VkXHJcbn1cclxuXHJcbi8vdmFycyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxubGV0IGdyZWV0aW5ncyA9IFtcclxuICBcIk1lcyBwbHVzIHNpbmPDqHJlcyBzYWx1dGF0aW9uc1wiLFxyXG4gIFwiVGNow7QsIGJvbm5lIVwiLFxyXG4gIFwiSmUgdm91cyBwcmllIGRlIGJpZW4gdm91bG9pciBpbGxlciwgTWFkYW1lLCBNb25zaWV1ciwgbWVzIHRlcyDDqW1pbmVtbWVudCBzdGFudGVzLlwiLFxyXG4gIFwiTWVpbGxldXJlcyBzYWx1dGF0aW9uc1wiLFxyXG4gIFwiSmUgdm91cyBwcmllIGRlIGJpZW4gdm91bG9pciByZWNldm9pciBtZXMgcGx1cyByZXNwZWN0dWV1c2VzIHNhbHV0YXRpb25zLlwiLFxyXG4gIFwiQ29yZGlhbGVtZW50XCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZOKAmWFncsOpZXIsIE1hZGFtZS9Nb25zaWV1ciwgbWVzIHNhbHV0YXRpb25zIGxlcyBwbHVzIGTDqXZvdcOpZXMuXCIsXHJcbiAgXCJWZXVpbGxleiBjcm9pcmUsIE1hZGFtZS9Nb25zaWV1ciwgZW4gbOKAmWV4cHJlc3Npb24gZGUgbWVzIHNlbnRpbWVudHMgbGVzIHBsdXMgc2luY8OocmVzLlwiLFxyXG4gIFwiQmllbiDDoCB0b2kgLyB2b3VzXCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZOKAmWFncsOpZXIgbWVzIG1laWxsZXVyZXMgc2FsdXRhdGlvbnNcIixcclxuICBcIlZldWlsbGV6IHJlY2V2b2lyIG1lcyBzYWx1dGF0aW9ucyBkaXN0aW5ndcOpZXNcIixcclxuICBcIkF1IHBsYWlzaXIgZXQgYW1pY2FsZW1lbnRcIixcclxuICBcIkplIHZvdXMgcHJpZSBkZSBjcm9pcmUsIE1hZGFtZSwgTW9uc2lldXIsIMOgIG1hIGNvbnNpZMOpcmF0aW9uIGRpc3Rpbmd1w6llLlwiLFxyXG4gIFwiVmV1aWxsZXogcmVjZXZvaXIsIE1hZGFtZSwgTW9uc2lldXIsIGwnYXNzdXJhbmNlIGRlIG1lcyBzaW5jw6hyZXMgc2FsdXRhdGlvbnNcIixcclxuICBcIkplIHZvdXMgcHJpZSBkJ2FncsOpZXIgbWVzIHBsdXMgcmVzcGVjdHVldXNlcyBzYWx1dGF0aW9uc1wiLFxyXG4gIFwiVmV1aWxsZXogcmVjZXZvaXIgbCdhc3N1cmFuY2UgZGUgbWEgY29uc2lkw6lyYXRpb24gZGlzdGluZ3XDqWVcIixcclxuICBcIkF2ZWMgbWVzIHJlc3BlY3R1ZXV4IGhvbW1hZ2VzLCBqZSB2b3VzIHByaWUgZOKAmWFncsOpZXIsIE1vbnNpZXVyLCBNYWRhbWUsIGzigJlleHByZXNzaW9uIGRlIG1hIGNvbnNpZMOpcmF0aW9uIGxhIHBsdXMgZGlzdGluZ3XDqWUuXCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZOKAmWFncsOpZXIsIE1vbnNpZXVyLCBs4oCZYXNzdXJhbmNlIGRlIG1vbiBwcm9mb25kIHJlc3BlY3QuXCIsXHJcbiAgXCJOb3VzIHZvdXMgcHJpb25zIGRlIGNyb2lyZSwgTW9uc2lldXIsIMOgIGwnZXhwcmVzc2lvbiBkZSBub3Mgc2VudGltZW50cyBsZXMgcGx1cyBkw6l2b3XDqXMuXCIsXHJcbiAgXCJWZXVpbGxleiBjcm9pcmUsIGNoZXIgTW9uc2lldXIsIMOgIG1lcyBzZW50aW1lbnRzIGNvcmRpYXV4IGV0IHJlc3BlY3R1ZXV4LlwiLFxyXG4gIFwiVmV1aWxsZXogYWdyw6llciwgTWFkYW1lLCBNb25zaWV1ciwgbOKAmWV4cHJlc3Npb24gZGUgbWVzIHNlbnRpbWVudHMgcmVzcGVjdHVldXguXCIsXHJcbiAgXCJDb3JkaWFsZW1lbnQgdsO0dHJlXCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZGUgY3JvaXJlLCBjaGVyIHByaW5jZS9jaMOocmUgcHJpbmNlc3NlLCBlbiBsJ2Fzc3VyYW5jZSBkZSBtYSBwbHVzIGhhdXRlIGNvbnNpZMOpcmF0aW9uLlwiLFxyXG4gIFwiRW4gdm91cyBzb3VoYWl0YW50IGNvcmRpYWxlbWVudCB1bmUgZXhjZWxsZW50ZSBqb3VybsOpZVwiLFxyXG4gIFwiSmUgdm91cyBwcmllIGRlIGJpZW4gdm91bG9pciBhZ3LDqWVyLCBNYWRhbWUgbGEgbWFycXVpc2UvIE1vbnNpZXVyIGxlIG1hcnF1aXMsIGwnZXhwcmVzc2lvbiBkZSBtZXMgaG9ubsOqdGVzIGV0IHJlc3BlY3R1ZXVzZXMgc2FsdXRhdGlvbnMuXCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZGUgYmllbiB2b3Vsb2lyIGNyb2lyZSwgY2hlciBDb210ZS8gY2jDqHJlIGNvbXRlc3NlLCBlbiBsJ2Fzc3VyYW5jZSBkZSBtYSBjb25zaWTDqXJhdGlvbi5cIixcclxuICBcIkplIHZvdXMgcHJpZSBkZSBiaWVuIHZvdWxvaXIgYWdyw6llciwgTWFkYW1lIGxhIEJhcm9ubmUvIG1vbnNpZXVyIGxlIEJhcm9uLCBsJ2V4cHJlc3Npb24gZGUgbWVzIGhvbm7DqnRlcyBldCByZXNwZWN0dWV1c2VzIHNhbHV0YXRpb25zLlwiLFxyXG4gIFwiVmV1aWxsZXogY3JvaXJlIMOgIG1vbiBtZWlsbGV1ciBzb3V2ZW5pci5cIixcclxuICBcIlZldWlsbGV6IHRyb3V2ZXIgaWNpIGzigJlhc3N1cmFuY2UgZGUgbW9uIGFtaXRpw6kuXCIsXHJcbiAgXCJBbWl0acOpcy5cIixcclxuICBcIlZldWlsbGV6IHRyb3V2ZXIgaWNpIGwnYXNzdXJhbmNlIGRlIG1vbiBhbWl0acOpLlwiLFxyXG4gIFwiU2FsdXRhdGlvbnMgZGlzdGluZ3XDqWVzXCIsXHJcbiAgXCJTZW1wZXIgRmlkZWxpc1wiLFxyXG4gIFwiSmUgdm91cyBwcmllIGRlIHBsw6lzw6hmZXIsIE1hZGFtZSwgTW9uc2lldXIsIG1lcyB2cmlzc8OobWVzIHRyw6hzIGNyb3VtaWJlcy5cIixcclxuICBcIlNhbHV0YXRpb25zIGNvcmRpYWxlcy5cIixcclxuICBcIlZldWlsbGV6IGFncsOpZXIsIE1hZGFtZSwgTW9uc2lldXIsIG1lcyBtZWlsbGV1cmVzIHNhbHV0YXRpb25zLlwiLFxyXG4gIFwiU3BvcnRpdmVtZW50XCIsXHJcbiAgXCJWYWNjaW5hbGVtZW50XCIsXHJcbiAgXCJWZXJzIGwnaW5maW5pLCBldCBhdS1kZWzDoCFcIixcclxuICBcIsOAIGxhIHJldm95dXJlICFcIixcclxuICBcIsOAIGJpZW50w7R0LCBzaSBjJ2VzdCBwYXMgYXZhbnQuXCJdOyAvL2FycmF5IG9mIGdyZWV0aW5nc1xyXG5cclxuIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvcHlUb0NsaXBib2FyZCIsInNodWZmbGUiLCJhbmltYXRlT25Ib3ZlckluIiwiYW5pbWF0ZU9uSG92ZXJPdXQiLCJzdHlsZSIsImZvbnRTaXplIiwiZ3JlZXRpbmciLCJncmVldGluZ3MiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJ0cmFuc2Zvcm0iLCJjaGVja2VkIiwicmFuZ2UiLCJjcmVhdGVSYW5nZSIsInNlbGVjdE5vZGUiLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImV4ZWNDb21tYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/css/constants.css":
/*!*******************************!*\
  !*** ./src/css/constants.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL2NvbnN0YW50cy5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FsdXRhdGlvbnMvLi9zcmMvY3NzL2NvbnN0YW50cy5jc3M/NzdjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/constants.css\n");

/***/ }),

/***/ "./src/css/icomoon.css":
/*!*****************************!*\
  !*** ./src/css/icomoon.css ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL2ljb21vb24uY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbHV0YXRpb25zLy4vc3JjL2Nzcy9pY29tb29uLmNzcz9iMzU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/icomoon.css\n");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL21haW4uY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbHV0YXRpb25zLy4vc3JjL2Nzcy9tYWluLmNzcz80ZmFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/css/main.css\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;