//declaration
function helloworld()
{
    document.write("Hello World !");
}

function sum(nb1, nb2)
{
    res = nb1 + nb2;
    return res;
    //return nb1 + nb2
}

//document.write(sum(1, 2));

//parametre facultatif donner une valeur par defaut
function sum2(nb1, nb2 = 10)
{
    return nb1 + nb2;
}
//document.write(sum2(1));

//undefined args
function multipleargs(...args)
{
    for (elem of args) // elem = elements of args
        document.write(elem);
    for (elem in args) //elem = index
        document.write(elem);

}

multipleargs("GG", "tu", "a", "plein d argument");

//function in function
function inception()
{
    let data = "function in function";

    function incepted()
    {
        document.write(data);
    }
    incepted();
}
inception()

//expression de fonction
let hello = function helloworld()
{
    document.write("hello world !");
} 
hello();

let sum3 = function(x,y){return x + y;};
// let sum3 = (x, y) => {return x + y};        var =  <argument> => {instructions}
document.write(sum3(3,2));