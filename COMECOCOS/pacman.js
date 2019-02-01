var shapes = [];
var balls = [];
var big_balls = [];
var ghosts = [];
var cherrys = [];
var canvas;
var puntos = 0;
var vidas = 3;
var desp = [0,2];
var tiempo = 10;
var sec_max= 30;
var min_max = 2;


var img_cherry = new Image();

// img_cherry.width = "5px";
// img_cherry.height = "5px";
img_cherry.src = 'cherry.png';

var img1 = new Image();
img1.src = 'pacman_right.png';
var pink_ghost = new Image();
pink_ghost.src = 'rosa_right.png';
var orange_ghost = new Image();
orange_ghost.src = 'naranja_right.png';
var blue_ghost = new Image();
blue_ghost.src = 'azul_right.png';
var red_ghost = new Image();
red_ghost.src = 'rojo_right.png';


  function Pacman(id, x, y, image , colour){
    this.id = id;
    this.x = x;
    this.y = y;
    this.image = image;
    this.radious = 12;
    this.posimgx = this.x -15;
    this.posimgy = this.y -15

    this.draw = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radious, 0, (5 * Math.PI)/3, false);
      ctx.lineTo(this.x,this.y);
      ctx.lineTo(this.x+this.radious,this.y);
      ctx.strokeStyle =  'rgb(0,0,0)';
      ctx.stroke();
      ctx.closePath();
      // console.log(this.image);
      ctx.beginPath();
      ctx.save();
      //ctx.translate(this.x,this.y);
      ctx.drawImage(this.image,this.x-15,this.y-15);//dibuja la imagen
      //ctx.restore();
      //ctx.closePath();

    }

      this.movex = function(despx) {

        this.x = this.x + despx;

        // if((this.x - this.radious)<0)
        //   this.x = this.radious;
        // if((this.x + this.radious)>=canvas.width)
        //   this.x = canvas.width - this.radious;

          drawShapes();
      }

      this.movey = function(despy) {

        this.y = this.y + despy;

        // if((this.y - this.radious)<0)
        //   this.y = this.radious;
        // if((this.y + this.radious)>=canvas.width)
        //   this.y = canvas.width - this.radious;

        drawShapes();
      }

}


function ghost(id, x, y, image){
  this.id = id;
  this.x = x;
  this.y = y;
  this.image = image;
  this.radious = 12;
  this.posimgx = this.x -15;
  this.posimgy = this.y -15

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radious, 0, (5 * Math.PI)/3, false);
    ctx.lineTo(this.x,this.y);
    ctx.lineTo(this.x+this.radious,this.y);
    ctx.strokeStyle =  'rgb(255,0,0)';
    ctx.stroke();
    ctx.closePath();
    // console.log(this.image);
    ctx.beginPath();
    ctx.save();
    //ctx.translate(this.x,this.y);
    ctx.drawImage(this.image,this.x-15,this.y-15);//dibuja la imagen
    //ctx.restore();
    //ctx.closePath();

  }

    this.movex = function(despx) {

      this.x = this.x + despx;

      // if((this.x - this.radious)<0)
      //   this.x = this.radious;
      // if((this.x + this.radious)>=canvas.width)
      //   this.x = canvas.width - this.radious;

        drawShapes();
    }

    this.movey = function(despy) {

      this.y = this.y + despy;

      // if((this.y - this.radious)<0)
      //   this.y = this.radious;
      // if((this.y + this.radious)>=canvas.width)
      //   this.y = canvas.width - this.radious;

      drawShapes();
    }

}


function cherry(id, x, y, image){
  this.id = id;
  this.x = x;
  this.y = y;
  this.image = image;
  this.radious = 12;
  this.posimgx = this.x -15;
  this.posimgy = this.y -15

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radious, 0, (5 * Math.PI)/3, false);
    ctx.lineTo(this.x,this.y);
    ctx.lineTo(this.x+this.radious,this.y);
    ctx.strokeStyle =  'rgb(0,0,0)';
    ctx.stroke();
    ctx.closePath();
    // console.log(this.image);
    ctx.beginPath();
    ctx.save();
    //ctx.translate(this.x,this.y);
    ctx.drawImage(this.image,this.x-15,this.y-15);//dibuja la imagen
    //ctx.restore();
    //ctx.closePath();

  }
}


function rewind(){





}
function temporizador(){

  cuenta_atras = setInterval(
    function(){
      tiempo = tiempo -1;
      console.log("temporizador",  tiempo);
      if(cherrys[0].id == "cherry"){
        tiempo = 10;
      }
    },1000);
}

function cheack_cherry(){
  temporizador();
  cherry_10seconds = setInterval(
    function(){
      console.log("tiempo = ", tiempo);
      if(tiempo == 0){
        console.log("holi que tal");
        Mapa_cherry();
        drawShapes();
        tiempo = 10;
        clearInterval(cherry_10seconds);
      }


    },1000);
}

function Mapa_cherry(){

  cherrys.push(new cherry("cherry",60,120,img_cherry));

}

function Mapa_ghosts(){
  ghosts.push(new ghost("pink_ghost",120,430,pink_ghost));
  ghosts.push(new ghost("blue_ghost",380,30,blue_ghost));
  ghosts.push(new ghost("orange_ghost",30,120,orange_ghost));
  ghosts.push(new ghost("red_ghost",440,470,red_ghost));
}

function move_ghosts(){
    var pink = [2];
    var blue = [2];
    var orange = [2];
    var red = [2];

    move_pink_ghost = setInterval(
    function(){


      var mpg;
      mpg = getGhost("pink_ghost");
        if(mpg === undefined)
          return;

      if(mpg.y +2  == 442){
        pink[0] = 1;
      }

      if(mpg.y -2 == 34){

        pink[0] = 2;
      }

      if(pink[0] == 1){
        mpg.movey(-desp[1]);
      }

      if(pink[0] == 0){
        mpg.movey(+desp[1]);
      }
      if(pink[0] == 2){

        mpg.movey(+desp[1]);
      }
    },60);


    move_blue_ghost = setInterval(
    function(){


      var mbg;
      mbg = getGhost("blue_ghost");
        if(mbg === undefined)
          return;
      if(mbg.y +2  == 442){
        blue[0] = 1;
      }
      if(mbg.y -2 == 34){
        blue[0] = 2;
      }

      if(blue[0] == 1){
        mbg.movey(-desp[1]);
      }

      if(blue[0] == 0){
        mbg.movey(+desp[1]);
      }
      if(blue[0] == 2){

        mbg.movey(+desp[1]);
      }
    },60);

    move_orange_ghost = setInterval(
    function(){


      var mog;
      mog = getGhost("orange_ghost");
        if(mog === undefined)
          return;
      if(mog.x +2  == 462){
        orange[0] = 1;
      }

      if(mog.x -2 == 34){

        orange[0] = 2;
      }

      if(orange[0] == 1){
        mog.movex(-desp[1]);
        mog.image.src = 'naranja_left.png';
      }

      if(orange[0] == 0){
        mog.movex(+desp[1]);
        mog.image.src = 'naranja_right.png';
      }
      if(orange[0] == 2){

        mog.movex(+desp[1]);
        mog.image.src = 'naranja_right.png';

      }
    },50);

    move_red_ghost = setInterval(
    function(){


      var mrg;
      mrg = getGhost("red_ghost");
        if(mrg === undefined)
          return;
      if(mrg.x +2  == 462){
        red[0] = 1;
      }

      if(mrg.x -2 == 34){

        red[0] = 2;
      }

      if(red[0] == 1){
        mrg.movex(-desp[1]);
        mrg.image.src = 'rojo_left.png';
      }

      if(red[0] == 0){
        mrg.movex(+desp[1]);
        mrg.image.src = 'rojo_right.png';
      }
      if(red[0] == 2){
        mrg.movex(+desp[1]);
        mrg.image.src = 'rojo_right.png';

      }
    },50);
}



