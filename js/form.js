class Form{
    constructor(){
    this.input = createInput("name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.resetbutton = createButton('Reset');
    }

  hide(){
  this.greeting.hide();
  this.button.hide();
  this.input.hide();
  }

    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2-40, 0);
        this.input.position(displayWidth/2 -70, displayHeight/2 -70);
        this.button.position(displayWidth/2+30, displayHeight/2);
        this.resetbutton.position(displayWidth/2, 50);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html(" Hello, welcome to the game! " + player.name);
            this.greeting.position(displayWidth/2 -70, displayHeight/2 -70);
        }) 
        this.resetbutton.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        })
    }
}