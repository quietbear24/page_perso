// Function that change progress element attribute
function showProgress() {
   var rate = document.getElementsByTagName("progress")[0].getAttribute("value");
   var ratio = rate + "%";
   document.getElementsByTagName("h2")[0].innerHTML = ratio;
   rate = parseInt(rate) + 10; 
   console.log( rate );
   document.getElementsByTagName("progress")[0].setAttribute("value", rate);
   if (rate <= 100) {
       setTimeout( function() { showProgress() }, 1000);
   } else {
       endLoading();
   }
}

// Function called at the end of loading
function endLoading(){
   document.getElementsByTagName("h2")[0].innerHTML = "download end ";
   location.reload();
   //document.getElementsByTagName("button").click();
   //showProgress(); what the problem 
}

// function that stop the loading
function endProgress() {
}
// maximum de ligne 10 lignes par fonction
// indentation precise
// Aucune variable de moins de trois lettres