function ball(id,x,y) {
  this.id = id;
  this.x = x;
  this.y =y;
  this.radious = 5;
  var F;

  //Pinta las bolas
  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radious, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}


function big_ball(id,x,y) {
  this.id = id;
  this.x = x;
  this.y =y;
  this.radious = 10;
  var F;

  //Pinta las bolas
  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radious, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

//Funcion que nos coge los objetos dentro del array "bullets"
function getBall(id){
  	for(var x = 0; x < bullets.length; x++){
		if(bullets[x].id === id)
		  return bullets[x];
  	}
}

function Mapa_balls(){

balls.push(new ball("ball",30,30));
balls.push(new ball("ball",60,30));
balls.push(new ball("ball",90,30));
balls.push(new ball("ball",120,30));
balls.push(new ball("ball",150,30));
balls.push(new ball("ball",180,30));
balls.push(new ball("ball",210,30));
balls.push(new ball("ball",290,30));
balls.push(new ball("ball",320,30));
balls.push(new ball("ball",350,30));
balls.push(new ball("ball",380,30));
balls.push(new ball("ball",410,30));
balls.push(new ball("ball",440,30));
balls.push(new ball("ball",470,30));

balls.push(new ball("ball",30,60));
balls.push(new ball("ball",120,60));
balls.push(new ball("ball",210,60));
balls.push(new ball("ball",290,60));
balls.push(new ball("ball",380,60));
balls.push(new ball("ball",470,60));

big_balls.push(new big_ball("ball",30,90));
balls.push(new ball("ball",120,90));
balls.push(new ball("ball",210,90));
balls.push(new ball("ball",290,90));
balls.push(new ball("ball",380,90));
big_balls.push(new big_ball("ball",470,90));





balls.push(new ball("ball",30,120));
balls.push(new ball("ball",60,120));
balls.push(new ball("ball",90,120));
balls.push(new ball("ball",120,120));
balls.push(new ball("ball",150,120));
balls.push(new ball("ball",180,120));
balls.push(new ball("ball",210,120));
balls.push(new ball("ball",250,120));

balls.push(new ball("ball",290,120));
balls.push(new ball("ball",320,120));
balls.push(new ball("ball",350,120));
balls.push(new ball("ball",380,120));
balls.push(new ball("ball",410,120));
balls.push(new ball("ball",440,120));
balls.push(new ball("ball",470,120));

balls.push(new ball("ball",30,160));
balls.push(new ball("ball",60,160));
balls.push(new ball("ball",90,160));
balls.push(new ball("ball",120,160));

balls.push(new ball("ball",180,160));
balls.push(new ball("ball",210,160));


balls.push(new ball("ball",290,160));
balls.push(new ball("ball",320,160));

balls.push(new ball("ball",380,160));
balls.push(new ball("ball",410,160));
balls.push(new ball("ball",440,160));
balls.push(new ball("ball",470,160));



balls.push(new ball("ball",120,200));
balls.push(new ball("ball",180,200));
balls.push(new ball("ball",210,200));
balls.push(new ball("ball",250,200));

balls.push(new ball("ball",290,200));
balls.push(new ball("ball",320,200));
balls.push(new ball("ball",380,200));



balls.push(new ball("ball",30,240));
balls.push(new ball("ball",60,240));
balls.push(new ball("ball",90,240));
balls.push(new ball("ball",120,240));
balls.push(new ball("ball",150,240));
balls.push(new ball("ball",180,240));

balls.push(new ball("ball",320,240));
balls.push(new ball("ball",350,240));
balls.push(new ball("ball",380,240));
balls.push(new ball("ball",410,240));
balls.push(new ball("ball",440,240));
balls.push(new ball("ball",470,240));




balls.push(new ball("ball",120,280));

balls.push(new ball("ball",180,280));




balls.push(new ball("ball",320,280));

balls.push(new ball("ball",380,280));






balls.push(new ball("ball",120,310));

balls.push(new ball("ball",180,310));
balls.push(new ball("ball",210,310));
balls.push(new ball("ball",250,310));
balls.push(new ball("ball",290,310));
balls.push(new ball("ball",320,310));

balls.push(new ball("ball",380,310));





balls.push(new ball("ball",30,350));
balls.push(new ball("ball",60,350));
balls.push(new ball("ball",90,350));
balls.push(new ball("ball",120,350));
balls.push(new ball("ball",150,350));
balls.push(new ball("ball",180,350));
balls.push(new ball("ball",210,350));

balls.push(new ball("ball",290,350));
balls.push(new ball("ball",320,350));
balls.push(new ball("ball",350,350));
balls.push(new ball("ball",380,350));
balls.push(new ball("ball",410,350));
balls.push(new ball("ball",440,350));
balls.push(new ball("ball",470,350));




balls.push(new ball("ball",30,380));


balls.push(new ball("ball",120,380));


balls.push(new ball("ball",210,380));

balls.push(new ball("ball",290,380));


balls.push(new ball("ball",380,380));

balls.push(new ball("ball",470,380));




balls.push(new ball("ball",30,410));
balls.push(new ball("ball",60,410));

balls.push(new ball("ball",120,410));
balls.push(new ball("ball",150,410));
balls.push(new ball("ball",180,410));
balls.push(new ball("ball",210,410));
balls.push(new ball("ball",250,410));
balls.push(new ball("ball",290,410));
balls.push(new ball("ball",320,410));
balls.push(new ball("ball",350,410));
balls.push(new ball("ball",380,410));

balls.push(new ball("ball",440,410));
balls.push(new ball("ball",470,410));




big_balls.push(new big_ball("ball",30,440));
balls.push(new ball("ball",60,440));
balls.push(new ball("ball",90,440));
balls.push(new ball("ball",120,440));

balls.push(new ball("ball",180,440));
balls.push(new ball("ball",210,440));

balls.push(new ball("ball",290,440));
balls.push(new ball("ball",320,440));

balls.push(new ball("ball",380,440));
balls.push(new ball("ball",410,440));
balls.push(new ball("ball",440,440));
big_balls.push(new big_ball("ball",470,440));

balls.push(new ball("ball",30,470));
balls.push(new ball("ball",60,470));
balls.push(new ball("ball",90,470));
balls.push(new ball("ball",120,470));
balls.push(new ball("ball",150,470));
balls.push(new ball("ball",180,470));
balls.push(new ball("ball",210,470));
balls.push(new ball("ball",250,470));
balls.push(new ball("ball",290,470));
balls.push(new ball("ball",320,470));
balls.push(new ball("ball",350,470));
balls.push(new ball("ball",380,470));
balls.push(new ball("ball",410,470));
balls.push(new ball("ball",440,470));
balls.push(new ball("ball",470,470));



}
function Mapa(id){
  this.id = id;

  this.draw = function(){
    ctx.beginPath();//mitad inferior limite comecocos
    ctx.moveTo(10,260);
    ctx.lineTo(100,260);
    ctx.lineTo(100,330);
    ctx.lineTo(10,330);
    ctx.lineTo(10,490);
    ctx.lineTo(490,490);
    ctx.lineTo(490,330);
    ctx.lineTo(400,330);
    ctx.lineTo(400,260);
    ctx.lineTo(490,260);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();//mitad superior comecocos limite
    ctx.moveTo(490,215)
    ctx.lineTo(400,215);
    ctx.lineTo(400,175);
    ctx.lineTo(490,175);
    ctx.lineTo(490,10);
    ctx.lineTo(10,10);
    ctx.lineTo(10,175);
    ctx.lineTo(100,175);
    ctx.lineTo(100,215);
    ctx.lineTo(10,215);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();//primer cuadrado izquiera superior
    ctx.moveTo(50,50);
    ctx.lineTo(50,100);
    ctx.lineTo(100,100);
    ctx.lineTo(100,50);
    ctx.lineTo(50,50);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();//rectangulo pequeño debajo de primer cuadrado superior
    ctx.moveTo(100,135);
    ctx.lineTo(50,135);
    ctx.lineTo(50,140);
    ctx.lineTo(100,140);
    ctx.lineTo(100,135);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();//segundo cuadrado a la derecha del primero superior
    ctx.moveTo(140,50);
    ctx.lineTo(190,50);
    ctx.lineTo(190,100);
    ctx.lineTo(140,100);
    ctx.lineTo(140,50);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();// divisor medio comecocos superior
    ctx.moveTo(270,11);
    ctx.lineTo(270,100);
    ctx.lineTo(230,100);
    ctx.lineTo(230,11);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();//cuadrado segunda mitad
    ctx.moveTo(310,50);
    ctx.lineTo(310,100);
    ctx.lineTo(360,100);
    ctx.lineTo(360,50);
    ctx.lineTo(310,50)
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // segundo cuadrado segunda mitad derecha superior
    ctx.moveTo(400,50);
    ctx.lineTo(400,100);
    ctx.lineTo(450,100);
    ctx.lineTo(450,50);
    ctx.lineTo(400,50)
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();



    ctx.beginPath();// rectangulo pequeño inferior al segundo cuadrado segunda mirad superior
    ctx.moveTo(400,135);
    ctx.lineTo(400,140);
    ctx.lineTo(450,140);
    ctx.lineTo(450,135);
    ctx.lineTo(400,135);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); //primera T
    ctx.moveTo(190,135);
    ctx.lineTo(310,135);
    ctx.lineTo(310,140);
    ctx.lineTo(270,140);
    ctx.lineTo(270,190);
    ctx.lineTo(230,190);
    ctx.lineTo(230,140);
    ctx.lineTo(190,140);
    ctx.lineTo(190,135);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();//   "|-"  1º hache izq primera T
    ctx.moveTo(140,135);
    ctx.lineTo(150,135);
    ctx.lineTo(150,180);
    ctx.lineTo(190,180);
    ctx.lineTo(190,190);
    ctx.lineTo(150,190);
    ctx.lineTo(150,215);
    ctx.lineTo(140,215);
    ctx.lineTo(140,135);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();//  "-|"  1º hache dcha primera T
    ctx.moveTo(360,135);
    ctx.lineTo(350,135);
    ctx.lineTo(350,180);
    ctx.lineTo(310,180);
    ctx.lineTo(310,190);
    ctx.lineTo(350,190);
    ctx.lineTo(350,215);
    ctx.lineTo(360,215);
    ctx.lineTo(360,135);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); //caja principal  enemigos
    ctx.moveTo(270,230);
    ctx.lineTo(310,230);
    ctx.lineTo(310,290);
    ctx.lineTo(190,290);
    ctx.lineTo(190,230);
    ctx.lineTo(230,230);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();//Rectangulo abajo izquierdo pequeño (iv en mi mapa)
    ctx.moveTo(140,260);
    ctx.lineTo(150,260);
    ctx.lineTo(150,330);
    ctx.lineTo(140,330);
    ctx.lineTo(140,260);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();//Rectagunlo abajo derecha pequeño (vi en mi mapa)
    ctx.moveTo(360,260);
    ctx.lineTo(350,260);
    ctx.lineTo(350,330);
    ctx.lineTo(360,330);
    ctx.lineTo(360,260);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();//T grande segunda
    ctx.moveTo(190,330);
    ctx.lineTo(310,330);
    ctx.lineTo(310,335);
    ctx.lineTo(270,335);
    ctx.lineTo(270,380);
    ctx.lineTo(230,380);
    ctx.lineTo(230,335);
    ctx.lineTo(190,335);
    ctx.lineTo(190,330);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();// T grande tercera
    ctx.moveTo(190,420);
    ctx.lineTo(310,420);
    ctx.lineTo(310,425);
    ctx.lineTo(270,425);
    ctx.lineTo(270,455);
    ctx.lineTo(230,455);
    ctx.lineTo(230,425);
    ctx.lineTo(190,425);
    ctx.lineTo(190,420);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); //rectangulo vii
    ctx.moveTo(190,370);
    ctx.lineTo(140,370);
    ctx.lineTo(140,380);
    ctx.lineTo(190,380);
    ctx.lineTo(190,370);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();//rectangulo viii
    ctx.moveTo(310,370);
    ctx.lineTo(360,370);
    ctx.lineTo(360,380);
    ctx.lineTo(310,380);
    ctx.lineTo(310,370);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();//  L DERECHA ABAJO "x"
    ctx.moveTo(400,370);
    ctx.lineTo(450,370);
    ctx.lineTo(450,380);
    ctx.lineTo(410,380);
    ctx.lineTo(410,410);
    ctx.lineTo(400,410);
    ctx.lineTo(400,370);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();  //L IZQUIERDA ABAJO "IX"
    ctx.moveTo(50,370);
    ctx.lineTo(100,370);
    ctx.lineTo(100,410);
    ctx.lineTo(90,410);
    ctx.lineTo(90,380);
    ctx.lineTo(50,380);
    ctx.lineTo(50,370);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); //FIGURA XI
    ctx.moveTo(140,420);
    ctx.lineTo(150,420);
    ctx.lineTo(150,455);
    ctx.lineTo(170,455);
    ctx.lineTo(50,455);
    ctx.lineTo(140,455);
    ctx.lineTo(140,420);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); //FIGURA XII
    ctx.moveTo(360,420);
    ctx.lineTo(350,420);
    ctx.lineTo(350,455);
    ctx.lineTo(330,455);
    ctx.lineTo(450,455);
    ctx.lineTo(360,455);
    ctx.lineTo(360,420);
    ctx.strokeStyle = "#0000ff";
    ctx.stroke();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.moveTo(50,50);
    // ctx.lineTo(,);
    // ctx.strokeStyle = "#0000ff";
    // ctx.stroke();
    // ctx.closePath();
    // ctx.lineTo(,);
    // ctx.lineTo(,);
    // ctx.lineTo(,);
  }
}

