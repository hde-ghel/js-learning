/*
    = affectation
    +, -, *, /, %

*/

//autre operateur d affectation
let N = 5;
document.write(N, "\n");
N = 6;
document.write(N, "\n");
N = N + 1;
document.write(N, "\n");
N += 1;
N -= 1;
N *= 1;
N /= 1;
N++;
N--;
--N;
++N;
var num = 5;
document.write(num++, "\n"); //post increm ; print 5 puis increm
document.write(++num, "\n"); //pre increm ; increm puis print

//operateur de comparaison
// <,>,>=,<=  return bool
// == verifie l'egalité, === verif egalité et type
// != valeur diff, !== type ou valeur diff

document.write(8 < 12, "\n");
document.write(8 == 8.0, "\n");
document.write(8 === 8.0, "\n");
