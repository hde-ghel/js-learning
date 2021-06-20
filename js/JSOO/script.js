class MusicPlayer
{
    constructor(format)
    {
        this.format = format; // this == self
    }
    
    get_format()
    {
        return this.format;
    }

    play()
    {
        document.write("Lecture en cours ...");
    }
    set_format(new_format)
    {
        this.format = new_format;
    }
}
let player = new MusicPlayer("MP3");
let player2 = new MusicPlayer("OGG"); //les object son independant
document.write(player.format);
player.play();
console.log(player.get_format());
player.set_format("M4A");
console.log(player.get_format());

//class as expression
let MP = class
{
    constructor (format)
    {
        this.format = format;
    }
    play()
    {
        document.write("lecture en cours...");
    }
};
let music = new MP("MP3");
music.play();