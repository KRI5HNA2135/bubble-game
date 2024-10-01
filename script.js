var timer = 12000;
var score = 0;
var hitrn = 0;


function makeBubble(){
   var clutter = "";

for(var i=1; i<=168;i++){
   clutter += `<div class=bubble>${Math.floor(Math.random()*20)}</div>`
}

document.querySelector("#bbottom").innerHTML = clutter
}
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