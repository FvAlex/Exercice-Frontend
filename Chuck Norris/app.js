"use strict";

let btn = document.querySelector("#btn");
let output = document.querySelector("#output");

const quotes = [
    'Chuck norris ne mens pas, c\'est la verité qui ment',
    'Chuck Norris a déjà compté jusqu\'à l\'infini. Deux fois.',
    'Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.',
    'Chuck Norris est mort depuis 10 ans, mais la Mort n\'a pas encore trouvé le courage d\'aller lui dire.',
    'Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.',
    'Certains disent : "La violence ne résout rien". Chuck Norris leur répond : "C\'est que t\'as pas tapé assez fort".',
    'Chuck Norris va régulièrement voir des matchs du PSG pour ne pas oublier ce qu\'est la défaite.',
    'Chuck Norris sait parler le braille.',
    'Chuck Norris peut t\'étrangler avec un téléphone sans fil.',
    'En France, on dit aux enfants que s\'ils ne veulent pas manger, le grand méchant loup les bouffera tout crus. Aux Etats-Unis, c\'est de Chuck Norris qu\'on leur parle. C\'est pour ça qu\'il y a tant d\'obèses.',
];

function clickchuck(event){
    event.preventDefault();

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote
}


function otherColor(){
    let tableColor = [];

    for(let i=0; i<3; i++){
        tableColor.push(Math.floor(Math.random()*256));
    }

// body btn output
btn.style.backgroundColor = `rgb(${tableColor[0]}, ${tableColor[1]}, ${tableColor[2]})`;
document.body.style.backgroundColor = `rgb(${tableColor[0]}, ${tableColor[1]}, ${tableColor[2]})`;
output.style.color = `rgb(${tableColor[0]}, ${tableColor[1]}, ${tableColor[2]})`;

}

btn.addEventListener("click", function(){clickchuck(event), otherColor()});