function fronteras(){

  var obj;
  obj = getShape("c1");
  if(obj === undefined)
    return;

  // console.log("x = " + obj.x);
  // console.log("y = " + obj.y);
  // console.log("radious = " + obj.radious);
  // console.log( " x - radio = " + (obj.x-obj.radious));
  // console.log( " y - radio = " + (obj.y- obj.radious));

  //Choque paredes exteriores

  for( var y =  230 ; y < 246 ; y++){
    if( obj.y == y){
      if( obj.x < 0){
        obj.x = 505;
      }
      if(obj.x > 505){
        obj.x = 0;
      }
    }
  }

  for( var  y = 24; y < 160 ;y++){
    if (obj.y == y){
      if( obj.x < 26){
        obj.x = obj.radious + 12;
      }
      if( obj.x > 474)
        obj.x = obj.radious + 464;
    }
  }

  for(var y = 344; y < 476; y++){
    if (obj.y == y){
      if( obj.x < 26){
        obj.x = obj.radious + 12;
      }
      if( obj.x > 474)
        obj.x = obj.radious + 464;
    }
  }
  if((obj.y - obj.radious) < 12){
    obj.y = obj.radious + 12;
  }

  if((obj.y - obj.radious) > 464){
    obj.y = obj.radious + 464;
  }

  //arriba-abajo
  if((obj.y - obj.radious) == 176-26){
      for(var x = 10; x < 110; x++){
        if(obj.x == x){
          obj.y = obj.radious + 176-28;
        }
      }
    }

    //dcha-izq
    if((obj.x - obj.radious) == 100+2){
      for(var y = 165; y < 225; y++){
        if(obj.y == y){
          obj.x = 100+16;
        }
      }
    }
    //abajo-arriba
    if((obj.y - obj.radious) == 216+2){
      for(var x = 5; x < 110; x++){
        if(obj.x == x){
          obj.y = obj.radious + 216+6;
        }
      }
    }
    //arriba-abajo
    if((obj.y - obj.radious) == 260-26){
        for(var x = 5; x < 110; x++){
          if(obj.x == x){
            obj.y = obj.radious + 260-28;
          }
        }
      }
      //dcha-izq
      if((obj.x - obj.radious) == 100+2){
        for(var y = 250; y < 340; y++){
          if(obj.y == y){
            obj.x = 100+16;
          }
        }
      }
      //abajo-arriba
      if((obj.y - obj.radious) == 330+2){
        for(var x = 5; x < 110; x++){
          if(obj.x == x){
            obj.y = obj.radious + 330+6;
          }
        }
      }
      //arriba-abajo
      if((obj.y - obj.radious) == 176-26){
          for(var x = 390; x < 495; x++){
            if(obj.x == x){
              obj.y = obj.radious + 176-28;
            }
          }
        }
      //izq-dcha
      if((obj.x - obj.radious) == 400-26){
        for(var y = 165; y < 225; y++){
          if(obj.y == y){
            obj.x = 400-16;
          }
        }
      }
      //izq-dcha
      if((obj.x - obj.radious) == 400-26){
        for(var y = 250; y < 340; y++){
          if(obj.y == y){
            obj.x = 400-16;
          }
        }
      }
      //arriba-abajo
      if((obj.y - obj.radious) == 260-26){
          for(var x = 390; x < 495; x++){
            if(obj.x == x){
              obj.y = obj.radious + 260-28;
            }
          }
        }
      //abajo-arriba
      if((obj.y - obj.radious) == 330+2){
        for(var x = 390; x < 495; x++){
          if(obj.x == x){
            obj.y = obj.radious + 330+6;
          }
        }
      }
      //abajo-arriba
      if((obj.y - obj.radious) == 216+2){
        for(var x = 390; x < 495; x++){
          if(obj.x == x){
            obj.y = obj.radious + 216+6;
          }
        }
      }





  //Choque figura XI
  if((obj.y - obj.radious) == 456){
    for(var x = 50; x < 170; x++){
      if(obj.x == x){
        obj.y = obj.radious + 458;
      }
    }
  }
  if((obj.y - obj.radious) == 430){
    for(var x = 50; x < 180; x++){
      if(obj.x == x){
        obj.y = obj.radious+426;
      }
    }
  }
  if((obj.x - obj.radious) == 114){
    for(var y = 420; y < 455; y++){
      if(obj.y == y){
        obj.x = 124;
      }
    }
  }
  if((obj.x - obj.radious) == 152){
    for(var y = 420; y < 455; y++){
      if(obj.y == y){
        obj.x = 168;
      }
    }
  }
  if((obj.y - obj.radious) == 394){
    for(var x = 140; x < 150; x++){
      if(obj.x == x){
        obj.y = obj.radious + 392;
      }
    }
  }
  //Choque figura XII
  if((obj.y - obj.radious) == 456){
    for(var x = 330; x < 450; x++){
      if(obj.x == x){
        obj.y = obj.radious + 458;
      }
    }
  }
  if((obj.y - obj.radious) == 430){
    for(var x = 330; x < 450; x++){
      if(obj.x == x){
        obj.y = obj.radious+426;
      }
    }
  }
  if((obj.x - obj.radious) == 322){
    for(var y = 420; y < 455; y++){
      if(obj.y == y){
        obj.x = 330;
      }
    }
  }
  if((obj.x - obj.radious) == 362){
    for(var y = 420; y < 455; y++){
      if(obj.y == y){
        obj.x = 376;
      }
    }
  }
  if((obj.y - obj.radious) == 394){
    for(var x = 340; x < 360; x++){
      if(obj.x == x){
        obj.y = obj.radious + 392;
      }
    }
  }


  //Choque figura XIII
  if((obj.y - obj.radious) == 456){
    for(var x = 230; x < 270; x++){
      if(obj.x == x){
        obj.y = obj.radious + 458;
      }
    }
  }
  if((obj.x - obj.radious) == 272){
    for(var y = 420; y < 455; y++){
      if(obj.y == y){
        obj.x = 286;
      }
    }
  }
  if((obj.x - obj.radious) == 204){
    for(var y = 420; y < 455; y++){
      if(obj.y == y){
        obj.x = 212;
      }
    }
  }
  if((obj.y - obj.radious) == 426){
    for(var x = 190; x < 230; x++){
      if(obj.x == x){
        obj.y = obj.radious + 430;
      }
    }
  }
  if((obj.y - obj.radious) == 426){
      for(var x = 270; x < 310; x++){
        if(obj.x == x){
          obj.y = obj.radious + 430;
        }
      }
    }
  if((obj.y - obj.radious) == 394){
      for(var x = 190; x < 310; x++){
        if(obj.x == x){
          obj.y = obj.radious + 392;
        }
      }
    }
    if((obj.x - obj.radious) == 162){
      for(var y = 410; y < 430; y++){
        if(obj.y == y){
          obj.x = 170;
        }
      }
    }
    if((obj.x - obj.radious) == 314){
      for(var y = 410; y < 437; y++){
        if(obj.y == y){
          obj.x = 330;
        }
      }
    }

    //FIGURA vii
    if((obj.y - obj.radious) == 382){
      for(var x = 140; x < 190; x++){
        if(obj.x == x){
          obj.y = obj.radious + 386;
        }
      }
    }
    if((obj.x - obj.radious) == 116){
      for(var y = 355; y < 390; y++){
        if(obj.y == y){
          obj.x = 124;
        }
      }
    }
    if((obj.x - obj.radious) == 188){
      for(var y = 355; y < 390; y++){
        if(obj.y == y){
          obj.x = 188 + 16;
        }
      }
    }
    if((obj.y - obj.radious) == 344){
      for(var x = 140; x < 190; x++){
        if(obj.x == x){
          obj.y = obj.radious + 342;
        }
      }
    }
    //FIGURA viii
    if((obj.y - obj.radious) == 382){
      for(var x = 310; x < 360; x++){
        if(obj.x == x){
          obj.y = obj.radious + 386;
        }
      }
    }
    if((obj.x - obj.radious) == 360){
      for(var y = 355; y < 390; y++){
        if(obj.y == y){
          obj.x = 358 + 18;
        }
      }
    }
    if((obj.x - obj.radious) == 286){
      for(var y = 355; y < 390; y++){
        if(obj.y == y){
          obj.x = 310 - 16;
        }
      }
    }
    if((obj.y - obj.radious) == 344){
      for(var x = 300; x < 360; x++){
        if(obj.x == x){
          obj.y = obj.radious + 342;
        }
      }
    }

    //FIGURA ix
    if((obj.y - obj.radious) == 412){
      for(var x = 90-10; x < 100+14; x++){
        if(obj.x == x){
          obj.y = obj.radious + 416;
        }
      }
    }
    if((obj.y - obj.radious) == 382){
      for(var x = 50; x < 90; x++){
        if(obj.x == x){
          obj.y = obj.radious + 386;
        }
      }
    }
    if((obj.y - obj.radious) == 344){
      for(var x = 45; x < 100; x++){
        if(obj.x == x){
          obj.y = obj.radious + 342;
        }
      }
    }
    if((obj.x - obj.radious) == 26){
      for(var y = 355; y < 390; y++){
        if(obj.y == y){
          obj.x = 34;
        }
      }
    }
    if((obj.x - obj.radious) == 64){
      for(var y = 380; y < 420; y++){
        if(obj.y == y){
          obj.x = 74;
        }
      }
    }
    if((obj.x - obj.radious) == 102){
      for(var y = 370; y < 410; y++){
        if(obj.y == y){
          obj.x = 118;
        }
      }
    }

    //FIGURA x
    if((obj.y - obj.radious) == 412){
      for(var x = 400-10; x < 410+14; x++){
        if(obj.x == x){
          obj.y = obj.radious + 416;
        }
      }
    }
    if((obj.y - obj.radious) == 382){
      for(var x = 410; x < 450; x++){
        if(obj.x == x){
          obj.y = obj.radious + 386;
        }
      }
    }
    if((obj.y - obj.radious) == 344){
      for(var x = 400; x < 450; x++){
        if(obj.x == x){
          obj.y = obj.radious + 342;
        }
      }
    }
    if((obj.x - obj.radious) == 412){
      for(var y = 380; y < 420; y++){
        if(obj.y == y){
          obj.x = 428;
        }
      }
    }
    if((obj.x - obj.radious) == 374){
      for(var y = 360; y < 420; y++){
        if(obj.y == y){
          obj.x = 384;
        }
      }
    }

    //Choque figura V
    if((obj.y - obj.radious) == 380){
      for(var x = 230; x < 270; x++){
        if(obj.x == x){
          obj.y = obj.radious + 382;
        }
      }
    }
    if((obj.x - obj.radious) == 272){
      for(var y = 335; y < 394; y++){
        if(obj.y == y){
          obj.x = 286;
        }
      }
    }
    if((obj.x - obj.radious) == 206){
      for(var y = 335; y < 394; y++){
        if(obj.y == y){
          obj.x = 216;
        }
      }
    }
    if((obj.y - obj.radious) == 336){
      for(var x = 175; x < 230; x++){
        if(obj.x == x){
          obj.y = obj.radious + 340;
        }
      }
    }
    if((obj.y - obj.radious) == 336){
        for(var x = 270; x < 320; x++){
          if(obj.x == x){
            obj.y = obj.radious + 340;
          }
        }
      }
    if((obj.y - obj.radious) == 304){
        for(var x = 175; x < 310; x++){
          if(obj.x == x){
            obj.y = obj.radious + 302;
          }
        }
      }
      if((obj.x - obj.radious) == 162){
        for(var y = 320; y < 350; y++){
          if(obj.y == y){
            obj.x = 170;
          }
        }
      }
      if((obj.x - obj.radious) == 314){
        for(var y = 320; y < 350; y++){
          if(obj.y == y){
            obj.x = 330;
          }
        }
      }

      //FIGURA IV

      if((obj.x - obj.radious) == 152){
        for(var y = 250; y < 340; y++){
          if(obj.y == y){
            obj.x = 168;
          }
        }
      }
      if((obj.x - obj.radious) == 114){
        for(var y = 250; y < 340; y++){
          if(obj.y == y){
            obj.x = 124;
          }
        }
      }

      //arriba-abajo
      if((obj.y - obj.radious) == 260-26){
          for(var x = 130; x < 160; x++){
            if(obj.x == x){
              obj.y = obj.radious + 260-28;
            }
          }
        }
        //abajo-arriba
        if((obj.y - obj.radious) == 330+2){
          for(var x = 130; x < 160; x++){
            if(obj.x == x){
              obj.y = obj.radious + 330+6;
            }
          }
        }


      //FIGURA VI

      if((obj.x - obj.radious) == 362){
        for(var y = 245; y < 345; y++){
          if(obj.y == y){
            obj.x = 378;
          }
        }
      }
      if((obj.x - obj.radious) == 350-26){
        for(var y = 240; y < 345; y++){
          if(obj.y == y){
            obj.x = 350-16;
          }
        }
      }

      //arriba-abajo
      if((obj.y - obj.radious) == 260-26){
          for(var x = 340; x < 370; x++){
            if(obj.x == x){
              obj.y = obj.radious + 260-28;
            }
          }
        }
        //abajo-arriba
        if((obj.y - obj.radious) == 330+2){
          for(var x = 340; x < 370; x++){
            if(obj.x == x){
              obj.y = obj.radious + 330+6;
            }
          }
        }




    //FIGURA 1

    //izq-dcha
    if((obj.x - obj.radious) == 24){
      for(var y = 40; y < 110; y++){
        if(obj.y == y){
          obj.x = 34;
        }
      }
    }
    //dcha-izq
    if((obj.x - obj.radious) == 102){
      for(var y = 40; y < 110; y++){
        if(obj.y == y){
          obj.x = 116;
        }
      }
    }
    //arriba-abajo
    if((obj.y - obj.radious) == 50-26){
        for(var x = 40; x < 110; x++){
          if(obj.x == x){
            obj.y = obj.radious + 50-28;
          }
        }
      }
      //abajo-arriba
      if((obj.y - obj.radious) == 102){
        for(var x = 40; x < 110; x++){
          if(obj.x == x){
            obj.y = obj.radious + 106;
          }
        }
      }

      //FIGURA 2

      //izq-dcha
      if((obj.x - obj.radious) == 140-26){
        for(var y = 40; y < 110; y++){
          if(obj.y == y){
            obj.x = 140-16;
          }
        }
      }
      //dcha-izq
      if((obj.x - obj.radious) == 190+2){
        for(var y = 40; y < 110; y++){
          if(obj.y == y){
            obj.x = 190+16;
          }
        }
      }
      //arriba-abajo
      if((obj.y - obj.radious) == 50-26){
          for(var x = 130; x < 200; x++){
            if(obj.x == x){
              obj.y = obj.radious + 50-28;
            }
          }
        }
        //abajo-arriba
        if((obj.y - obj.radious) == 100+2){
          for(var x = 130; x < 200; x++){
            if(obj.x == x){
              obj.y = obj.radious + 100+6;
            }
          }
        }



        //FIGURA 3

        //izq-dcha
        if((obj.x - obj.radious) == 50-26){
          for(var y = 125; y < 155; y++){
            if(obj.y == y){
              obj.x = 50-16;
            }
          }
        }
        //dcha-izq
        if((obj.x - obj.radious) == 100+2){
          for(var y = 125; y < 155; y++){
            if(obj.y == y){
              obj.x = 100+16;
            }
          }
        }
        //arriba-abajo
        if((obj.y - obj.radious) == 135-26){
            for(var x = 40; x < 110; x++){
              if(obj.x == x){
                obj.y = obj.radious + 135-28;
              }
            }
          }
          //abajo-arriba
          if((obj.y - obj.radious) == 140+2){
            for(var x = 40; x < 110; x++){
              if(obj.x == x){
                obj.y = obj.radious + 140+6;
              }
            }
          }
          //FIGURA 4

          //izq-dcha
          if((obj.x - obj.radious) == 310-26){
            for(var y = 40; y < 110; y++){
              if(obj.y == y){
                obj.x = 310-16;
              }
            }
          }
          //dcha-izq
          if((obj.x - obj.radious) == 360+2){
            for(var y = 40; y < 110; y++){
              if(obj.y == y){
                obj.x = 360+16;
              }
            }
          }
          //arriba-abajo
          if((obj.y - obj.radious) == 50-26){
              for(var x = 300; x < 370; x++){
                if(obj.x == x){
                  obj.y = obj.radious + 50-28;
                }
              }
            }
            //abajo-arriba
            if((obj.y - obj.radious) == 100+2){
              for(var x = 300; x < 370; x++){
                if(obj.x == x){
                  obj.y = obj.radious + 100+6;
                }
              }
            }

            //FIGURA 5

            //izq-dcha
            if((obj.x - obj.radious) == 400-26){
              for(var y = 40; y < 115; y++){
                if(obj.y == y){
                  obj.x = 400-16;
                }
              }
            }
            //dcha-izq
            if((obj.x - obj.radious) == 450+2){
              for(var y = 40; y < 115; y++){
                if(obj.y == y){
                  obj.x = 450+16;
                }
              }
            }
            //arriba-abajo
            if((obj.y - obj.radious) == 50-26){
                for(var x = 390; x < 460; x++){
                  if(obj.x == x){
                    obj.y = obj.radious + 50-28;
                  }
                }
              }
              //abajo-arriba
              if((obj.y - obj.radious) == 100+2){
                for(var x = 390; x < 460; x++){
                  if(obj.x == x){
                    obj.y = obj.radious + 100+6;
                  }
                }
              }
              //FIGURA 6

              //izq-dcha
              if((obj.x - obj.radious) == 400-26){
                for(var y = 125; y < 150; y++){
                  if(obj.y == y){
                    obj.x = 400-16;
                  }
                }
              }
              //dcha-izq
              if((obj.x - obj.radious) == 450+2){
                for(var y = 125 ; y < 150; y++){
                  if(obj.y == y){
                    obj.x = 450+16;
                  }
                }
              }
              //arriba-abajo
              if((obj.y - obj.radious) == 136-26){
                  for(var x = 390; x < 460; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 136-28;
                    }
                  }
                }
                //abajo-arriba
                if((obj.y - obj.radious) == 140+2){
                  for(var x = 390; x < 460; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 140+6;
                    }
                  }
                }
                //FIGURA 7

                //izq-dcha
                if((obj.x - obj.radious) == 230-26){
                  for(var y = 5; y < 110; y++){
                    if(obj.y == y){
                      obj.x = 230-16;
                    }
                  }
                }
                //dcha-izq
                if((obj.x - obj.radious) == 270+2){
                  for(var y = 5 ; y < 110; y++){
                    if(obj.y == y){
                      obj.x = 270+16;
                    }
                  }
                }

                //abajo-arriba
                if((obj.y - obj.radious) == 100+2){
                  for(var x = 220; x < 280; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 100+6;
                    }
                  }
                }

              //FIGURA 8 CUADRAD0 INICIAL

              //arriba-abajo
              if((obj.y - obj.radious) == 230-26){
                  for(var x = 180; x < 240; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 230-28;
                    }
                  }
                }

                //abajo-arriba
                if((obj.y - obj.radious) == 230+2){
                  for(var x = 180; x < 240; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 230+6;
                    }
                  }
                }



              //arriba-abajo
              if((obj.y - obj.radious) == 230-26){
                  for(var x = 260; x < 320; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 230-28;
                    }
                  }
                }

                //abajo-arriba
                if((obj.y - obj.radious) == 230+2){
                  for(var x = 260; x < 320; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 230+6;
                    }
                  }
                }

                //arriba-abajo
                if((obj.y - obj.radious) == 290-26){
                    for(var x = 180; x < 320; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 290-28;
                      }
                    }
                  }


                //abajo-arriba
                if((obj.y - obj.radious) == 290+2){
                  for(var x = 180; x < 320; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 290+6;
                    }
                  }
                }

                //izq-dcha
                if((obj.x - obj.radious) == 190-26){
                  for(var y = 220; y < 300; y++){
                    if(obj.y == y){
                      obj.x = 190-16;
                    }
                  }
                }
                //dcha-izq
                if((obj.x - obj.radious) == 190+2){
                  for(var y = 220; y < 300; y++){
                    if(obj.y == y){
                      obj.x = 190+16;
                    }
                  }
                }
                //izq-dcha
                if((obj.x - obj.radious) == 310-26){
                  for(var y = 220; y < 300; y++){
                    if(obj.y == y){
                      obj.x = 310-16;
                    }
                  }
                }
                //dcha-izq
                if((obj.x - obj.radious) == 310+2){
                  for(var y = 220; y < 300; y++){
                    if(obj.y == y){
                      obj.x = 310+16;
                    }
                  }
                }
            //FIGURA i


            //izq-dcha
            if((obj.x - obj.radious) == 140-26){
              for(var y = 125; y < 230; y++){
                if(obj.y == y){
                  obj.x = 140-16;
                }
              }
            }
            //dcha-izq
            if((obj.x - obj.radious) == 150+2){
              for(var y = 125; y < 185; y++){
                if(obj.y == y){
                  obj.x = 150+16;
                }
              }
            }
            //dcha-izq
            if((obj.x - obj.radious) == 150+2){
              for(var y = 185; y < 225; y++){
                if(obj.y == y){
                  obj.x = 150+16;
                }
              }
            }
            //dcha-izq
            if((obj.x - obj.radious) == 190+2){
              for(var y = 170; y < 200; y++){
                if(obj.y == y){
                  obj.x = 190+16;
                }
              }
            }
            //arriba-abajo
            if((obj.y - obj.radious) == 136-26){
                for(var x = 130; x < 160; x++){
                  if(obj.x == x){
                    obj.y = obj.radious + 136-28;
                  }
                }
              }
              //arriba-abajo
              if((obj.y - obj.radious) == 180-26){
                  for(var x = 140; x < 200; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 180-28;
                    }
                  }
                }
                //abajo-arriba
                if((obj.y - obj.radious) == 190+2){
                  for(var x = 140; x < 200; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 190+6;
                    }
                  }
                }
                //abajo-arriba
                if((obj.y - obj.radious) == 216+2){
                  for(var x = 125; x < 230; x++){
                    if(obj.x == x){
                      obj.y = obj.radious + 216+6;
                    }
                  }
                }



                //FIGURA ii

                //arriba-abajo
                if((obj.y - obj.radious) == 136-26){
                    for(var x = 180; x < 320; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 136-28;
                      }
                    }
                  }
                  //izq-dcha
                  if((obj.x - obj.radious) == 190-26){
                    for(var y = 120; y < 150; y++){
                      if(obj.y == y){
                        obj.x = 190-16;
                      }
                    }
                  }
                  //izq-dcha
                  if((obj.x - obj.radious) == 230-26){
                    for(var y = 130; y < 200; y++){
                      if(obj.y == y){
                        obj.x = 230-16;
                      }
                    }
                  }

                  //abajo-arriba
                  if((obj.y - obj.radious) == 140+2){
                    for(var x = 180; x < 240; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 140+6;
                      }
                    }
                  }
                  //abajo-arriba
                  if((obj.y - obj.radious) == 140+2){
                    for(var x = 260; x < 320; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 140+6;
                      }
                    }
                  }
                  //abajo-arriba
                  if((obj.y - obj.radious) == 190+2){
                    for(var x = 220; x < 280; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 190+6;
                      }
                    }
                  }
                  //dcha-izq
                  if((obj.x - obj.radious) == 310+2){
                    for(var y = 120; y < 150; y++){
                      if(obj.y == y){
                        obj.x = 310+16;
                      }
                    }
                  }
                  //dcha-izq
                  if((obj.x - obj.radious) == 270+2){
                    for(var y = 130; y < 200; y++){
                      if(obj.y == y){
                        obj.x = 270+16;
                      }
                    }
                  }



                //FIGURA iii
                //dcha-izq
                if((obj.x - obj.radious) == 360+2){
                  for(var y = 120; y < 230; y++){
                    if(obj.y == y){
                      obj.x = 360+16;
                    }
                  }
                }
                //arriba-abajo
                if((obj.y - obj.radious) == 136-26){
                    for(var x = 340; x < 370; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 136-28;
                      }
                    }
                  }
                //arriba-abajo
                if((obj.y - obj.radious) == 180-26){
                    for(var x = 295; x < 360; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 180-28;
                      }
                    }
                  }
                  //izq-dcha
                  if((obj.x - obj.radious) == 350-26){
                    for(var y = 120; y < 185; y++){
                      if(obj.y == y){
                        obj.x = 350-16;
                      }
                    }
                  }
                  //izq-dcha
                  if((obj.x - obj.radious) == 310-26){
                    for(var y = 170; y < 200; y++){
                      if(obj.y == y){
                        obj.x = 310-16;
                      }
                    }
                  }
                  //izq-dcha
                  if((obj.x - obj.radious) == 350-26){
                    for(var y = 180; y < 230; y++){
                      if(obj.y == y){
                        obj.x = 350-16;
                      }
                    }
                  }
                  //abajo-arriba
                  if((obj.y - obj.radious) == 190+2){
                    for(var x = 295; x < 360; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 190+6;
                      }
                    }
                  }
                  //abajo-arriba
                  if((obj.y - obj.radious) == 216+2){
                    for(var x = 340; x < 370; x++){
                      if(obj.x == x){
                        obj.y = obj.radious + 216+6;
                      }
                    }
                  }



}


