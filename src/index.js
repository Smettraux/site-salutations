import 'css/main.css';
import 'css/icomoon.css';
import 'css/constants.css';

console.log('Hello World!');

//calls *******************************************************************

document.getElementById('copy').addEventListener('click', copyToClipboard);
document.getElementById('shuffle__button').addEventListener('click', shuffle);
document.getElementById('shuffle__button').addEventListener('mouseenter', animateOnHoverIn);
document.getElementById('shuffle__button').addEventListener('mouseleave', animateOnHoverOut);

//functions ***************************************************************

function animateOnHoverIn() {
  document.getElementById('shuffle__button').style.fontSize = "5rem";
}

function animateOnHoverOut() {
  document.getElementById('shuffle__button').style.fontSize = "4rem";
}

function shuffle() {
  console.log('shuffle');
  //select random from the list of greetings
  let greeting = greetings[Math.floor(Math.random() * greetings.length)];

  //display the greeting
  document.getElementById('greeting').innerHTML = greeting;
  document.getElementById('copied').style.display = "none";
  document.getElementById('copy').style.display = "block";

  document.getElementById('shuffle__button').style.transform = "rotate(180deg)";
}

function copyToClipboard() {
  let range = document.createRange();
  range.selectNode(document.getElementById("greeting"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect

  document.getElementById('copy').style.display = "none";
  document.getElementById('copied').style.display = "block";
}

//vars ********************************************************************

let greetings = [
  "Mes plus sincères salutations",
  "Tchô, bonne!",
  "Je vous prie de bien vouloir iller, Madame, Monsieur, mes tes éminemment stantes.",
  "Meilleures salutations",
  "Je vous prie de bien vouloir recevoir mes plus respectueuses salutations.",
  "Cordialement",
  "Je vous prie d’agréer, Madame/Monsieur, mes salutations les plus dévouées.",
  "Veuillez croire, Madame/Monsieur, en l’expression de mes sentiments les plus sincères.",
  "Bien à toi / vous",
  "Je vous prie d’agréer mes meilleures salutations",
  "Veuillez recevoir mes salutations distinguées",
  "Au plaisir et amicalement",
  "Je vous prie de croire, Madame, Monsieur, à ma considération distinguée.",
  "Veuillez recevoir, Madame, Monsieur, l'assurance de mes sincères salutations",
  "Je vous prie d'agréer mes plus respectueuses salutations",
  "Veuillez recevoir l'assurance de ma considération distinguée",
  "Avec mes respectueux hommages, je vous prie d’agréer, Monsieur, Madame, l’expression de ma considération la plus distinguée.",
  "Je vous prie d’agréer, Monsieur, l’assurance de mon profond respect.",
  "Nous vous prions de croire, Monsieur, à l'expression de nos sentiments les plus dévoués.",
  "Veuillez croire, cher Monsieur, à mes sentiments cordiaux et respectueux.",
  "Veuillez agréer, Madame, Monsieur, l’expression de mes sentiments respectueux.",
  "Cordialement vôtre",
  "Je vous prie de croire, cher prince/chère princesse, en l'assurance de ma plus haute considération.",
  "En vous souhaitant cordialement une excellente journée",
  "Je vous prie de bien vouloir agréer, Madame la marquise/ Monsieur le marquis, l'expression de mes honnêtes et respectueuses salutations.",
  "Je vous prie de bien vouloir croire, cher Comte/ chère comtesse, en l'assurance de ma considération.",
  "Je vous prie de bien vouloir agréer, Madame la Baronne/ monsieur le Baron, l'expression de mes honnêtes et respectueuses salutations.",
  "Veuillez croire à mon meilleur souvenir.",
  "Veuillez trouver ici l’assurance de mon amitié.",
  "Amitiés.",
  "Veuillez trouver ici l'assurance de mon amitié.",
  "Salutations distinguées",
  "Semper Fidelis",
  "Je vous prie de plésèfer, Madame, Monsieur, mes vrissèmes très croumibes.",
  "Salutations cordiales.",
  "Veuillez agréer, Madame, Monsieur, mes meilleures salutations.",
  "Sportivement",
  "Vaccinalement",
  "Vers l'infini, et au-delà!"]; //array of greetings

