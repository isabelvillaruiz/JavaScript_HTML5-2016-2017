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