function allowDrop(ev) {
    ev.preventDefault();
}



function drag(ev) {
    ev.dataTransfer.setData("element", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("element");

    var cc;
    cc = getShape("c1");
    if(cc === undefined)
      return;

	if(document.getElementById(id)==document.getElementById('drag1')){
    cc.image.src = "pacman_green_right.png";
    cc.colour = "pacman_green";
    cc.draw();
	}
	if(document.getElementById(id)==document.getElementById('drag2')){
    // console.log("azul");
    cc.image.src = "pacman_blue_right.png";
    cc.colour = "pacman_blue";
    // drawShapes();
    cc.draw();
	}
	if(document.getElementById(id)==document.getElementById('drag3')){
    // console.log("amarillo");
		cc.image.src = "pacman_right.png";
    cc.colour = "pacman_yellow";
    cc.draw();
    // drawShapes();
	}
}

function clickButton(){
	if (init === false){
		clockOn();
		init = true;
	}else{
		init = false;
	}
}

function drawShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(x in shapes) {
      // console.log(shapes[0].image);
      shapes[x].draw();
    }
    for(x in balls) {
      // console.log(shapes[0].image);
      balls[x].draw();
    }
    for(x in ghosts) {
      // console.log(shapes[0].image);
      ghosts[x].draw();
    }
    for(x in big_balls) {
      // console.log(shapes[0].image);
      big_balls[x].draw();
    }
    for(x in cherrys) {
      // console.log(shapes[0].image);
      cherrys[x].draw();
    }
}

