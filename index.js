var randomVariable1 = Math.floor(Math.random()*6);
randomVariable1++;
var randomDice1="images/dice"+randomVariable1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDice1);

var randomVariable2 = Math.floor(Math.random()*6);
randomVariable2++;
var randomDice2="images/dice"+randomVariable2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(randomVariable1>randomVariable2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 Wins Woooo!"
}
else if (randomVariable2>randomVariable1) {
  document.querySelector("h1").innerHTML="Player 2 Wins Woooo!🚩"
}
else{
  document.querySelector("h1").innerHTML="⚐Draw⚐"
}
