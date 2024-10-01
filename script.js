var timer = 60;
var score = 0;
var hitrn = 0;


function makeBubble() {
   var clutter = "";
   var bubbleSize = 60; // Approximate size of each bubble in pixels (adjust as needed)
   var screenWidth = window.innerWidth;
   var screenHeight = window.innerHeight;

   // Calculate how many bubbles fit in the available screen area
   var bubblesPerRow = Math.floor(screenWidth / bubbleSize);
   var rows = Math.floor(screenHeight / bubbleSize);
   var totalBubbles = bubblesPerRow * rows;

   for (var i = 1; i <= totalBubbles; i++) {
       clutter += `<div class="bubble">${Math.floor(Math.random() * 20)}</div>`;
   }

   document.querySelector("#bbottom").innerHTML = clutter;
}

window.addEventListener("resize", makeBubble);
function runTimer(){
      var stop = setInterval(function () {
         if(timer > 0){
            timer--;
         document.querySelector("#timerval").textContent = timer;
         }

         else{
            clearInterval(stop);
            document.querySelector("#bbottom").innerHTML = `<h1>GameOver</h1>`;
         } 
      }, 1000); 
   }

function newHit(){
      hitrn = Math.floor(Math.random()*20);
      document.querySelector("#hitval").textContent = hitrn;
   }
function newScore(){
   score += 10;
   document.querySelector("#scoreval").textContent = score;

}
document.querySelector("#bbottom").addEventListener("click",function(dets){
   var clickedNum = Number(dets.target.textContent);
   if(clickedNum === hitrn){
      newScore();
      makeBubble();
      newHit();
      
   }
})


newScore();
newHit();
runTimer();
makeBubble();