function getShape(id) {
  for(x in shapes) {
    if(shapes[x].id === id)
      return shapes[x];
  }
}


function getGhost(id) {
  for(x in ghosts) {
    if(ghosts[x].id === id)
      return ghosts[x];
  }
}


function colision(){

  var ccc;
  ccc = getShape("c1");
  if(ccc === undefined)
    return;

    for(var x=0 ; x < balls.length ; x++){
      part1 = Math.pow((ccc.x-balls[x].x),2);
      part2 = Math.pow((ccc.y-balls[x].y),2);
      condition = Math.sqrt(part1+part2);
      resta_radios = ccc.radious + balls[x].radious;
      if(condition <= resta_radios ){
        balls.splice(x,1);
        puntos =  puntos +1;
        document.getElementById("puntos").innerHTML = puntos;

      }
    }

    for(var x=0 ; x < big_balls.length ; x++){
      part1 = Math.pow((ccc.x-big_balls[x].x),2);
      part2 = Math.pow((ccc.y-big_balls[x].y),2);
      condition = Math.sqrt(part1+part2);
      resta_radios = ccc.radious + big_balls[x].radious;
      if(condition <= resta_radios ){
        big_balls.splice(x,1);
        puntos =  puntos +3;
        document.getElementById("puntos").innerHTML = puntos;

      }
    }

    for(var x=0 ; x < cherrys.length ; x++){
      part1 = Math.pow((ccc.x-cherrys[x].x),2);
      part2 = Math.pow((ccc.y-cherrys[x].y),2);
      condition = Math.sqrt(part1+part2);
      resta_radios = ccc.radious + cherrys[x].radious;
      if(condition <= resta_radios ){
        cherrys.splice(x,1);
        tiempo = 10;
        cheack_cherry();

        vidas = vidas + 1;
        Vidas();

      }
    }
    for(var x=0 ; x < ghosts.length ; x++){
      part1 = Math.pow((ccc.x-ghosts[x].x),2);
      part2 = Math.pow((ccc.y-ghosts[x].y),2);
      condition = Math.sqrt(part1+part2);
      resta_radios = ccc.radious + ghosts[x].radious;
      if(condition <= resta_radios ){
        vidas =  vidas -1;
        var pacm;
        pacm = getShape("c1");
        if(pacm === undefined)
          return;
        Vidas();
        alert("TIENES UNA VIDA MENOS!");
        pacm.x = 230;
        pacm.y = 250;



      }
    }

  }


