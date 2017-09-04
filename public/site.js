window.onload = function(){
var text = ["Web", "iOS","Software","C++","Java","Python"];
    var counter = 0;
    var elem = document.getElementById("changeText");
    setInterval(change, 1500);
    function change() {
     elem.textContent = text[counter];
     elem.style.color = "white";
        counter++;
        if(counter >= text.length) { counter = 0; }
    }
  }
