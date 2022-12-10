import "css/main.css";
import "css/icomoon.css";
import "css/constants.css";
import 'regenerator-runtime/runtime'
import 'particles.js/particles.js'


const { contrastColor } = require("contrast-color");
const API_KEY = require("/config");

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


//fetch function to populate the list of greetings from googlesheets api and populate the greetings array

async function fetchFromSheet() {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${SHEETS_API_KEY}`
  );

  const data = await response.json(); //check if the sheet is not empty

  if (data.values[0]) {
    greetings = []; //data.values[0] is an array of the values in the first row of the sheet. populate the greetings array with the values

    for (let i = 0; i < data.values[0].length; i++) {
      greetings.push(data.values[0][i]);
    }
  }
  console.log(greetings);
}
fetchFromSheet();

//calls *******************************************************************

document
  .getElementById("copy__button")
  .addEventListener("click", copyToClipboard);
document.getElementById("shuffle__button").addEventListener("click", shuffle);
document
  .getElementById("shuffle__button")
  .addEventListener("mouseover", rotate);
document.getElementById("about").addEventListener("click", toggleCard);
document.getElementById("close__button").addEventListener("click", toggleCard);

//functions ***************************************************************

function rotate() {
  //animate the shuffle button on click
  document.getElementById("spinner").classList.add("animate");
  setTimeout(function () {
    document.getElementById("spinner").classList.remove("animate");
  }, 260);
}

function shuffle() {
  //select random from the list of greetings
  let greeting;
  let temp;
  temp = greeting;
  greeting = greetings[Math.floor(Math.random() * greetings.length)];

  if (greeting == temp) {
    shuffle();
  }

  //display the greeting
  document.getElementById("greeting").innerHTML = greeting;

  //reset the copy button
  document.getElementById("copy__button").innerHTML =
    'Copier<span id="copy__icon" class="icon-copy"></span>';

  //generate a background to apply to the CSS var & a contrast color
  let body = document.querySelector("body");
  let w = document.querySelector("#wrapper");
  let color = materialColor();
  const contrast = contrastColor({ bgColor: color });

  body.style.setProperty("--main-bg-color", color); //apply the background color
  w.style.setProperty("--main-bg-color", color); //apply the background color
  w.style.setProperty("--main-fg-color", contrast); //apply the contrast color
}

function copyToClipboard() {
  let range = document.createRange();
  range.selectNode(document.getElementById("greeting"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect

  document.getElementById("copy__button").innerHTML =
    "<span id='copied'></span>";
  document.getElementById("copied").classList.add("icon-checkmark");
}

function pickRandomProperty(obj) {
  var result;
  var count = 0;
  for (var prop in obj) if (Math.random() < 1 / ++count) result = prop;
  return result;
}

function toggleCard() {
  console.log("openCard");
  let toggle = document.getElementById("toggle");
  toggle.style.display === "none"
    ? (toggle.style.display = "block")
    : (toggle.style.display = "none");
}

//arrays ********************************************************************

let greetings = [
  "Mes plus sincères salutations.",
  "Tchô, bonne!",
  "Je vous prie de bien vouloir iller, Madame, Monsieur, mes tes éminemment stantes.",
  "Meilleures salutations.",
  "Je vous prie de bien vouloir recevoir mes plus respectueuses salutations.",
  "Cordialement.",
  "Je vous prie d’agréer, Monsieur, mes salutations les plus dévouées.",
  "Je vous prie d’agréer, Madame, mes salutations les plus distinguées.",
  "Veuillez croire, Madame/Monsieur, en l’expression de mes sentiments les plus sincères.",
  "Bien à toi.",
  "Bien à vous.",
  "Je vous prie d’agréer mes meilleures salutations.",
  "Veuillez recevoir mes salutations distinguées.",
  "Au plaisir et amicalement.",
  "Je vous prie de croire, Madame, Monsieur, à ma considération distinguée.",
  "Veuillez recevoir, Madame, Monsieur, l'assurance de mes sincères salutations",
  "Je vous prie d'agréer mes plus respectueuses salutations.",
  "Veuillez recevoir l'assurance de ma considération distinguée.",
  "Avec mes respectueux hommages, je vous prie d’agréer, Madame, Monsieur, l’expression de ma considération la plus distinguée.",
  "Je vous prie d’agréer, Monsieur, l’assurance de mon profond respect.",
  "Nous vous prions de croire, Monsieur, à l'expression de nos sentiments les plus dévoués.",
  "Veuillez croire, cher Monsieur, à mes sentiments cordiaux et respectueux.",
  "Veuillez agréer, Madame, Monsieur, l’expression de mes sentiments respectueux.",
  "Cordialement vôtre.",
  "Je vous prie de croire, cher Prince/chère Princesse, en l'assurance de ma plus haute considération.",
  "En vous souhaitant cordialement une excellente journée.",
  "Je vous prie de bien vouloir agréer, Madame la marquise/ Monsieur le marquis, l'expression de mes honnêtes et respectueuses salutations.",
  "Je vous prie de bien vouloir croire, cher Comte/ chère Comtesse, en l'assurance de ma considération.",
  "Je vous prie de bien vouloir agréer, Madame la Baronne/ Monsieur le Baron, l'expression de mes honnêtes et respectueuses salutations.",
  "Veuillez croire à mon meilleur souvenir.",
  "Veuillez trouver ici l’assurance de mon amitié.",
  "Amitiés.",
  "Veuillez trouver ici l'assurance de mon amitié.",
  "Salutations distinguées.",
  "Semper Fidelis.",
  "Je vous prie de plésèfer, Madame, Monsieur, mes vrissèmes très croumibes.",
  "Salutations cordiales.",
  "Veuillez agréer, Madame, Monsieur, mes meilleures salutations.",
  "Sportivement.",
  "Vaccinalement.",
  "Vers l'infini, et au-delà!",
  "À la revoyure!",
  "À bientôt, si c'est pas avant.",
]; //array of greetings

function materialColor() {
  // colors from https://github.com/egoist/color-lib/blob/master/color.json
  var colors = {
    red: {
      "50": "#ffebee",
      "100": "#ffcdd2",
      "200": "#ef9a9a",
      "300": "#e57373",
      "400": "#ef5350",
      "500": "#f44336",
      "600": "#e53935",
      "700": "#d32f2f",
      "800": "#c62828",
      "900": "#b71c1c",
      hex: "#f44336",
      a100: "#ff8a80",
      a200: "#ff5252",
      a400: "#ff1744",
      a700: "#d50000",
    },
    pink: {
      "50": "#fce4ec",
      "100": "#f8bbd0",
      "200": "#f48fb1",
      "300": "#f06292",
      "400": "#ec407a",
      "500": "#e91e63",
      "600": "#d81b60",
      "700": "#c2185b",
      "800": "#ad1457",
      "900": "#880e4f",
      hex: "#e91e63",
      a100: "#ff80ab",
      a200: "#ff4081",
      a400: "#f50057",
      a700: "#c51162",
    },
    purple: {
      "50": "#f3e5f5",
      "100": "#e1bee7",
      "200": "#ce93d8",
      "300": "#ba68c8",
      "400": "#ab47bc",
      "500": "#9c27b0",
      "600": "#8e24aa",
      "700": "#7b1fa2",
      "800": "#6a1b9a",
      "900": "#4a148c",
      hex: "#9c27b0",
      a100: "#ea80fc",
      a200: "#e040fb",
      a400: "#d500f9",
      a700: "#aa00ff",
    },
    deepPurple: {
      "50": "#ede7f6",
      "100": "#d1c4e9",
      "200": "#b39ddb",
      "300": "#9575cd",
      "400": "#7e57c2",
      "500": "#673ab7",
      "600": "#5e35b1",
      "700": "#512da8",
      "800": "#4527a0",
      "900": "#311b92",
      hex: "#673ab7",
      a100: "#b388ff",
      a200: "#7c4dff",
      a400: "#651fff",
      a700: "#6200ea",
    },
    indigo: {
      "50": "#e8eaf6",
      "100": "#c5cae9",
      "200": "#9fa8da",
      "300": "#7986cb",
      "400": "#5c6bc0",
      "500": "#3f51b5",
      "600": "#3949ab",
      "700": "#303f9f",
      "800": "#283593",
      "900": "#1a237e",
      hex: "#3f51b5",
      a100: "#8c9eff",
      a200: "#536dfe",
      a400: "#3d5afe",
      a700: "#304ffe",
    },
    blue: {
      "50": "#e3f2fd",
      "100": "#bbdefb",
      "200": "#90caf9",
      "300": "#64b5f6",
      "400": "#42a5f5",
      "500": "#2196f3",
      "600": "#1e88e5",
      "700": "#1976d2",
      "800": "#1565c0",
      "900": "#0d47a1",
      hex: "#2196f3",
      a100: "#82b1ff",
      a200: "#448aff",
      a400: "#2979ff",
      a700: "#2962ff",
    },
    lightBlue: {
      "50": "#e1f5fe",
      "100": "#b3e5fc",
      "200": "#81d4fa",
      "300": "#4fc3f7",
      "400": "#29b6f6",
      "500": "#03a9f4",
      "600": "#039be5",
      "700": "#0288d1",
      "800": "#0277bd",
      "900": "#01579b",
      hex: "#03a9f4",
      a100: "#80d8ff",
      a200: "#40c4ff",
      a400: "#00b0ff",
      a700: "#0091ea",
    },
    cyan: {
      "50": "#e0f7fa",
      "100": "#b2ebf2",
      "200": "#80deea",
      "300": "#4dd0e1",
      "400": "#26c6da",
      "500": "#00bcd4",
      "600": "#00acc1",
      "700": "#0097a7",
      "800": "#00838f",
      "900": "#006064",
      hex: "#00bcd4",
      a100: "#84ffff",
      a200: "#18ffff",
      a400: "#00e5ff",
      a700: "#00b8d4",
    },
    teal: {
      "50": "#e0f2f1",
      "100": "#b2dfdb",
      "200": "#80cbc4",
      "300": "#4db6ac",
      "400": "#26a69a",
      "500": "#009688",
      "600": "#00897b",
      "700": "#00796b",
      "800": "#00695c",
      "900": "#004d40",
      hex: "#009688",
      a100: "#a7ffeb",
      a200: "#64ffda",
      a400: "#1de9b6",
      a700: "#00bfa5",
    },
    green: {
      "50": "#e8f5e9",
      "100": "#c8e6c9",
      "200": "#a5d6a7",
      "300": "#81c784",
      "400": "#66bb6a",
      "500": "#4caf50",
      "600": "#43a047",
      "700": "#388e3c",
      "800": "#2e7d32",
      "900": "#1b5e20",
      hex: "#4caf50",
      a100: "#b9f6ca",
      a200: "#69f0ae",
      a400: "#00e676",
      a700: "#00c853",
    },
    lightGreen: {
      "50": "#f1f8e9",
      "100": "#dcedc8",
      "200": "#c5e1a5",
      "300": "#aed581",
      "400": "#9ccc65",
      "500": "#8bc34a",
      "600": "#7cb342",
      "700": "#689f38",
      "800": "#558b2f",
      "900": "#33691e",
      hex: "#8bc34a",
      a100: "#ccff90",
      a200: "#b2ff59",
      a400: "#76ff03",
      a700: "#64dd17",
    },
    lime: {
      "50": "#f9fbe7",
      "100": "#f0f4c3",
      "200": "#e6ee9c",
      "300": "#dce775",
      "400": "#d4e157",
      "500": "#cddc39",
      "600": "#c0ca33",
      "700": "#afb42b",
      "800": "#9e9d24",
      "900": "#827717",
      hex: "#cddc39",
      a100: "#f4ff81",
      a200: "#eeff41",
      a400: "#c6ff00",
      a700: "#aeea00",
    },
    yellow: {
      "50": "#fffde7",
      "100": "#fff9c4",
      "200": "#fff59d",
      "300": "#fff176",
      "400": "#ffee58",
      "500": "#ffeb3b",
      "600": "#fdd835",
      "700": "#fbc02d",
      "800": "#f9a825",
      "900": "#f57f17",
      hex: "#ffeb3b",
      a100: "#ffff8d",
      a200: "#ffff00",
      a400: "#ffea00",
      a700: "#ffd600",
    },
    amber: {
      "50": "#fff8e1",
      "100": "#ffecb3",
      "200": "#ffe082",
      "300": "#ffd54f",
      "400": "#ffca28",
      "500": "#ffc107",
      "600": "#ffb300",
      "700": "#ffa000",
      "800": "#ff8f00",
      "900": "#ff6f00",
      hex: "#ffc107",
      a100: "#ffe57f",
      a200: "#ffd740",
      a400: "#ffc400",
      a700: "#ffab00",
    },
    orange: {
      "50": "#fff3e0",
      "100": "#ffe0b2",
      "200": "#ffcc80",
      "300": "#ffb74d",
      "400": "#ffa726",
      "500": "#ff9800",
      "600": "#fb8c00",
      "700": "#f57c00",
      "800": "#ef6c00",
      "900": "#e65100",
      hex: "#ff9800",
      a100: "#ffd180",
      a200: "#ffab40",
      a400: "#ff9100",
      a700: "#ff6d00",
    },
    deepOrange: {
      "50": "#fbe9e7",
      "100": "#ffccbc",
      "200": "#ffab91",
      "300": "#ff8a65",
      "400": "#ff7043",
      "500": "#ff5722",
      "600": "#f4511e",
      "700": "#e64a19",
      "800": "#d84315",
      "900": "#bf360c",
      hex: "#ff5722",
      a100: "#ff9e80",
      a200: "#ff6e40",
      a400: "#ff3d00",
      a700: "#dd2c00",
    },
    brown: {
      "50": "#efebe9",
      "100": "#d7ccc8",
      "200": "#bcaaa4",
      "300": "#a1887f",
      "400": "#8d6e63",
      "500": "#795548",
      "600": "#6d4c41",
      "700": "#5d4037",
      "800": "#4e342e",
      "900": "#3e2723",
      hex: "#795548",
    },
    grey: {
      "50": "#fafafa",
      "100": "#f5f5f5",
      "200": "#eeeeee",
      "300": "#e0e0e0",
      "400": "#bdbdbd",
      "500": "#9e9e9e",
      "600": "#757575",
      "700": "#616161",
      "800": "#424242",
      "900": "#212121",
      hex: "#9e9e9e",
    },
    blueGrey: {
      "50": "#eceff1",
      "100": "#cfd8dc",
      "200": "#b0bec5",
      "300": "#90a4ae",
      "400": "#78909c",
      "500": "#607d8b",
      "600": "#546e7a",
      "700": "#455a64",
      "800": "#37474f",
      "900": "#263238",
      hex: "#607d8b",
    },
    black: {
      hex: "#000000",
    },
    white: {
      hex: "#ffffff",
    },
  };
  // pick random property
  //var property = pickRandomProperty(colors);
  var colorList = colors[pickRandomProperty(colors)];
  var newColorKey = pickRandomProperty(colorList);
  var newColor = colorList[newColorKey];
  return newColor;
}
