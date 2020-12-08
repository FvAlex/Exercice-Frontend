"use strict"

    export class Calculator{


        constructor(){

            // le body
            const body = document.body;

            // Resultat de calcul

            const resultat = document.createElement('p');
            resultat.textContent = 'Résultat du calcul';
            resultat.classList.add('resultat')
            body.prepend(resultat);

            // div conteneur

            const divRow = document.createElement('div');
            divRow.id = 'divrow';
            resultat.after(divRow);

            // div element gauche

            const divRowDroite = document.createElement('div');
            divRowDroite.id = 'divrowDroite';
            divRow.append(divRowDroite);

            // div pour la premiere ligne de bouton

            const divRow1 = document.createElement('div');
            divRow1.id = 'divrow_1';
            divRowDroite.prepend(divRow1);

            // div deuxieme ligne de bouton

            const divRow2 = document.createElement('div');
            divRow2.id = 'divrow_2';
            divRow.prepend(divRow2);

            // div égale

            const divRow3 = document.createElement('div');
            divRow3.id = 'divrow_3';
            divRowDroite.append(divRow3);

            // premiere ligne bouton

            const row1 = document.createElement('div');
            row1.id = 'row1';
            divRow2.append(row1);

            // deuxieme ligne bouton

            const row2 = document.createElement('div');
            row2.id = 'row2';
            row1.after(row2);

            // troisieme ligne bouton

            const row3 = document.createElement('div');
            row3.id = 'row3';
            row2.after(row3);

            // quatrieme ligne bouton

            const row4 = document.createElement('div');
            row4.id = 'row4';
            row3.after(row4);

            // cinquieme ligne bouton

            const row5 = document.createElement('div');
            row5.id = 'row5';
            row4.after(row5);


        
            //bouton %

            const btnDiv = document.createElement('button');
            btnDiv.id = 'btnDiv';
            btnDiv.classList.add("button")
            btnDiv.textContent = "/"
            divRow1.append(btnDiv);

            //bouton +

            const btnAdd = document.createElement('button');
            btnAdd.id = 'btnAdd';
            btnAdd.classList.add("button")
            btnAdd.textContent = "+"
            row1.append(btnAdd);

            //bouton -

            const btnNeg = document.createElement('button');
            btnNeg.id = 'btnNeg';
            btnNeg.classList.add("button")
            btnNeg.textContent = "-"
            btnAdd.after(btnNeg);

            //bouton x

            const btnMult= document.createElement('button');
            btnMult.id = 'btnMult';
            btnMult.classList.add("button")
            btnMult.textContent = "x"
            btnNeg.after(btnMult);

            // bouton 7

            const nbsept = document.createElement('button');
            nbsept.id = 'nbsept';
            nbsept.classList.add("button");
            nbsept.textContent = "7";
            row2.append(nbsept);

            // bouton 8
            
            const nbhuit = document.createElement('button');
            nbhuit.id = 'nbhuit';
            nbhuit.classList.add("button");
            nbhuit.textContent = "8";
            nbsept.after(nbhuit);

            // bouton 9

            const nbneuf = document.createElement('button');
            nbneuf.id = 'nbneuf';
            nbneuf.classList.add("button");
            nbneuf.textContent = "9";
            nbhuit.after(nbneuf);

            // bouton 4

            const nbquatre = document.createElement('button');
            nbquatre.id = 'nbquatre';
            nbquatre.classList.add("button");
            nbquatre.textContent = "4";
            row3.append(nbquatre);

            // bouton 5

            const nbcinq = document.createElement('button');
            nbcinq.id = 'nbcinq';
            nbcinq.classList.add("button");
            nbcinq.textContent = "5";
            nbquatre.after(nbcinq);

            // bouton 6

            const nbsix = document.createElement('button');
            nbsix.id = 'nbsix';
            nbsix.classList.add("button");
            nbsix.textContent = "6";
            nbcinq.after(nbsix);

            // bouton 1

            const nbun = document.createElement('button');
            nbun.id = 'nbun';
            nbun.classList.add("button");
            nbun.textContent = "1";
            row4.append(nbun);

            // bouton 2

            const nbdeux = document.createElement('button');
            nbdeux.id = 'nbdeux';
            nbdeux.classList.add("button");
            nbdeux.textContent = "2";
            nbun.after(nbdeux);

            // bouton 3

            const nbtrois = document.createElement('button');
            nbtrois.id = 'nbtrois';
            nbtrois.classList.add("button");
            nbtrois.textContent = "3";
            nbdeux.after(nbtrois);
            
            // bouton 0

            const nbzero= document.createElement('button');
            nbzero.id = 'nbzero';
            nbzero.classList.add("button");
            nbzero.textContent = "0";
            row5.append(nbzero);

            // bouton .

            const nbpoint = document.createElement('button');
            nbpoint.id = 'nbpoint';
            nbpoint.classList.add("button");
            nbpoint.textContent = ".";
            nbzero.after(nbpoint);

            // bouton AC

            const nbAC = document.createElement('button');
            nbAC.id = 'nbAC';
            nbAC.classList.add("button");
            nbAC.textContent = "AC";
            nbpoint.after(nbAC);

            //bouton =

            const egale = document.createElement('button');
            egale.id = 'egale';
            egale.classList.add("button");
            egale.textContent = "=";
            divRow3.append(egale);

            // const button = document.querySelector('#button');
            // button.addEventListener("click");
        }
    }
