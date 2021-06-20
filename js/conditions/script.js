//if else
let name = prompt("quel est ton nom ?");

if (name === "yuna")
    document.write("OUI ");
else
    document.write("NON");

//if elsif
let number = prompt("donne un nombre ?");

if (number < 0)
    document.write("<0");
else if (number > 10)
    document.write("> 10");
else
    document.write(number);

//switch block

let num = 4;

switch(num)
{
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        document.write("number < 5\n");
        break;
    case 5:
        document.write("number = 5\n");
        break;
    default:
        alert("pas de valeur reconnue...");
        break;
}

let nom = "yuna";

switch(nom)
{
    case "yuna":
        document.write("OK");
        break;
    default:
        alert("PAS OK");
        break;
}

//ternaire
nom == "yuna" ? document.write("YES") : document.write("NO");
res = (nom == "yuna") ? "YES" : "NO";
document.write(res);