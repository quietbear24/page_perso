function progress(){
  var x = document.getElementsByTagName("progress")[0].getAttribute("value");
  // transform this in integer
  proceed = true;
  x = parseInt(x) ;
while(proceed){
if(x>=100)
{
    proceed = false;
    break;
}
  //alert(x);
  x += 1;
document.getElementsByTagName("progress")[0].setAttribute("value", x);
  var x = document.getElementsByTagName("progress")[0].getAttribute("value");

  x = parseInt(x) ;
  alert(x);
  // setTimeout rapel le meme fonction au bout d'un certain temps
}
}


// maximum de ligne 10 lignes par fonction
// indentation precise
// Aucune variable de moins de trois lettres
