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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var css_icomoon_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css/icomoon.css */ \"./src/css/icomoon.css\");\n/* harmony import */ var css_constants_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css/constants.css */ \"./src/css/constants.css\");\n\n\n\nconsole.log('Hello World!'); //calls *******************************************************************\n\ndocument.getElementById('copy').addEventListener('click', copyToClipboard);\ndocument.getElementById('shuffle__button').addEventListener('click', shuffle);\ndocument.getElementById('shuffle__button').addEventListener('mouseenter', animateOnHoverIn);\ndocument.getElementById('shuffle__button').addEventListener('mouseleave', animateOnHoverOut); //functions ***************************************************************\n\nfunction animateOnHoverIn() {\n  document.getElementById('shuffle__button').style.fontSize = \"5rem\";\n}\n\nfunction animateOnHoverOut() {\n  document.getElementById('shuffle__button').style.fontSize = \"4rem\";\n}\n\nfunction shuffle() {\n  console.log('shuffle'); //select random from the list of greetings\n\n  var greeting = greetings[Math.floor(Math.random() * greetings.length)]; //display the greeting\n\n  document.getElementById('greeting').innerHTML = greeting;\n  document.getElementById('copied').style.display = \"none\";\n  document.getElementById('copy').style.display = \"block\";\n  document.getElementById('shuffle__button').style.transform = \"rotate(180deg)\";\n}\n\nfunction copyToClipboard() {\n  var range = document.createRange();\n  range.selectNode(document.getElementById(\"greeting\"));\n  window.getSelection().removeAllRanges(); // clear current selection\n\n  window.getSelection().addRange(range); // to select text\n\n  document.execCommand(\"copy\");\n  window.getSelection().removeAllRanges(); // to deselect\n\n  document.getElementById('copy').style.display = \"none\";\n  document.getElementById('copied').style.display = \"block\";\n} //vars ********************************************************************\n\n\nvar greetings = [\"Mes plus sincères salutations\", \"Tchô, bonne!\", \"Je vous prie de bien vouloir iller, Madame, Monsieur, mes tes éminemment stantes.\", \"Meilleures salutations\", \"Je vous prie de bien vouloir recevoir mes plus respectueuses salutations.\", \"Cordialement\", \"Je vous prie d’agréer, Madame/Monsieur, mes salutations les plus dévouées.\", \"Veuillez croire, Madame/Monsieur, en l’expression de mes sentiments les plus sincères.\", \"Bien à toi / vous\", \"Je vous prie d’agréer mes meilleures salutations\", \"Veuillez recevoir mes salutations distinguées\", \"Au plaisir et amicalement\", \"Je vous prie de croire, Madame, Monsieur, à ma considération distinguée.\", \"Veuillez recevoir, Madame, Monsieur, l'assurance de mes sincères salutations\", \"Je vous prie d'agréer mes plus respectueuses salutations\", \"Veuillez recevoir l'assurance de ma considération distinguée\", \"Avec mes respectueux hommages, je vous prie d’agréer, Monsieur, Madame, l’expression de ma considération la plus distinguée.\", \"Je vous prie d’agréer, Monsieur, l’assurance de mon profond respect.\", \"Nous vous prions de croire, Monsieur, à l'expression de nos sentiments les plus dévoués.\", \"Veuillez croire, cher Monsieur, à mes sentiments cordiaux et respectueux.\", \"Veuillez agréer, Madame, Monsieur, l’expression de mes sentiments respectueux.\", \"Cordialement vôtre\", \"Je vous prie de croire, cher prince/chère princesse, en l'assurance de ma plus haute considération.\", \"En vous souhaitant cordialement une excellente journée\", \"Je vous prie de bien vouloir agréer, Madame la marquise/ Monsieur le marquis, l'expression de mes honnêtes et respectueuses salutations.\", \"Je vous prie de bien vouloir croire, cher Comte/ chère comtesse, en l'assurance de ma considération.\", \"Je vous prie de bien vouloir agréer, Madame la Baronne/ monsieur le Baron, l'expression de mes honnêtes et respectueuses salutations.\", \"Veuillez croire à mon meilleur souvenir.\", \"Veuillez trouver ici l’assurance de mon amitié.\", \"Amitiés.\", \"Veuillez trouver ici l'assurance de mon amitié.\", \"Salutations distinguées\", \"Semper Fidelis\", \"Je vous prie de plésèfer, Madame, Monsieur, mes vrissèmes très croumibes.\", \"Salutations cordiales.\", \"Veuillez agréer, Madame, Monsieur, mes meilleures salutations.\", \"Sportivement\", \"Vaccinalement\", \"Vers l'infini, et au-delà!\"]; //array of greetings//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFZZCwyQkFaYyxFQWFkLDBFQWJjLEVBY2QsOEVBZGMsRUFlZCwwREFmYyxFQWdCZCw4REFoQmMsRUFpQmQsOEhBakJjLEVBa0JkLHNFQWxCYyxFQW1CZCwwRkFuQmMsRUFvQmQsMkVBcEJjLEVBcUJkLGdGQXJCYyxFQXNCZCxvQkF0QmMsRUF1QmQscUdBdkJjLEVBd0JkLHdEQXhCYyxFQXlCZCwwSUF6QmMsRUEwQmQsc0dBMUJjLEVBMkJkLHVJQTNCYyxFQTRCZCwwQ0E1QmMsRUE2QmQsaURBN0JjLEVBOEJkLFVBOUJjLEVBK0JkLGlEQS9CYyxFQWdDZCx5QkFoQ2MsRUFpQ2QsZ0JBakNjLEVBa0NkLDJFQWxDYyxFQW1DZCx3QkFuQ2MsRUFvQ2QsZ0VBcENjLEVBcUNkLGNBckNjLEVBc0NkLGVBdENjLEVBdUNkLDRCQXZDYyxDQUFoQixFQXVDaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWx1dGF0aW9ucy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnY3NzL21haW4uY3NzJztcclxuaW1wb3J0ICdjc3MvaWNvbW9vbi5jc3MnO1xyXG5pbXBvcnQgJ2Nzcy9jb25zdGFudHMuY3NzJztcclxuXHJcbmNvbnNvbGUubG9nKCdIZWxsbyBXb3JsZCEnKTtcclxuXHJcbi8vY2FsbHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcHknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvcHlUb0NsaXBib2FyZCk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaHVmZmxlX19idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNodWZmbGUpO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2h1ZmZsZV9fYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGFuaW1hdGVPbkhvdmVySW4pO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2h1ZmZsZV9fYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGFuaW1hdGVPbkhvdmVyT3V0KTtcclxuXHJcbi8vZnVuY3Rpb25zICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZU9uSG92ZXJJbigpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2h1ZmZsZV9fYnV0dG9uJykuc3R5bGUuZm9udFNpemUgPSBcIjVyZW1cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZU9uSG92ZXJPdXQoKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NodWZmbGVfX2J1dHRvbicpLnN0eWxlLmZvbnRTaXplID0gXCI0cmVtXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNodWZmbGUoKSB7XHJcbiAgY29uc29sZS5sb2coJ3NodWZmbGUnKTtcclxuICAvL3NlbGVjdCByYW5kb20gZnJvbSB0aGUgbGlzdCBvZiBncmVldGluZ3NcclxuICBsZXQgZ3JlZXRpbmcgPSBncmVldGluZ3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ3JlZXRpbmdzLmxlbmd0aCldO1xyXG5cclxuICAvL2Rpc3BsYXkgdGhlIGdyZWV0aW5nXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWV0aW5nJykuaW5uZXJIVE1MID0gZ3JlZXRpbmc7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvcGllZCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weScpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaHVmZmxlX19idXR0b24nKS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgxODBkZWcpXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZCgpIHtcclxuICBsZXQgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIHJhbmdlLnNlbGVjdE5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmVldGluZ1wiKSk7XHJcbiAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpOyAvLyBjbGVhciBjdXJyZW50IHNlbGVjdGlvblxyXG4gIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5hZGRSYW5nZShyYW5nZSk7IC8vIHRvIHNlbGVjdCB0ZXh0XHJcbiAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKTsvLyB0byBkZXNlbGVjdFxyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29weScpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29waWVkJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufVxyXG5cclxuLy92YXJzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5sZXQgZ3JlZXRpbmdzID0gW1xyXG4gIFwiTWVzIHBsdXMgc2luY8OocmVzIHNhbHV0YXRpb25zXCIsXHJcbiAgXCJUY2jDtCwgYm9ubmUhXCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZGUgYmllbiB2b3Vsb2lyIGlsbGVyLCBNYWRhbWUsIE1vbnNpZXVyLCBtZXMgdGVzIMOpbWluZW1tZW50IHN0YW50ZXMuXCIsXHJcbiAgXCJNZWlsbGV1cmVzIHNhbHV0YXRpb25zXCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZGUgYmllbiB2b3Vsb2lyIHJlY2V2b2lyIG1lcyBwbHVzIHJlc3BlY3R1ZXVzZXMgc2FsdXRhdGlvbnMuXCIsXHJcbiAgXCJDb3JkaWFsZW1lbnRcIixcclxuICBcIkplIHZvdXMgcHJpZSBk4oCZYWdyw6llciwgTWFkYW1lL01vbnNpZXVyLCBtZXMgc2FsdXRhdGlvbnMgbGVzIHBsdXMgZMOpdm91w6llcy5cIixcclxuICBcIlZldWlsbGV6IGNyb2lyZSwgTWFkYW1lL01vbnNpZXVyLCBlbiBs4oCZZXhwcmVzc2lvbiBkZSBtZXMgc2VudGltZW50cyBsZXMgcGx1cyBzaW5jw6hyZXMuXCIsXHJcbiAgXCJCaWVuIMOgIHRvaSAvIHZvdXNcIixcclxuICBcIkplIHZvdXMgcHJpZSBk4oCZYWdyw6llciBtZXMgbWVpbGxldXJlcyBzYWx1dGF0aW9uc1wiLFxyXG4gIFwiVmV1aWxsZXogcmVjZXZvaXIgbWVzIHNhbHV0YXRpb25zIGRpc3Rpbmd1w6llc1wiLFxyXG4gIFwiQXUgcGxhaXNpciBldCBhbWljYWxlbWVudFwiLFxyXG4gIFwiSmUgdm91cyBwcmllIGRlIGNyb2lyZSwgTWFkYW1lLCBNb25zaWV1ciwgw6AgbWEgY29uc2lkw6lyYXRpb24gZGlzdGluZ3XDqWUuXCIsXHJcbiAgXCJWZXVpbGxleiByZWNldm9pciwgTWFkYW1lLCBNb25zaWV1ciwgbCdhc3N1cmFuY2UgZGUgbWVzIHNpbmPDqHJlcyBzYWx1dGF0aW9uc1wiLFxyXG4gIFwiSmUgdm91cyBwcmllIGQnYWdyw6llciBtZXMgcGx1cyByZXNwZWN0dWV1c2VzIHNhbHV0YXRpb25zXCIsXHJcbiAgXCJWZXVpbGxleiByZWNldm9pciBsJ2Fzc3VyYW5jZSBkZSBtYSBjb25zaWTDqXJhdGlvbiBkaXN0aW5ndcOpZVwiLFxyXG4gIFwiQXZlYyBtZXMgcmVzcGVjdHVldXggaG9tbWFnZXMsIGplIHZvdXMgcHJpZSBk4oCZYWdyw6llciwgTW9uc2lldXIsIE1hZGFtZSwgbOKAmWV4cHJlc3Npb24gZGUgbWEgY29uc2lkw6lyYXRpb24gbGEgcGx1cyBkaXN0aW5ndcOpZS5cIixcclxuICBcIkplIHZvdXMgcHJpZSBk4oCZYWdyw6llciwgTW9uc2lldXIsIGzigJlhc3N1cmFuY2UgZGUgbW9uIHByb2ZvbmQgcmVzcGVjdC5cIixcclxuICBcIk5vdXMgdm91cyBwcmlvbnMgZGUgY3JvaXJlLCBNb25zaWV1ciwgw6AgbCdleHByZXNzaW9uIGRlIG5vcyBzZW50aW1lbnRzIGxlcyBwbHVzIGTDqXZvdcOpcy5cIixcclxuICBcIlZldWlsbGV6IGNyb2lyZSwgY2hlciBNb25zaWV1ciwgw6AgbWVzIHNlbnRpbWVudHMgY29yZGlhdXggZXQgcmVzcGVjdHVldXguXCIsXHJcbiAgXCJWZXVpbGxleiBhZ3LDqWVyLCBNYWRhbWUsIE1vbnNpZXVyLCBs4oCZZXhwcmVzc2lvbiBkZSBtZXMgc2VudGltZW50cyByZXNwZWN0dWV1eC5cIixcclxuICBcIkNvcmRpYWxlbWVudCB2w7R0cmVcIixcclxuICBcIkplIHZvdXMgcHJpZSBkZSBjcm9pcmUsIGNoZXIgcHJpbmNlL2Now6hyZSBwcmluY2Vzc2UsIGVuIGwnYXNzdXJhbmNlIGRlIG1hIHBsdXMgaGF1dGUgY29uc2lkw6lyYXRpb24uXCIsXHJcbiAgXCJFbiB2b3VzIHNvdWhhaXRhbnQgY29yZGlhbGVtZW50IHVuZSBleGNlbGxlbnRlIGpvdXJuw6llXCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZGUgYmllbiB2b3Vsb2lyIGFncsOpZXIsIE1hZGFtZSBsYSBtYXJxdWlzZS8gTW9uc2lldXIgbGUgbWFycXVpcywgbCdleHByZXNzaW9uIGRlIG1lcyBob25uw6p0ZXMgZXQgcmVzcGVjdHVldXNlcyBzYWx1dGF0aW9ucy5cIixcclxuICBcIkplIHZvdXMgcHJpZSBkZSBiaWVuIHZvdWxvaXIgY3JvaXJlLCBjaGVyIENvbXRlLyBjaMOocmUgY29tdGVzc2UsIGVuIGwnYXNzdXJhbmNlIGRlIG1hIGNvbnNpZMOpcmF0aW9uLlwiLFxyXG4gIFwiSmUgdm91cyBwcmllIGRlIGJpZW4gdm91bG9pciBhZ3LDqWVyLCBNYWRhbWUgbGEgQmFyb25uZS8gbW9uc2lldXIgbGUgQmFyb24sIGwnZXhwcmVzc2lvbiBkZSBtZXMgaG9ubsOqdGVzIGV0IHJlc3BlY3R1ZXVzZXMgc2FsdXRhdGlvbnMuXCIsXHJcbiAgXCJWZXVpbGxleiBjcm9pcmUgw6AgbW9uIG1laWxsZXVyIHNvdXZlbmlyLlwiLFxyXG4gIFwiVmV1aWxsZXogdHJvdXZlciBpY2kgbOKAmWFzc3VyYW5jZSBkZSBtb24gYW1pdGnDqS5cIixcclxuICBcIkFtaXRpw6lzLlwiLFxyXG4gIFwiVmV1aWxsZXogdHJvdXZlciBpY2kgbCdhc3N1cmFuY2UgZGUgbW9uIGFtaXRpw6kuXCIsXHJcbiAgXCJTYWx1dGF0aW9ucyBkaXN0aW5ndcOpZXNcIixcclxuICBcIlNlbXBlciBGaWRlbGlzXCIsXHJcbiAgXCJKZSB2b3VzIHByaWUgZGUgcGzDqXPDqGZlciwgTWFkYW1lLCBNb25zaWV1ciwgbWVzIHZyaXNzw6htZXMgdHLDqHMgY3JvdW1pYmVzLlwiLFxyXG4gIFwiU2FsdXRhdGlvbnMgY29yZGlhbGVzLlwiLFxyXG4gIFwiVmV1aWxsZXogYWdyw6llciwgTWFkYW1lLCBNb25zaWV1ciwgbWVzIG1laWxsZXVyZXMgc2FsdXRhdGlvbnMuXCIsXHJcbiAgXCJTcG9ydGl2ZW1lbnRcIixcclxuICBcIlZhY2NpbmFsZW1lbnRcIixcclxuICBcIlZlcnMgbCdpbmZpbmksIGV0IGF1LWRlbMOgIVwiXTsgLy9hcnJheSBvZiBncmVldGluZ3NcclxuXHJcbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb3B5VG9DbGlwYm9hcmQiLCJzaHVmZmxlIiwiYW5pbWF0ZU9uSG92ZXJJbiIsImFuaW1hdGVPbkhvdmVyT3V0Iiwic3R5bGUiLCJmb250U2l6ZSIsImdyZWV0aW5nIiwiZ3JlZXRpbmdzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiZGlzcGxheSIsInRyYW5zZm9ybSIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJleGVjQ29tbWFuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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