function Vidas(){
  // console.log("vidas" +vidas)
  if(vidas == 3){
    document.getElementById("vida1").src = "icono.png";
    document.getElementById("vida2").src = "icono.png";
    document.getElementById("vida3").src = "icono.png";
  }
  if(vidas == 2){
    document.getElementById("vida1").src = "icono.png";
    document.getElementById("vida2").src = "icono.png";
    document.getElementById("vida3").src = "empty.png";
  }
  if(vidas == 1){
    document.getElementById("vida1").src = "icono.png";
    document.getElementById("vida2").src = "empty.png";
    document.getElementById("vida3").src = "empty.png";
  }
  if(vidas == 0){
    alert("GAME OVER");
    location.reload(true);
  }

}

function keyHandler(event) {
  var obj;
  obj = getShape("c1");
  if(obj === undefined)
    return;

  switch(event.key) {
    case "ArrowLeft":
      fronteras();
      // console.log("obj.x = " + obj.x);
      //obj.image.src = "pacman_left.png";
      // console.log("colour", obj.colour)
      if (obj.colour === "pacman_yellow"){
        obj.image.src = "pacman_left.png";
      }else if(obj.colour === "pacman_blue"){
        obj.image.src = "pacman_blue_left.png";
      }else if(obj.colour === "pacman_green"){
        obj.image.src = "pacman_green_left.png";
      }

      obj.movex(-desp[1]);
      fronteras();
      colision();
      break;

    case "ArrowRight":
      // if(fronteras(obj.x,obj.y,obj.radious) == true){
      //   obj.movex(+desp[0]);
      //   obj.x = obj.radious;
      //   break;
      // }else{
      //   obj.movex(+desp[1]);
      //   break;
      // }
      fronteras();
      // console.log("colour", obj.colour)
      if (obj.colour === "pacman_yellow"){
        obj.image.src = "pacman_right.png";
      }else if(obj.colour === "pacman_blue"){
        obj.image.src = "pacman_blue_right.png";
      }else if(obj.colour === "pacman_green"){
        obj.image.src = "pacman_green_right.png";
      }

      //obj.image.src = "pacman_right.png";
      obj.movex(+desp[1]);
      fronteras();
      colision();
      break;
    case "ArrowUp":
      // if(fronteras(obj.x,obj.y,obj.radious) == true){
      //   obj.movey(-desp[0]);
      //   obj.x = obj.radious;
      //   break;
      // }else {
      //   obj.movey(-desp[1]);
      //   break;
      // }
        fronteras();
        //obj.image.src = "pacman_up.png";
        // console.log("colour", obj.colour)
        if (obj.colour === "pacman_yellow"){
          obj.image.src = "pacman_up.png";
        }else if(obj.colour === "pacman_blue"){
          obj.image.src = "pacman_blue_up.png";
        }else if(obj.colour === "pacman_green"){
          obj.image.src = "pacman_green_up.png";
        }

        obj.movey(-desp[1]);
        fronteras();
        colision();
        break;
    case "ArrowDown":
      // if(fronteras(obj.x,obj.y,obj.radious) == true){
      //   obj.movey(+desp[0]);
      //   obj.x = obj.radious;
      //   break;
      // }else {
      //   obj.movey(+desp[1]);
      //   break;
      // }
        fronteras();
        // console.log("colour", obj.colour)
        //obj.image.src = "pacman_down.png";
        if (obj.colour === "pacman_yellow"){
          obj.image.src = "pacman_down.png";
        }else if(obj.colour === "pacman_blue"){
          obj.image.src = "pacman_blue_down.png";
        }else if(obj.colour === "pacman_green"){
          obj.image.src = "pacman_green_down.png";
        }

        obj.movey(+desp[1]);
        fronteras();
        colision();
        break;
    default:
      console.log("Key not handled");
  }
}


