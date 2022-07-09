class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

setElementsPosition() {
this.titleImg.position(20,160);
this.input.position(width/2-110,hight/2-80);
this.playButton.position(width/2-90,hight/2-20);
this.greeting.position(width/2-300,hight/2-100);
}

setElementStyle() {
  this.titleImg.class("gameTitle");
  this.input.class("customeInput");
  this.playButton.class("customeButton");
  this.greeting.class("greetings");
}

display() {
  this.setElementStyle();
  this.setElementsPosition();
  
}
}
