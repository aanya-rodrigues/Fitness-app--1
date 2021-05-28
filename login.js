class Login {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Login');
    this.greeting = createElement('h2');
  }
  hide(){
    this.button.hide();
    this.input.hide();
  }

  display(){
    this.title.html("Exercise app");
    this.title.position(600, 0);

    this.input.position(600 , 200);
    this.button.position(600, 220);
     
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      Names+=1;
      this.greeting.html("Hello " + Names.name)
      this.greeting.position(600, 200);
    });

  }
}