function Segundos_Minutos(repeat){
	// Clock
	segundos= document.getElementById("seconds");
	minutos = document.getElementById("minutes")
	clock = setInterval(function(){
	if(sec_max === 00){
		if(min_max === 0){
			alert("GAME OVER");
      location.reload(true);
		}else{
			min_max = min_max-1;
			sec_max = 59;
			minutos.innerHTML = min_max;
      console.log("holi");
		}
	}else{
		sec_max = sec_max - 1;
	}
		segundos.innerHTML = sec_max;
	},repeat);
}

var init = false;

function Play_Pause(){
	if (init === false){
		Segundos_Minutos(1000);
		init = true;
	}else{
		init = false;
    clearInterval(clock);
	}
}

function main(){
  canvas = document.getElementById('myCanvas');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  ctx = canvas.getContext('2d');


  document.addEventListener('keydown', keyHandler, false);
  // shapes.push(new nave("halcon",document.getElementById("ima"),400,200));
  shapes.push(new Pacman("c1", 230, 250, img1,"pacman_yellow"));
  shapes.push(new Mapa("mapa"));

  var pacm;
  pacm = getShape("c1");
  if(pacm === undefined)
    return;

  pacm.colour = "pacman_yellow";
  Mapa_balls();
  Mapa_ghosts();
  Mapa_cherry();
  Vidas();
  // shapes.push(new Mapa("mapa"));
  drawShapes();
  move_ghosts();

  //setInterval(render, 100);
}
