/* function MusicPlayer(filetype)
{
    var filetype = filetype;

    this.filetype = function()
    {
        return filetype;
    }
}
let song = new MusicPlayer("MP3");
document.write(song.filetype + "<br>");
song.filetype = "MP4";
document.write(song.filetype + "<br>");
MusicPlayer.hello = function() {return "Hello World";};
document.write(MusicPlayer.hello()); */

//ES6
class MusicPlayer
{
    constructor(filetype)
    {
        this.filetype = filetype; // this == self
    }
    static hello()
    {
        return("Hello World");
    }

    play()
    {
        document.write("Lecture en cours ...");
    }
} 
let song = new MusicPlayer("MP3");
document.write(song.filetype + "<br>");
song.filetype = "MP4";
document.write(song.filetype + "<br>"); 
MusicPlayer.hello = function() {return "Hello World";};
document.write(MusicPlayer.hello() + "<br>");

//Methode Prototype permet d'ajouter des atribus
document.write(song.filename);//attribus pas encore defini
//prototype methode pour ajouter des attribu a une classe
MusicPlayer.prototype.filename = "C:/song";
let song2 = new MusicPlayer("OGG");
document.write(song2.filename + "<br>");
//delete method poru supprimer attribu
delete song.filename; 
//ajouter method
MusicPlayer.prototype.hello2 = function()
{
    return "Hello";
};
document.write(song.hello2());