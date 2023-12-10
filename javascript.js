let score = 0;
let passive = 0;
let elapsedTime = 0;
let passiveUnlocked;
let scoreMaker = 0;

document.getElementById("myBtn").addEventListener("click", scoreFunction);

document.getElementById("passive").addEventListener("click", buyPassive);

document.getElementById("score").innerHTML = score;

document.getElementById("passiveCount").innerHTML = scoreMaker;

function scoreFunction() {
  //incriments score when cookie is pressed
  score = ++score;
  console.log(score);
  document.getElementById("score").innerHTML = score;
  if (score >= 100) {
    //unlocks passive if score cost is reached
    document.getElementById("passive").value = "Cost:100";
    console.log("Passive unlocked. Rose above required score");
  } else {
    //locks the passive if the score falls too low
    document.getElementById("passive").value = "Locked";
    console.log("passive locked. Fell bellow score");
  }
}

function buyPassive() {
  if (score >= 100) {
    score = score - 100;
    document.getElementById("score").innerHTML = score;
    scoreMaker = ++scoreMaker;
    document.getElementById("passiveCount").innerHTML = scoreMaker;
  } else {
    alert("Requires more funds.");
  }
}

passiveTimer = setInterval(oneSecond, 1000);

function oneSecond() {
  elapsedTime = ++elapsedTime;
  score = score + scoreMaker;
  //console.log("Time: " + elapsedTime);
  document.getElementById("score").innerHTML = score;
}

function stopPassive() {
  clearInterval(passiveTimer);
}

console.log("run");
console.log(score);
