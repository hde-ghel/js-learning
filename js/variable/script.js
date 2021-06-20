var age = 14;
// age = 14;  == variable globale
//let age = 14; varibale pour le block de code uniquement
document.write(age, "\n");
age = "Harold"
document.write(age, "\n");
document.write(typeof(age), "\n");
//boolen
var majeur = true;
document.write(majeur, typeof majeur, "\n");

//affecter une fonction a une variable
var nom = prompt("quel est ton nom ?");
document.write(nom, "\n");
document.write(typeof nom, "\n")

//casting reaffectation
var age = prompt("quel est ton age ?");
document.write(age, "\n");
document.write(typeof age, "\n");
age = parseInt(age);
document.write(typeof age, "\n");

//const pour variable = variable constante - non modifiable nombre chaine bool
const PI = 3.14;
document.write(PI, "\n");

//const pour objet, tableau, ... = constance des type de l'objet mais données modifiable

