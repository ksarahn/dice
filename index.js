window.onload = function() {  
    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var image = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
    
    img1.src = "images/" + image[randomNumber1 - 1];
    img2.src = "images/" + image[randomNumber2 - 1];
    
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").textContent = "Player 2 Wins!";
    } else {
      document.querySelector("h1").textContent = "Draw!";
    }
  }
  