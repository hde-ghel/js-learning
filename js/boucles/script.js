//boucle while
let i = 0;

while (i < 5)
    {
        document.write(i++);
    }


//boucle do: fait les instruction au moin une fois
do
{
    document.write(i++);
}
while(i<10);

//boucle for
for(let a = 0 ; a < 10; a++)
{
    if (a === 8)
        continue;// go to top of loop without running below instruction 
    if (a === 9)
        break;// break the loop
    document.write("A", a);   
}
    
