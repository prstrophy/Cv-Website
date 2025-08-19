function readmore() {
    var dots = document.getElementById("dots");
    var more_text = document.getElementById("more_text");
    var button_text = document.getElementById("read_more_less_button");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      button_text.innerHTML = "Read more"; 
      more_text.style.display = "none";
    } else {
      dots.style.display = "none";
      button_text.innerHTML = "Read less"; 
      more_text.style.display = "inline";
    }
  }