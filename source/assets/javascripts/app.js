function download() {
  document.getElementsByTagName("progress").display = "inline";
  progress();

}
function progress(){
  var rate = document.getElementsByTagName("progress")[0].getAttribute("value");
  var ratio = rate + "%";
  document.getElementsByTagName("h2")[0].innerHTML = ratio;
  rate = parseInt(rate)+10; 
  document.getElementsByTagName("progress")[0].setAttribute("value", rate);
  if(rate <= 100)
  setTimeout(function() { progress()}, 1000);
  else
    end_loading();
}

function end_loading(){
  document.getElementsByTagName("h2")[0].innerHTML = "download end ";

}



// maximum de ligne 10 lignes par fonction
// indentation precise
// Aucune variable de moins de trois lettres
