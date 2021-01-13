"use strict";
/*

Créer une classe Player
Cette classe a une propriété nbLifes que l'utilisateur
peut préciser et une propriété pseudo
Ajouter une méthode hello à cette classe, et qui affiche
"Bonjour, je suis pseudo et j'ai x vies"
*/
class Player {
    constructor(nbLifes, pseudo) {
        this.nbLifes = nbLifes;
        this.pseudo = pseudo;
    }

    hello() {
        console.log(`Bonjour, je suis ${this.pseudo} et j'ai ${this.nbLifes} vies`);
    }
}

const pseudonym = prompt("Entrez votre pseudo");
const nbHearts = Number(prompt("Entrez un nombre de vies"));

const me = new Player(nbHearts, pseudonym);
console.log(me);
me.hello();
 
/*
Créer une classe Guerrière (Warrior) qui hérite de player
Créer une méthode kick() qui affiche "Ouille!" dans la console
*/

class Warrior extends Player {
    kick() {
        console.log("Ouille...");
    }
}

/*
Créer une classe Magician qui hérite de Player
Créer une méthode spell() qui affiche "Foudre!" dans la console
Bonus: 
Créer une propriété mana pour le magicien.
Chaque sort utilise 10 points de mana.
Si il n'y a plus assez de mana, spell() affiche "Pas assez de mana!"

*/

class Magician extends Player {
    constructor(nbLifes, pseudo, mana) {
        super(nbLifes, pseudo);

        this.mana = mana;
    }

    spell() {
        if(this.mana >= 10) {
            console.log("Foudre");
            this.mana-=10;
        }
        else {
            console.log("A PU MANAAAA");
        }
    }
}
/*
Créer un perso Warrior avec un pseudo rigolo et un perso Magician avec un
pseudo badass
Lancer kick et hello sur le perso Warrior
Lancer spell et hello sur le perso Magician
*/

const krom = new Warrior(8000,"Krôm");
krom.hello();
krom.kick();

const gandalf = new Magician(2,"Gandalf");
gandalf.hello();
gandalf.spell();


// Bonus numéro 2:
// Chaque classe est dans son propre fichier
// La création des persos et leurs actions seront faits dans le app.js